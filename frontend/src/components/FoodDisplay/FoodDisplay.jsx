// import React from 'react'
import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    // getting food list array using context api
    const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
    <h2>Top dishes near you</h2>
    <div className="food-display-list">
        {food_list.map((item, index)=>{

//filter food items using if condition
          if(category==="All" || category===item.category){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>

          }
            
        })}
    </div>
      
    </div>
  )
}

export default FoodDisplay
