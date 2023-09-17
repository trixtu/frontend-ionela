import { mongooseConnect } from '@/lib/mongoose'
import { Order } from '@/models/Order'
import { buffer } from 'micro'
const stripe = require('stripe')(process.env.STRIPE_SK)

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret =
  'whsec_3332de25e9d778390cb434ae4f77dcef9905d63d8fccb0073e3f6b19cd701321'

export default async function handle(req, res) {
  await mongooseConnect()
  const sig = req.headers['stripe-signature']

  let event

  try {
    event = stripe.webhooks.constructEvent(
      await buffer(req),
      sig,
      endpointSecret
    )
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`)
    return
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object
      const orderId = data.metadata.orderId
      const paid = data.payment_status === 'paid'
      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId, {
          paid: true,
        })
      }
      console.log(data)
      break
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  res.status(200).send('ok')
}

export const config = {
  api: { bodyParser: false },
}

//wins-frugal-gem-glad
// Trixtu with account id acct_1Nkt1vAvzbmk15QJ
//test-endpoint    stripe listen --forward-to localhost:3001/api/webhook
