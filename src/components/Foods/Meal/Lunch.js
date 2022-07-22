import React from 'react';

import './Meal.css'
import {Link} from "react-router-dom";
const Lunch = ({FoodItems, handelAddFood}) => {
    const lunch = FoodItems.filter(lunch => {
        return lunch.category==='lunch';
    });
    return (
        <div className='items'>
            {
                lunch.map((FoodItems)=>(
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

export default Lunch;