const Business = require('./models/business')
const Category = require('./models/categories')

exports.getBusinesses = async (_req, res) => {
  try {
    const businesses = await Business.find()
    res.status(200).json(businesses)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getCategories = async (_req, res) => {
  try {
    const categories = await Category.find()
    res.status(200).json(categories)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
