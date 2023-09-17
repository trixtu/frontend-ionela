import { Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StarsRating from './ui/stars-rating'
import Input from './ui/Input'
import Textarea from './ui/textarea'
import axios from 'axios'
import { CircularProgress } from '@mui/material'

export default function ProductReviews({ product }) {
  const [reviews, setReviews] = useState([])
  const [reviewsLoading, setReviewsLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [stars, setStars] = useState(0)

  function submitReview() {
    const data = {
      title,
      description,
      stars,
      product: product._id,
    }

    axios.post('/api/reviews', data).then((res) => {
      setTitle('')
      setDescription('')
      setStars(0)
      loadReviews()
    })
  }

  function loadReviews() {
    setReviewsLoading(true)
    axios.get('/api/reviews?product=' + product._id).then((res) => {
      setReviews(res.data)
      setReviewsLoading(false)
    })
  }

  useEffect(() => {
    loadReviews()
  }, [])

  return (
    <div className="mt-4">
      <Typography
        variant="h5"
        component={'h2'}
        fontWeight={'600'}
        className="mb-1"
      >
        Reviews
      </Typography>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <Paper variant="outlined" className="p-8">
            <Typography variant="subtitle1" component={'h3'} fontWeight={'600'}>
              Add a Review
            </Typography>
            <div className="flex items-center justify-start mb-2 gap-1">
              <StarsRating onChange={setStars} />
            </div>

            <Input
              type="text"
              placeholder="Title"
              required
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
            />
            <Textarea
              placeholder="Was it good? Pros? Cons?"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            <button onClick={submitReview} className="primary">
              Submit your review
            </button>
          </Paper>
        </div>
        <div>
          <Paper variant="outlined" className="p-8">
            <Typography variant="subtitle1" component={'h3'} fontWeight={'600'}>
              All Reviews
            </Typography>
            {reviewsLoading && <CircularProgress />}
            {reviews.length === 0 && <p>No reviews :(</p>}
            {reviews.length > 0 &&
              reviews.map((review) => (
                <div
                  key={review._id}
                  className="mb-3 border-t pt-3 border-gray-300"
                >
                  <div className="flex justify-between">
                    <StarsRating
                      size={'sm'}
                      disabled={true}
                      defaultHowMany={review.stars}
                    />

                    <time className="text-sm text-gray-500">
                      {new Date(review.createdAt).toLocaleString('ro-RO')}
                    </time>
                  </div>
                  <Typography variant="h6" component={'h3'}>
                    {review.title}
                  </Typography>
                  <Typography variant="body1" component={'p'}>
                    {review.description}
                  </Typography>
                </div>
              ))}
          </Paper>
        </div>
      </div>
    </div>
  )
}
