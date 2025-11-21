
import { useCredentials } from "../services/credentials"
import { useEffect} from "react";

export const QuizResult = ( {userName, lastInitial, houseInfo,  resetAll} ) => {
    const { isReady, manager } = useCredentials();

    const dateTaken = new Date().toISOString()
    
    useEffect(() => {
        const userData = {
            ninjaId: userName + "." + lastInitial,
            firstName: userName,
            lastInitial: lastInitial,
            house: houseInfo.houseName,
            attemptAt: dateTaken,
        }
        const handleSave = async(userData) => {
        if (!isReady || !manager || !userData){
            console.error("Not ready!");
            return;
        }
        try{
            manager.saveData(userData);

        } catch(e){
            console.error("Failed to upload :( ", e);
        }
        }

        handleSave(userData);
    }, [isReady, manager, houseInfo.houseName, lastInitial, userName, dateTaken]
)

    return (
        <div className="border-8 mx-8 rounded-xl py-8">  
            <p className="text-3xl text-bold"> {userName}, you belong to the....</p>
            <div className="flex flex-row gap-8 mt-8"> 
                <img src={houseInfo.image} alt="" className="rounded-full w-1/5 border-8 mx-16" />
                <div className="flex flex-col text-center gap-8 mx-8">
                    <h1 className="text-2xl underline decoration-4 self-start"> {houseInfo.houseName} ! </h1>
                    <p className="text-start "> {houseInfo.description} </p>
                </div>
            </div>
            <button onClick={resetAll} className="text-2xl bg-yellow-400 w-40 min-h-16 border-8 border-yellow-500 hover:bg-yellow-500 hover:border-yellow-400 hover:text-white"> Home </button>
        </div>
    )
}