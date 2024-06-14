const Business = require("./models/business");
const Category = require("./models/category");

exports.getAllMiddleware = (modelName) => {
  return async (_req, res) => {
    try {
      const result = await modelName.find();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};

exports.getByIdMiddleware = (modelName) => {
  return async (req, res) => {
    try {
      const result = await modelName.findById(req.params.id);
      if (!result) {
        return res.status(404).json({ message: "Result not found" });
      }
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
