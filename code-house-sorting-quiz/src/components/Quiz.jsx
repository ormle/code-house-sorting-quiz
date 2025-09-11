import { useState } from "react"
import { data } from "../assets/data"
import { houseData } from "../assets/houseData"
import { Question } from "./Question"
import { QuizResult } from "./QuizResult"
import { Name } from "./Name"

export const Quiz = ({show, handleToggle}) => {

    const [questionIndex, setQuestionIndex] = useState(0)
    const [userName, setUserName] = useState("")
    const [startQuiz, setStartQuiz] = useState(false)
    const [finishQuiz, setFinishQuiz] = useState(false)
    const [houseInfo, setHouseInfo] = useState()

    let userAnswers = []

    const handleStart = () => {
        
        setStartQuiz(true)
    }

    /**
     https://www.geeksforgeeks.org/javascript/javascript-program-to-find-the-most-frequent-element-in-an-array/ 
     */
    function mostFrequent(userAnswers) {
        let m = {}
        let maxCount = 0
        let res = null

        for (let i of userAnswers) {
            m[i] = (m[i] || 0) +1;
            if (m[i] > maxCount){
                maxCount = m[i]
                res = i
            }
        }
        return res
    }

    const getUserHouses = () => {
        let quizResult = mostFrequent(userAnswers)

        switch (quizResult) {
            case "A":
                setHouseInfo(houseData[0])
                break;
            case "B":
                setHouseInfo(houseData[2])
                break;
            case "C":
                setHouseInfo(houseData[3])
                break;
            case "D":
                setHouseInfo(houseData[1])
                break;
            default:
                console.log("Error")
        }
    }

    const chooseAnswer = ( chosenAnswer ) => {
        switch (chosenAnswer) {
            case "A":
                userAnswers.push("A");
                break;
            case "B":
                userAnswers.push("B") ;
                break
            case "C":
                userAnswers.push("C") ;
                break
            case "D":
                userAnswers.push("D") ;
                break
            default: 
                console.log("Error!")
                break
        }
        if (questionIndex < 9){
            setQuestionIndex(questionIndex+1)
        } else {
            setFinishQuiz(!finishQuiz)
            getUserHouses()
        }
    }

    const resetAll = () => {
        setStartQuiz(false)
        setUserName("")
        setFinishQuiz(false)
        setHouseInfo()
        setQuestionIndex(0)
        handleToggle()
    }

    return (
        <div>
        {show && 
            <div className="flex flex-col">
                {startQuiz === false ?  (
                    <Name handleStart={handleStart} setUserName={setUserName} />
                ):(
                    <div className="h-full">
                        {finishQuiz ? (
                            <QuizResult userName={userName} houseInfo={houseInfo} resetAll={resetAll}/>
                        ):( 
                            <Question data={data} chooseAnswer={chooseAnswer} questionIndex={questionIndex} />
                        )}{/* End finishQuiz */}
                    </div>
                   
                )} {/* End startQuiz */}
            </div>
        } {/* End show */}
        </div>
        
    )
}