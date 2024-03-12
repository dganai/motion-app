# Facebook API Integration with Rate Limiting

This Node.js application fetches basic user information from the Facebook API using a provided access token. It implements rate limiting to adhere to Facebook's API rate limits and handles errors gracefully.

## Installation

1. Clone the repository to your local machine:
`git clone git@github.com:dganai/motion-app.git`


2. Navigate to the project directory:
`cd motion-app`

3. Install dependencies:
`npm install`


## Configuration

1. Create a `.env` file in the root directory of the project.

2. Add your Facebook access token to the `.env` file:
`FACEBOOK_ACCESS_TOKEN=your_facebook_access_token_here`


## Usage

To start the application, run:
`node src/index.js`


The application will continuously fetch data from the Facebook API with rate limiting applied.



