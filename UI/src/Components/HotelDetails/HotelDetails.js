
import React, { useState } from 'react'


function HotelDetails() {
    const [Hotelname, setHotelname] = useState([
        {   
            id: "1",
            name : "abc", 
            ratings:"4"
        },

        {   id: "2",
            name : "123",
            ratings:"5"
        }
    ])

   const handleChange = () => {
    
    let hotelnames = Hotelname.map(function(element){
        console.log(`${element.id} ${element.name}` )
        return `${element.id} ${element.name}`;
       
   })
}
  return (
    <div className='hotelDetails' id='products'>
        <h2>List Of Hotels near you</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, molestias. Harum animi minima perferendis alias minus consectetur quas deserunt explicabo, aspernatur eaque amet cumque, atque distinctio, et eum! Odio, debitis.</p>

        <div className='hotelDetails'>
            <div className='hotel1'>
             <button onClick={handleChange}>Click me</button>
            </div>
        </div>

        
    </div>
  )
}

export default HotelDetails