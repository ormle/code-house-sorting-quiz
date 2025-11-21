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
                <div className="relative self-center fit-content px-4 ">
                    <p className="mt-8 backdrop-blur-sm">
                                        Find out which house you belong to <br></br>
                                        by pressing the button below!
                                    </p>
                </div>
                
                <button onClick={handleToggle} className="self-center bg-yellow-400 box-content size-32-24 border-8 border-yellow-500 p-8 hover:bg-yellow-500 hover:border-yellow-400 hover:text-white drop-shadow-xl"
                >
                    Start Quiz!
                </button>

            </div>
            }
        </div>
    )
}