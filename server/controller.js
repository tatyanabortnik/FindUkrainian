const Business = require('./models/business');
const Category = require('./models/categories');

//TODO: refactor into a single function passing the model name as a parameter
exports.getBusinesses = async (_req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCategories = async (_req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//TODO: reimplement this function and use the params
//-- I dont use it, but I should have ---//

// exports.getBusinessById = async (req, res) => {
//   try {
//     const business = await Business.findById(req.params.id);
//     if (!business) {
//       return res.status(404).json({ message: 'Business not found' });
//     }
//     res.status(200).json(business);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
