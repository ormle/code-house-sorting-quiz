import { upload } from "@testing-library/user-event/dist/upload";
import { useCredentials } from "../services/credentials"
import { useEffect, useState } from "react";

export const QuizResult = ( {userName, lastInitial, houseInfo,  resetAll} ) => {
    const [uploadStatus, setUploadStatus] = useState("Preparing....");
    const [uploadComplete, setUploadComplete] = useState(false);
    const { isReady, manager, error } = useCredentials();

    useEffect(() => {
        const userData = {
            ninjaId: "test",
            firstName: userName,
            lastInitial: lastInitial,
            house: houseInfo.houseName,
            attemptAt: "testss"
        }
        const handleSave = async(userData) => {
        if (!isReady || !manager || !userData){
            console.error("Not ready!");
            return;
        }

        if (uploadComplete){
            console.log("Upload done already, skiping....")
            return
        }

        try{
            console.log("Attempting to uplaod")
            setUploadStatus("Uploading...")

            const result = await manager.saveData(userData);
            setUploadStatus("Results uploaded!")
            setUploadComplete(true);
            console.log("Data uploaded!");
        } catch(e){
            console.error("Failed to upload :( ", e);
            setUploadStatus("Upload failed")
        }
        }

        handleSave(userData);
    }, [isReady, manager, houseInfo.houseName, lastInitial, userName, uploadComplete]
)

    return (
        <div className="border-8 mx-8 rounded-xl py-8">  
            <p className="text-4xl text-bold"> {userName}, you belong to the....</p>
            <div className="flex flex-row gap-8 mt-8"> 
                <img src={houseInfo.image} alt="" className="rounded-full w-96 border-8 mx-16" />
                <div className="flex flex-col text-center gap-8 mx-8">
                    <h1 className="text-3xl"> {houseInfo.houseName} </h1>
                    <p className="text-start"> {houseInfo.description} </p>
                </div>
            </div>
            <button onClick={resetAll} className="text-3xl bg-yellow-300 min-w-48 min-h-24 border-8 border-yellow-500 hover:bg-yellow-500 hover:border-yellow-300 hover:text-white"> Home </button>

        </div>
    )
}