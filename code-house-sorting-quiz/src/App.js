import React, {useCallback, useState} from 'react';
import { Landing } from './components/Landing.jsx'
import { Quiz }  from './components/Quiz.jsx'
//import { QuizResult } from './components/QuizResult.jsx';
//https://unsplash.com/photos/background-pattern-6NjUwCfRddM


function App() {
  const [show, setShow] = useState(false); 
  //const [finish, setFinish] = useState(false)

  const handleToggle = useCallback(() => setShow(prevShow => !prevShow),[])
  //const handleFinish = useCallback(() => setFinish(prevFinish => !prevFinish), [])

  //TODO
  /*House descriptions
    Background color
    Refractor code in Quiz.jsx to be less complicated
    Styling for completed quiz
    Transitions/Animations?
  */
  /* bg-[url('./assets/bg1.jpg')] */
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
