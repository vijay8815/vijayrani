import React,{useState,useEffect} from 'react'

 const Local = () => {
    const[name,setName]= useState('');
    const[email,setEmail]=useState('');
    const[register,setRegister]=useState('')
    const [arr,setArr]=useState([])
 
    function shows(){
    
        localStorage.setItem('name',name);
        localStorage.setItem('email',email);
        localStorage.setItem('reg no',register.toString() );
        disp();

        
    }
    function disp(){
        let na = localStorage.getItem('name');
        let em = localStorage.getItem('email');
        let reg = localStorage.getItem('register');
        setArr([...arr,na,em,reg]);
        }
    

    

  return (
    <>
    
    
    <form>
        <label >Name</label>
        <input type="text" placeholder='enter te name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <label>Email</label>
        <input type="email" placeholder='enter the email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <label>Register</label>
        <input type="text" placeholder='enter the register ' value={register} onChange={(e)=>setRegister(e.target.value)} />
        <br/> 
        <button  type="sumbit" onClick={(event)=>shows()}>sumbit</button>

         </form>
         {
            arr.map((item,index)=>(
                <li key={index}>{item}</li>
            ))
         }
    
    
    </>
  )
}
export default Local