

export const Question = ({data, chooseAnswer, questionIndex}) => {

    return (
        <div> 
            <div className='fit-content relative self-center py-4'>
                <h1 className="text-3xl underline decoration-8 backdrop-blur-md"> {data[questionIndex].question}</h1>
            </div>
            
            <div className="grid grid-cols-2 text-start max-w-1/2 gap-8 mt-16 mx-16">
                <button onClick={() => chooseAnswer("A")} className="text-2xl py-8 px-8 border-8 border-pink-300 rounded-md bg-pink-300 cursor-pointer hover:border-pink-400 active:bg-pink-200">{data[questionIndex].option1}</button>
                <button onClick={() => chooseAnswer("B")} className="text-2xl py-8 px-8 border-8 border-blue-300 rounded-md bg-blue-300 cursor-pointer hover:border-blue-400 active:bg-blue-200">{data[questionIndex].option2}</button>
                <button onClick={() => chooseAnswer("C")} className="text-2xl py-8 px-8 border-8 border-orange-300 rounded-md bg-orange-300 cursor-pointer hover:border-orange-400 active:bg-orange-200">{data[questionIndex].option3}</button>
                <button onClick={() => chooseAnswer("D")} className="text-2xl py-8 px-8 border-8 border-purple-300 rounded-md bg-purple-300 cursor-pointer hover:border-purple-400 active:bg-purple-200">{data[questionIndex].option4}</button>
            </div>  
            <div className='fit-content px-80'>
                <p className="mt-4 mb-8 backdrop-blur-sm"> {questionIndex + 1}/10 </p>
            </div>
            
        </div>
    )
}
