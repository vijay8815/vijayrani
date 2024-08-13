import React from 'react'

const Footer = () => {
  return (
    <>
    <div style={{backgroundColor:"gray",padding:'20px',borderRadius:'30px'}}>
    <center style={{backgroundColor:'gray'}}>
        <h2>இயற்கையின் முக்கியமான குறிப்புகள்</h2></center>
        <dl>
            <dt style={{fontWeight:"bold"}}>சுற்றுச்சூழல் பாதுகாப்பு</dt>
            <dd>இயற்கை மாசு மற்றும் அழுக்குகளை சீராக்கி, சுற்றுச்சூழலுக்கு பாதுகாப்பை வழங்குகிறது.</dd>
        </dl>
        <dl>
            <dt style={{fontWeight:"bold"}}>வாழ்விடங்களை வழங்குதல்:</dt>
            <dd>அனைத்து உயிரினங்களுக்கும் தங்குமிடங்களை மற்றும் உணவுகளை இயற்கை வழங்குகிறது.</dd>
        </dl>
        </div>
    </>
  )
}

export default Footer