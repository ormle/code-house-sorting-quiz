
export const Name = ( {handleStart, setUserName, setLastInitial} ) => {

    return (
        <form className="flex flex-col " onSubmit={handleStart}>
            <div className="flex flex-col md:flex-row mx-16 md:mx-40 text-md md:text-2xl">
                <div className="flex flex-col">
                    <div className='fit-content px-4 py-4'>
                        <label className=" backdrop-blur-sm"> Enter your name: </label>  
                    </div>
                    
                    <input 
                        type="text"
                        id="userName"
                        placeholder="Name"
                        required
                        maxLength={15}
                        minLength={2}
                        onChange={(e) => setUserName(e.target.value)}
                        className="bg-yellow-100 rounded-2xl p-2 md:p-8 mt-4 md:mt-16 text-xl md:text-4xl w-5/5 border-8 border-amber-400 text-black"
                    />
                </div>

                <div className="flex flex-col">
                    <div className='fit-content relative px-4 py-4'>
                        <label className="backdrop-blur-sm ml-8">Last name<br/> initial: </label>
                    </div>
                    <input
                        type="text"
                        id="lastInitial"
                        placeholder="A"
                        required
                        maxLength={1}
                        minLength={1}
                        onChange={(e) => setLastInitial(e.target.value)}
                        className="bg-yellow-100 rounded-2xl p-2 self-center md:p-8 mt-4 md:mt-8 text-xl md:text-4xl w-2/5 border-8 border-amber-400  text-black text-center"
                    />
                </div>
            </div>
            <button className=" mt-16 text-4xl bg-yellow-500 border-8 border-yellow-400 min-w-64 min-h-24 self-center hover:border-yellow-500 hover:bg-yellow-400 hover:text-white" >
                Next
            </button>
        </form>
    )
}