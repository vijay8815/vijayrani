import React,{useState,useEffect} from 'react'

export const LocalStorage = () => {
    const[count,setCount]=useState(parseInt(LocalStorage.getItem('count')) || 0)


    useEffect (()=>{
        LocalStorage.setItem('count',count.toString())
    },[count])
    
  return (
    <div>
    <p>
       {count}
    </p>
    <button onClick={()=> setCount(count+1)}>+</button>
    <button onClick={()=> setCount(count-1)}>-</button>
    </div>
    
    
  )
}
