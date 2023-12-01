const axios = require("axios");

const API_URL = "https://restcountries.com/v3.1";

const fetchAllCountries = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch countries data");
  }
};

module.exports = {
  fetchAllCountries,
};
