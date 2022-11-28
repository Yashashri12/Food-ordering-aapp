import React from 'react'
import { useGlobleContext } from './context'
import Foodimg from './Components/Images/fooddelivery.jpg'
const Search = () => {
  const{query,searchPost}=useGlobleContext();
 

  return (
    <>
    <h1>Food is just few minutes away from you!!</h1>
    <div className='textDetails'>
                    <img src={Foodimg} alt="" />
                    
    <h1>Search Near By Hotel</h1>
    </div>
    <form onSubmit={(e)=>e.preventDefault()}>
      <div>
        <input type="text"placeholder="search here"
        value={query}
        onChange={(e)=>searchPost(e.target.value)}></input>
      </div>
    </form>
    </>
  )
}

export default Search