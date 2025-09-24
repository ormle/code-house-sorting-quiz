import { useState, useEffect, useMemo } from "react";
import CredentialManager from "./credentialManager";


export const useCredentials = (identityPoolId, region, apiGatewayUrl) => {
    const [isReady, setIsReady] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    //Create manager instance
    const manager = useMemo(() => {
        const mgr = new CredentialManager(identityPoolId, region);
        if (apiGatewayUrl){
            mgr.setApiGatewayUrl(apiGatewayUrl);
        }
        return mgr;
    }, [identityPoolId, region, apiGatewayUrl]);

    //Initialize credentials
    useEffect(() => {
        const initialize = async () => {
            try{
                setLoading(true);
                //Test credential provider
                await manager.getCredentialProvider()();
                setIsReady(true);
                setError(null);
            } catch(e){
                setError(e);
                console.error('Failed to initialize credentials: ', e);
            } finally {
                setLoading(false);
            }
        }

        initialize();
    }, [manager]);

    //Wrapper fxns w/error handling

    const getData = async(params) => {
        try {
            setLoading(true);
            setError(null);
            const result = await manager.getData(params);
            return result;
        } catch(e){
            setError(e);
            throw e;
        } finally{
            setLoading(false);
        }
    }

    const updateData = async (id, data) => {
        try {
            setLoading(true);
            setError(null);
            const result = await manager.updateData(id, data);
            return result;
        } catch (e){
            setError(e);
            throw e;
        } finally {
            setLoading(false);
        }
    }

    return {
        isReady,
        loading,
        error,
        manager,
        //API methods
        getData,
        updateData
    }
}