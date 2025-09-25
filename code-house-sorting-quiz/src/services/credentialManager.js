import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { SignatureV4 } from "@aws-sdk/signature-v4"
import { Sha256 } from "@aws-crypto/sha256-js";

class CredentialManager {
    constructor(identityPoolId, region){
        this.identityPoolId = identityPoolId;
        this.region = region;
        this.apiGatewayUrl = null;

        this.initializeCredentials();
        this.setUpStorage();
    }

    //Using AWS SDK
    initializeCredentials(){
        this.credentialProvider = fromCognitoIdentityPool({
            identityPoolId: this.identityPoolId,
            clientConfig: {region: this.region }
        });
    }

    //Store identity in sessionStorage
    setUpStorage(){
        this.credentialProvider().then(creds => {
            //Extract and store identity for session
            if (creds.identityId){
                sessionStorage.setItem('cognito_identity_id', creds.identityId)
            }
        }).catch(err => {
            console.log('Initial credential fetch failed: ', err);
        })
    }

    //SDK refresh when called
    async getCredentials(){
        return await this.credentialProvider();
    }

    // Get credentials for AWS service clients
    getCredentialProvider() {
        return this.credentialProvider;
    }

    //API Gateway Signing
    async getSigningCredentials(){
        const creds = await this.credentialProvider();
        return {
            accessKeyId: creds.accessKeyId,
            secretAccessKey: creds.secretAccessKey,
            sessionToken: creds.sessionToken,
            region: this.region
        }
    }

    /**
     * Set API Gateway URL
     */
    setApiGatewayUrl(url){
        this.apiGatewayUrl = url;
    }

    //Make req to API Gateway
    async makeApiRequest(endpoint, method = 'POST', data = null){
        if (!this.apiGatewayUrl){
            throw new Error('API Gateway URL not set. Call setApiGatewayUrl() first.');
        }

        try{
            const credentials = await this.getSigningCredentials();
            const url = new URL(`${this.apiGatewayUrl}${endpoint}`);

            const request = {
                method, 
                hostname: url.hostname,
                path: url.pathname + url.search,
                protocol: url.protocol,
                headers: {
                    'Content-Type': 'application/json',
                    'host': url.hostname
                }
            }

            if (data) {
                request.body = JSON.stringify(data);
            }

            //Sign request
            const signer = new SignatureV4({
                credentials,
                region: this.region,
                service: 'execure-api',
                sha256: Sha256
            });

            const signedRequest = await signer.sign(request);

            //Make HTTP req
            const response = await fetch(url.toString(), {
                method: signedRequest.method,
                headers: signedRequest.headers,
                body: signedRequest.body
            })

            if (!response.ok){
                throw new Error(`API request failed: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch(e){
            console.error('API request failed: ', e);
            throw e;
        }
    }

    //POST req
    async saveData(data){
        return await this.makeApiRequest('/save-data', 'POST', data);
    }

    //Get req (Later??)
    async getData(params = {}) {
        const queryString = new URLSearchParams(params).toString();
        const endpoint = `/get-data${queryString ? `?${queryString}` : ''}`;
        return await this.makeApiRequest(endpoint, 'GET');
  }
}

export default CredentialManager;