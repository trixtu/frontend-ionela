const { Schema, default: mongoose, models, model } = require('mongoose')

const CategorySchema = new Schema({
  name: { type: String, required: true },
  parent: { type: mongoose.Types.ObjectId, ref: 'Category' },
  properties: [{ type: Object }],
})

export const Category = models?.Category || model('Category', CategorySchema)
