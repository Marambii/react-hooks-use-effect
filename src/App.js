import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
const [count, setCount] = useState(0);
const [text, setText] = useState('');

  useEffect(() => {
    console.log("useEffect called");
  });

  console.log("Component rendering");

  useEffect(() =>{
    document.title = text;
  }, [text]);

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);


  console.log("Component rendering");

  return (
    <div>
     
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <DogPics/>
    
    </div>
  
  )
}

export default App;
