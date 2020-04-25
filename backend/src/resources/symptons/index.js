const service = require("./service");

const index = async (req, res, next) => {
  try {
    const symptons = await service.getAllSymptons(req.params);

    return res.status(200).send(symptons);
  } catch (error) { 
    return next(error);
  }
};

module.exports = {
  index,
};
