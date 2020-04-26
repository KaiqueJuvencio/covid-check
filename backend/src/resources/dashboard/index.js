const service = require("./service");

const index = async (req, res, next) => {
  try {
    const response = await service.buildDashboardInformation();

    return res.status(200).send(response);
  } catch (error) { 
    return next(error);
  }
};

const world = async (req, res, next) => {
  try {
    const response = await service.getWorld();

    return res.status(200).send(response);
  } catch (error) { 
    return next(error);
  }
};

const countries = async (req, res, next) => {
  try {
    const response = await service.getCountries(req.query);

    return res.status(200).send(response);
  } catch (error) { 
    return next(error);
  }
};

module.exports = {
  index,
  countries,
  world,
};
