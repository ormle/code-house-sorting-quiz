import React, {useCallback, useState} from 'react';
import { Landing } from './components/Landing.jsx';
import { Quiz }  from './components/Quiz.jsx';

function App() {
  //What parts of app show
  const [show, setShow] = useState(false); 

  const handleToggle = useCallback(() => setShow(prevShow => !prevShow),[])

  return (
    <div className=" flex flex-col justify-center gap-8 my-4 text-white text-center fit-content z-40">      
        <div className='self-center px-4'>
          <h3 className="text-xs md:text-lg lg:text-3xl md:pt-16 backdrop-blur-sm fit-content"> Code Ninjas </h3>
        </div>
        <div className='self-center px-4 '>
          <h1 className="backdrop-blur-sm font-bold text-2xl lg:text-6xl text-shadow-lg/40"> CODE HOUSES </h1>
        </div>
        
        <Landing handleToggle={handleToggle} show={show}/>
        <Quiz show={show} handleToggle={handleToggle} />
    </div>
  );
}

export default App;
