import { Schema, model, models } from 'mongoose'
import React from 'react'
import { Product } from './Product'

const WischedProductSchema = new Schema({
  userEmail: { type: String, required: true },
  product: { type: Schema.Types.ObjectId, ref: Product },
})

export const WhischedProduct =
  models?.WhischedProduct || model('WhischedProduct', WischedProductSchema)
