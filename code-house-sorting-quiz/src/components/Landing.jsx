import { houseData } from "../assets/houseData"

export const Landing = ({handleToggle, show}) => {

    return (
        <>
            {!show && 
            <div className="flex flex-col gap-8 text-center">
                {/* Code House Logos */}
                <div className="flex flex-col lg:flex-row justify-around self-center box-border ">
                    <div className="flex flex-col gap-4">
                        <div className="relative fit-content ">
                            <label className="font-bold text-shadow-lg backdrop-blur-sm text-xs md:text-md lg: text-lg">{houseData[0].houseName}</label>
                        </div>
                        <img 
                            src={houseData[0].image} 
                            className="h-[200px] w-[200px] border border-8 border-red-700 rounded-full backdrop-blur-sm "
                            alt="test" 
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="relative fit-content ">
                            <label className="font-bold text-shadow-lg backdrop-blur-sm text-xs md:text-md lg: text-lg">{houseData[1].houseName}</label>
                        </div>
                        <img 
                            src={houseData[1].image} 
                            className="h-[200px] w-[200px] border border-8 border-violet-700 rounded-full backdrop-blur-sm"
                            alt="test" 
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="relative fit-content ">
                            <label className="font-bold text-shadow-lg backdrop-blur-sm text-xs md:text-md lg: text-lg">{houseData[2].houseName}</label>
                        </div>
                        <img 
                            src={houseData[2].image} 
                            className="h-[200px] w-[200px] border border-8 border-orange-700 rounded-full backdrop-blur-sm"
                            alt="test" 
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="relative fit-content ">
                            <label className="font-bold text-shadow-lg backdrop-blur-sm text-xs md:text-md lg: text-lg">{houseData[3].houseName}</label>
                        </div>
                        <img 
                            src={houseData[3].image} 
                            className="h-[200px] w-[200px] border border-8 border-green-700 rounded-full backdrop-blur-sm"
                            alt="test" 
                        />
                    </div>
                </div>
                
                <div className="self-center fit-content px-4 ">
                    <p className="relative mt-8 backdrop-blur-sm">
                                        Find out which house you belong to <br></br>
                                        by pressing the button below!
                                    </p>
                </div>
                
                <button 
                    onClick={handleToggle} 
                    className="self-center bg-yellow-400 box-content size-32-24 border-8 border-yellow-500 p-8 hover:bg-yellow-500 hover:border-yellow-400 hover:text-white drop-shadow-xl"
                >
                    Start Quiz!
                </button>

            </div>
            }
        </>
    )
}