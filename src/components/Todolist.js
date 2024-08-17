import React,{useState} from 'react'

const Todolist = () => {
    const[data,setData]=useState('');
    const [arr,setArr]=useState([]);
    function inserting()
    {
       setArr([...arr,data]);
       setData('')
    }
  return (
    <>
    <input type="text" value={data} onChange={(e) =>setData(e.target.value)} />
    <div>
        {
        arr.map((item,index)=>(
            <li key={index}>{item}</li>
        )                                                                           )}
    
</div>
<button onClick={()=>inserting()}>Add Item</button>
    </>
  )
}

export default Todolist