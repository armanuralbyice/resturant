import React from 'react';
import './Meal.css'
import {Link} from "react-router-dom";
const Breakfast = ({FoodItems,handelAddFood}) => {
    const breakfast = FoodItems.filter(breakfast => {
        return breakfast.category==='breakfast';
    });

    return (
        <div className='items'>
                {
                    breakfast.map((FoodItems)=>(
                        <div className='card'>
                            <div>
                            <Link to = {'/food/'+ FoodItems.id}>  <img src={FoodItems.img} alt=""/></Link>
                            </div>
                            <div className='food-name'>
                                <h4><Link to = {'/food/'+ FoodItems.id}> {FoodItems.name}</Link></h4>
                            </div>
                            <div className='food-description'>
                                <p>{FoodItems.shortDescription}</p>
                            </div>
                            <div className='food-price'>
                                <h4>$ {FoodItems.price}</h4>
                            </div>
                        </div>
                    ))
                }

        </div>
    );
};

export default Breakfast;