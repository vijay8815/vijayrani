import React,{useState,useEffect} from "react";

const Fun  =() =>{

    const [set,setInp] = useState(0);

    useEffect(() =>{
        setTimeout(() =>{setInp(set+1)},1)
    })

    return(
        <>
        <p>{set}</p>
        </>
    )

}

export default Fun