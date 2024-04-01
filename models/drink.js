import mongoose from 'mongoose'

const Schema = mongoose.Schema

const drinkSchema = new Schema({
  drinkName : {
    type : String,
    required: true
  },
  color : {
    type: String,
    required: true
  },
  glass: {
    type: String,
    required: true 
  },
  ingredients: {
    type: [String],
    required: true
  },
  method: {
    type: String,
    required: true
  }
})

const Drink = mongoose.model("Drink", drinkSchema)

export { Drink }