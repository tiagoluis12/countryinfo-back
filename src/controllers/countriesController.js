const countriesService = require("../controllers/countriesService");

const getAllCountries = async (req, res, next) => {
  try {
    const countries = await countriesService.fetchAllCountries();
    res.json(countries);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCountries,
};
