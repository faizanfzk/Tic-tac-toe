import React from "react"
import "./App.css";
import { Tic } from "./components/Tic";

// import { Stop } from "./components/StopWatch";
// import "./components/Timer.css"

// import { ContactList } from "./components/ContactList";
// import { Timer } from "./components/Timer";



  // const [istrue, setIsTrue] = useState(false);
  // return (
  //   <div className="App">
  //     {/* <ContactList/> */}
  //     {/* <Timer/>
  //    <h2>StopWatch</h2>
  //     <Stop/> */}
  //     {istrue ? <h1>STOPWATCH</h1> : <h1>TIMER</h1>}
  //     {istrue ? <Stop /> : <Timer />}
  //     <div className="btn1">
  //     <button onClick={() => setIsTrue(!istrue)}>TOGGLE</button>
  //     </div>
  //   </div>
  // );





function App() {
   
    return (
      <>
     <Tic/>
      </>
    )
     
}

export default App;
