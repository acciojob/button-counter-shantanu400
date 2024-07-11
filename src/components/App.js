
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [clickValue,setClickvalue]=useState(0);

  
function UpdateclickValue(){

  setClickvalue(clickValue+1);
}

  
  return (
    <div>
        <p>Button clicked {clickValue} times</p>
        <button onClick={UpdateclickValue}> </button>
    </div>
  )
}

export default App
