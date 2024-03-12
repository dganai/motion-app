const axios = require('axios');

const fetchUserInformation = async (accessToken) => {
  try {
    const response = await axios.get(
      'https://graph.facebook.com/v19.0/me?fields=id%2Cname%2Clast_name',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    throw new Error(`Failed to fetch user information: ${error.message}`);
  }
};

module.exports = { fetchUserInformation };
