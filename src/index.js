require('dotenv').config({ path: '../../.env' });
const { fetchWithRateLimit } = require('./modules/rateLimit');

// Start fetching data with rate limiting
fetchWithRateLimit(process.env.FACEBOOK_ACCESS_TOKEN);
