import { houseData } from "../assets/houseData"
import { HousePopup } from "./HousePopup"

export const Landing = ({handleToggle, show}) => {

    return (
        <div className="h-full">
            {!show && 
            <div className="flex flex-col gap-8 text-center">

                <div className="flex flex-row justify-around h-full">
                    {houseData.map((house, key) => {
                        return <HousePopup 
                                    key={key} 
                                    icon={house.image} 
                                    color={house.color} 
                                    description={house.description} 
                                    alt={house.alt} 
                                    name={house.houseName}
                                    num={house.num}
                                />
                    })}
                </div>
                
                <p className="mt-16">
                    Find out which house you belong to <br></br>
                    by pressing the button below!
                </p>
                <button onClick={handleToggle} className="self-center bg-yellow-300 box-content size-32-24 border-8 border-yellow-500 p-8 hover:bg-yellow-500 hover:border-yellow-300 hover:text-white drop-shadow-xl"
                >
                    Start Quiz!
                </button>

            </div>
            }
        </div>
    )
}