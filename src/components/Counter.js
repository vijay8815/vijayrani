import React, { useContext } from 'react'
import { Countercontext } from '../Context/CounterContext';

const Counter = () => {
    const {vij}=useContext(Countercontext)
  return (
    <div>
        <p>{vij}</p>
    </div>
  )
}

export default Counter;