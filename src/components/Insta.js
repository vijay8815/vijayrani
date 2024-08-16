import React, { useState } from 'react'

const Insta = () => {
  const[count,setcount]=useState(0);
  const[color,setColor]=useState('white');
  const[screencolor,setscreencolor]=useState('white');
  
  
  function likechanges(){
    setColor('blue');
    setcount(count+1);
  }

function dislikechanges(){
  if(count>0){
    setcount(count-1);}
    setColor('white');
  }

  function sharechange(){
    setscreencolor('black')

  }


  return (
    <>
    <center>
    <div className='Insta' style={{borderRadius:'30px'}}>
        <h1>INSTAGRAM</h1>

    </div>
    </center>
    <center>
    <div style={{backgroundColor:screencolor, padding:'10px',width:'300px',borderRadius:'20px'}}>
    <div className='image'>
      <center>
      <img src="https://img.freepik.com/photos-premium/beau-paysage-vibrant-grande-cascade_849761-28274.jpg" alt="loading" style={{height:'200px',borderRadius:'20px'}}/> 
      </center>
    </div>
    <div style={{backgroundColor:'grey',padding:'10px',borderRadius:'20px',margin:'10px'}}>
      <center>
      <h2>Comments </h2>
      <p>sarah__03</p>
      <p>This picture is not beautiful than me</p>
      </center>
    </div>
    <center>
    <div className='button'>
      <button id='likebutton' onClick={()=>likechanges()} style={{backgroundColor:color,margin:5}}> Like{count}</button>
      <button onClick={()=>dislikechanges()} style={{margin:5}}>Dislike</button>
      <button onClick={()=>sharechange()} style={{margin:5}}>Share</button>
      </div>
      <div>
        <button>Send Post</button>
      </div></center></div></center>
    </>
  )
}

export default Insta