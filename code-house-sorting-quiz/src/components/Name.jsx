
export const Name = ( {handleStart, setUserName} ) => {

    return (
        <form className="flex flex-col content-center" onSubmit={handleStart}>
            <label className="text-6xl mt-8"> Enter your name: </label>
            <input 
                type="text"
                id="userName"
                placeholder="Name"
                required
                maxLength={15}
                minLength={2}
                onChange={(e) => setUserName(e.target.value)}
                className="bg-yellow-100 rounded-2xl p-8 mt-8 text-8xl w-4/5 border-8 border-amber-400 self-center text-black"
            />
            <button className="m-16 text-4xl bg-yellow-500 border-8 border-yellow-300 min-w-72 min-h-32 self-center hover:border-yellow-500 hover:bg-yellow-300 hover:text-white" >Next</button>
        </form>
    )
}