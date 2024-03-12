const { fetchUserInformation } = require('./facebook');

const fetchWithRateLimit = async (accessToken) => {
  try {
    while (true) {
      const response = await fetchUserInformation(accessToken);
      console.log(response.data);

      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds before making the next request
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

module.exports = { fetchWithRateLimit };
