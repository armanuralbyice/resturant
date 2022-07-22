import React from 'react';
import './FoodsHeader.css'
import {Link} from "react-router-dom";
const FoodsHeader = () => {
    return (
        <div className='food-header'>
            <ul>
                <li>
                    <Link to='/'>Breakfast</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/lunch'>Lunch</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/dinner'>Dinner</Link>
                </li>
            </ul>
        </div>
    );
};

export default FoodsHeader;