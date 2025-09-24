import awsConfig from "../aws-config";
import { SignatureV4 } from "@aws-sdk/signature-v4"
import { Sha256 } from "@aws-crypto/sha256-js";

class CredentialManager {
    constructor(){
        //use credentials from config
        this.credentialProvider = awsConfig.credentials;
        this.region = awsConfig.region;
        this.apiGatewayUrl = awsConfig.apiGatewayUrl;

        this.setUpStorage();
    }

    //Store identity in sessionStorage
    setUpStorage(){
        this.credentialProvider().then(creds => {
            //Extract and store identity for session
            if (creds.identityId){
                //console.log(creds);
                sessionStorage.setItem('cognito_identity_id', creds.identityId)
            }
        }).catch(err => {
            console.log('Initial credential fetch failed: ', err);
        })
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
            expiration: creds.expiration,
            region: this.region
        }
    }

    //Make req to API Gateway
    async makeApiRequest(endpoint, method = 'POST', data = null){
        try{
            const credentials = await this.getSigningCredentials();
            const url = new URL(`${this.apiGatewayUrl}${endpoint}`);
            //console.log("FUll URL: " + url.toString())
            //console.log(JSON.stringify(credentials, null, 2))

            const request = {
                method, 
                hostname: url.hostname,
                path: url.pathname + url.search,
                protocol: url.protocol,
                headers: {
                    'content-type': 'application/json',
                    'host': url.hostname,
                }
            }

            if (data) {
                request.body = JSON.stringify(data);
            }

            //Sign request
            const signer = new SignatureV4({
                credentials,
                region: this.region,
                service: 'execute-api',
                sha256: Sha256
            });

            const signedRequest = await signer.sign(request);

            // Convert headers to proper case for the actual HTTP request
            const httpHeaders = {};
            Object.entries(signedRequest.headers).forEach(([key, value]) => {
                // Convert to proper case
                const properKey = key.split('-')
                    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
                    .join('-');
                httpHeaders[properKey] = value;
            });

            //Makre HTTP req
            const response = await fetch(url.toString(), {
                method: signedRequest.method,
                headers: httpHeaders,
                body: signedRequest.body,
            })

            if (!response.ok){
                throw new Error(`API request failed: ${response.status} ${response.statusText} ${[response.headers.entries()]}`);
            }

            return await response.json();
        } catch(e){
            console.error('API request failed: ', e);
            throw e;
        }
    }

    //POST req
    async saveData(data){
        return await this.makeApiRequest('/results', 'POST', data);
    }

    //Get req (Later??)
    // async getData(params = {}) {
    //     const queryString = new URLSearchParams(params).toString();
    //     const endpoint = `/houses${queryString ? `?${queryString}` : ''}`;
    //     return await this.makeApiRequest(endpoint, 'GET');
    // }
}

export default CredentialManager;