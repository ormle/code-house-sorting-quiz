
export const Name = ( {handleStart, setUserName, setLastInitial} ) => {

    return (
        <form className="flex flex-col" onSubmit={handleStart}>
            <div className="flex flex-row mx-40">
                <div className="flex flex-col">
                    <div className='fit-content self-start px-4 py-4'>
                        <label className="text-2xl backdrop-blur-sm"> Enter your name: </label>  
                    </div>
                    
                    <input 
                        type="text"
                        id="userName"
                        placeholder="Name"
                        required
                        maxLength={15}
                        minLength={2}
                        onChange={(e) => setUserName(e.target.value)}
                        className="bg-yellow-100 rounded-2xl p-8 mt-16 text-4xl w-5/5 border-8 border-amber-400 text-black"
                    />
                </div>
                <div className="flex flex-col">
                    <div className='fit-content relative self-start px-4 py-4'>
                        <label className="text-2xl backdrop-blur-sm ml-8"> Last name<br/> initial: </label>
                    </div>
                    <input
                        type="text"
                        id="lastInitial"
                        placeholder="A"
                        required
                        maxLength={1}
                        minLength={1}
                        onChange={(e) => setLastInitial(e.target.value)}
                        className="bg-yellow-100 rounded-2xl p-8 ml-16 mt-8 text-4xl w-2/5 border-8 border-amber-400  text-black text-center"
                    />
                </div>
            </div>
            <button className=" mt-16 text-4xl bg-yellow-500 border-8 border-yellow-400 min-w-72 min-h-32 self-center hover:border-yellow-500 hover:bg-yellow-400 hover:text-white" >Next</button>
        </form>
    )
}