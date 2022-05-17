import React, { useState } from 'react'
import './Counter.css'
export const Counter = () => {

    const [count,Setcount] = useState(0);
 
    //var value = 1


    const handleincrement = (value)=>{
Setcount(count + value);
    }


    const handledecrement = (value)=>{
        Setcount(count - value);
    }


    const handledouble = (value)=>{
        Setcount(count * value);
    }

if(count % 2 === 0){
    title.style.color=`green`
    console.log(`red`);
}else{
    title.style.color=`red`
    console.log(`blue`);
}

  return (
    <>
    <div>
        <h2 id='title'>Counter:{count}</h2>
        <div id='buttons'>
        <button onClick={()=>handleincrement(1)}>Increment</button>
        <button onClick={()=>handledouble(2)}>Double</button>
        <button onClick={()=>handledecrement(1)}>Decrement</button>
        </div>

    </div>
    </>
  )
}
