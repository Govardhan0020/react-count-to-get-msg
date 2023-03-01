import React, {useState, useEffect} from "react";
import "./style.css";

export default function App() {
  const [count,setCount] = useState(0)
  const [flag,setFlag] = useState(false)

  useEffect(() => {
if(count == 5 ){
  setFlag(!flag)
} else {
  setFlag(false)
}
},[count])

const increment = () => {
  setCount(count+1)
}

const decrement = () => {
  if(count <= 0){
    setCount(0)
  } else { 
  setCount(count-1)
}
}

  console.log(flag)
  return (
    <div>
      <h1> Counting  </h1>
      <p> At the count of 5 show some message </p>

<h4> Count :   {count} </h4>
<button onClick={increment}>click to increment  </button>
<button onClick={decrement}>click to Decrement  </button>

{
  flag  &&  <h5> The count is {count} </h5>
}
    </div>
  );
}
