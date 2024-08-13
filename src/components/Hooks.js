import React, { useState } from 'react'

const Hooks = () => {
    const [count,setCount] = useState(1);
    function crement(){
        setCount(count+5);
    }
  return (
    <>
        <p>{count}</p>
        <button onClick={()=>crement()} >Click Me</button>
    </>
  )
}

export default Hooks