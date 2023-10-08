import { model, models, Schema } from 'mongoose'

const TextareaSchema = new Schema({
  title: { type: String, required: true },
  value: String,
  image: [{ type: String }],
})

export const Textarea = models?.Textarea || model('Textarea', TextareaSchema)
