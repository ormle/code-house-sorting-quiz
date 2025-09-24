import React, {useCallback, useState} from 'react';
import { Landing } from './components/Landing.jsx'
import { Quiz }  from './components/Quiz.jsx'


function App() {
  const [show, setShow] = useState(false); 

  const handleToggle = useCallback(() => setShow(prevShow => !prevShow),[])

  //TODO
  /*House descriptions
    Background color
    Refractor code in Quiz.jsx to be less complicated
    Styling for completed quiz
    Transitions/Animations?
  */
  return (
    
    <div className=" py-8 bg-black text-white size-full">
      <div className=" flex flex-col justify-center text-center gap-8">
        <h3 className="text-4xl "> Code Ninjas </h3>
        <h1 className="font-bold text-8xl text-shadow-lg/40 "> CODE HOUSES </h1>
        <Landing handleToggle={handleToggle} show={show}/>
        <Quiz show={show} handleToggle={handleToggle} />
      </div>
    </div>
  );
}

export default App;
