import React, {useCallback, useState} from 'react';
import { Landing } from './components/Landing.jsx';
import { Quiz }  from './components/Quiz.jsx';
import { Bg }  from './components/sketch.jsx';
function App() {
  //What parts of app show
  const [show, setShow] = useState(false); 

  const handleToggle = useCallback(() => setShow(prevShow => !prevShow),[])

  return (
    <div className=" py-8 text-white size-full">
      
      <div className=" flex flex-col justify-center text-center gap-8">
        <div className='fit-content relative'>
          <h3 className="text-3xl"> Code Ninjas </h3>
          
        </div>
        
        <h1 className="font-bold text-6xl text-shadow-lg/40 "> CODE HOUSES </h1>
        <Landing handleToggle={handleToggle} show={show}/>
        <Quiz show={show} handleToggle={handleToggle} />
      </div>
      
    </div>
  );
}

export default App;
