

export const Question = ({data, chooseAnswer, questionIndex}) => {
    
    return (
        <div> 
            <h1 className="text-4xl underline decoration-8"> {data[questionIndex].question}</h1>
            <div className="grid grid-cols-2 text-start max-w-1/2 gap-8 mt-16 mx-16">
                <button onClick={() => chooseAnswer("A")} className="text-3xl py-16 px-8 border-8 border-pink-200 rounded-md bg-pink-100 cursor-pointer hover:border-pink-300 active:bg-pink-200">{data[questionIndex].option1}</button>
                <button onClick={() => chooseAnswer("B")} className="text-3xl py-16 px-8 border-8 border-blue-200 rounded-md bg-blue-100 cursor-pointer hover:border-blue-300 active:bg-blue-200">{data[questionIndex].option2}</button>
                <button onClick={() => chooseAnswer("C")} className="text-3xl py-16 px-8 border-8 border-orange-200 rounded-md bg-orange-100 cursor-pointer hover:border-orange-300 active:bg-orange-200">{data[questionIndex].option3}</button>
                <button onClick={() => chooseAnswer("D")} className="text-3xl py-16 px-8 border-8 border-purple-200 rounded-md bg-purple-100 cursor-pointer hover:border-purple-300 active:bg-purple-200">{data[questionIndex].option4}</button>
            </div>  
            <p className="my-8"> {questionIndex + 1}/10 </p>
        </div>
    )
}
