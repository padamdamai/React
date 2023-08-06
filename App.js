import React  from "react";
import Header from "./Components/Header";
import Meme from "./Components/Meme.js";
import Count from "./Components/Count";

export default function App(){
 
 
 const [count ,setCount ]=React.useState(0)

  function add(){
    setCount(function(oldValue){
      return oldValue + 1
    })
  }
  function sub(){
    setCount(oldvalue => oldvalue -1)
  }
return <div>
  <div>
    <h1>Add or Subtract </h1>
    <h1 onClick={add}>+</h1>
    <button><Count number={count}/></button>
    <h1 onClick={sub}>-</h1>
  <h2></h2>
  </div>
</div>
}


