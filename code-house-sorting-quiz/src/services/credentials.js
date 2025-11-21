import { useState, useEffect, useCallback } from "react";
import CredentialManager from "./credentialManager";


export const useCredentials = (identityPoolId, region, apiGatewayUrl) => {
    const [manager, setManager] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    //Create manager instance
    useEffect(() => {
        try{
            const credentialManager = new CredentialManager();
            setManager(credentialManager);
            setIsReady(true);
            setError(null);
            //console.log("Credential manager initialized");
        }catch(e){
            console.error("Failed to initialize credential manager", e);
            setError(e.message);
            setIsReady(false);
        }
    }, [])

    const makeApiCall = useCallback( async (endpoint,method = 'POST', data=null) => {
        if (!isReady || !manager){
            throw new Error("Credential manager not ready");
        }

        setLoading(true);
        setError(null);

        try{
            const result = await manager.makeApiRequest(endpoint, method, data);
            return result;
        } catch(e){
            setError(e.message);
            throw e;
        } finally {
            setLoading(false);
        }
    }, [manager, isReady])

    //Wrapper fxns w/error handling

    const saveData = useCallback( async (data) => {
        return await makeApiCall('/results', 'POST', data);
    }, [makeApiCall])

    return {
        isReady,
        loading,
        error,
        manager,
        //API methods
        saveData
    }
}