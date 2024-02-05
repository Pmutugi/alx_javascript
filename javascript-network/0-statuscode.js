
const request = require('request');

const getUrlStatusCode = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(`code: ${response.status}`);
  } catch (error) {
    if (error.response) {
      console.error(`Error - Status code: ${error.response.status}`);
    } else {
      console.error(`Error making request: ${error.message}`);
    }
  }
};