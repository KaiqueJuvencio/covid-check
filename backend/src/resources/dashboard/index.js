const service = require("./service");

const index = async (req, res, next) => {
  try {
    const data = await service.buildDashboardInformation(req.query);

    return res.status(200).send(data);
  } catch (error) { 
    return next(error);
  }
};

module.exports = {
  index,
};
