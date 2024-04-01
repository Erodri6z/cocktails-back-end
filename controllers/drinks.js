import { Drink } from "../models/drink.js"


async function index(req, res) {
  try {
    const drinks = await Drink.find({})
    res.json(drinks)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}


