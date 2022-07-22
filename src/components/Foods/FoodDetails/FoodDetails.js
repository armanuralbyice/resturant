import React from 'react';
import {Link, useParams} from "react-router-dom";
import Data from "../../Data/Data";
import './FoodDetails.css'
const FoodDetails = ({handelAddFood}) => {

    let {foodId} = useParams();
    const food = Data.find(food => food.id === foodId);
    const alert = () =>{
        window.alert("Product Added")
    }
    return (
        <div className='food-details'>
            <div className="details">
                <div className='foods-name'>
                    <h1>{food.name}</h1>
                </div>
                <div className='foods-description'>
                    <p>{food.Description}</p>
                </div>
                <div className='price'><h3>$ {food.price}</h3></div>

                <div className='Btn'>
                    <button onClick={()=> {
                        handelAddFood(food); alert()
                    }}>ADD TO CART</button>
                </div>
            </div>
            <div className='image'>
                <img src={food.img} alt=""/>
            </div>
        </div>
    );
};

export default FoodDetails;