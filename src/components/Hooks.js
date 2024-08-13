import React, { useState } from 'react'

const Hooks = () => {
    const [count,setCount] = useState(1);
    function increase(){
        setCount(count+5);
    }
  return (
    <>
        <p>{count}</p>
        <button onClick={()=>increase()} >Click Me</button>
    </>
  )
}

export default Hooks