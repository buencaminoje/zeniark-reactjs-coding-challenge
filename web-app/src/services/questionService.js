const axios = require("axios");

const getQuestions = async () => {
  let response = [];
  try {
    const result = await axios.get(
      "http://" + window.location.hostname + ":3001/questions"
    );
    response = result.data;
  } catch (error) {
    console.error(error);
  }
  return response;
};

module.exports = { getQuestions };
