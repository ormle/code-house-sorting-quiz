
export const QuizResult = ( {userName, houseInfo,  resetAll} ) => {

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