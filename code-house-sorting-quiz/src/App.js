import React, {useCallback, useState} from 'react';
import { Landing } from './components/Landing.jsx';
import { Quiz }  from './components/Quiz.jsx';

function App() {
  //What parts of app show
  const [show, setShow] = useState(false); 

  const handleToggle = useCallback(() => setShow(prevShow => !prevShow),[])

  return (
    <div className=" py-8 text-white size-full relative">      
      <div className=" flex flex-col justify-center text-center gap-8">
        
        <div className='fit-content relative self-center px-4'>
          <h3 className="text-3xl backdrop-blur-sm fit-content"> Code Ninjas </h3>
        </div>
        <div className='fit-content relative self-center px-4 '>
          <h1 className="backdrop-blur-sm font-bold text-6xl text-shadow-lg/40 ba "> CODE HOUSES </h1>
        </div>
        
        <Landing handleToggle={handleToggle} show={show}/>
        <Quiz show={show} handleToggle={handleToggle} />
      
      </div>
    </div>
  );
}

export default App;
