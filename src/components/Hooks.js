import React, { useState } from 'react'

const Hooks = () => {
    const [count,setCount] = useState(1);
    function decrement(){
        setCount(count+5);
    }
  return (
    <>
        <p>{count}</p>
        <button onClick={()=>decrement()} >Click Me</button>
    </>
  )
}

export default Hooks