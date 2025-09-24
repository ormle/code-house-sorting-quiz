import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

// Validate environment variables
const requiredEnvVars = [
  'REACT_APP_AWS_REGION',
  'REACT_APP_COGNITO_IDENTITY_POOL_ID',
  'REACT_APP_API_GATEWAY_URL'
];

const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingVars.length > 0) {
  throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
};

//Create credential provider
const credentials = fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: process.env.REACT_APP_AWS_REGION }),
    identityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID
});

const awsConfig = {
    region: process.env.REACT_APP_AWS_REGION,
    credentials: credentials,
    identityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
    apiGatewayUrl: process.env.REACT_APP_API_GATEWAY_URL
};

export default awsConfig;