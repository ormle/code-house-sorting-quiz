import AWS from 'aws-sdk'

AWS.config.update({
    region: process.env.REACT_APP_AWS_REGION,
    identityPoolId: process.env.HOUSE_APP_POOL_ID,
    api_url: process.env.REACT_APP_HOUSE_API_URL
});

export default AWS;