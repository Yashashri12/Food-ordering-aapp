import React from 'react'
import './MapHotels.css'


function MapHotels() {
  return (
    <div className='outerMain'>
        <h2></h2>
        <div className='hotelDetails'>
        
        <div className='mapouter'>
           
            <div className='mapCanvas'>
                <iframe className='iframeMap' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4664.09567422162!2d73.05696484930661!3d19.02599382304227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sin!4v1669451812114!5m2!1sen!2sin"></iframe>
                <a href="https://formatjson.org/"></a>
                </div>
                
                
                </div>
                </div>
    </div>
  )
}

export default MapHotels