import logo from '../../image/logo2.png'
import './Header.css'
import FoodsHeader from "../Foods/FoodsHeader/FoodsHeader";
import Breakfast from "../Foods/Meal/Breakfast";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div>
            <div className='header'>
            <div>
                <Link to = '/'><img style={{height:'40px',cursor:'pointer'}} src={logo} alt="" /></Link>
            </div>
            <div className='header-link'>
            <ul>
                    <li>
                        <Link to ="/cart">Cart</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        Login
                    </li>
                </ul>
                
                <ul className='btn-signup'>
                    <li>
                        <Link to = "signup"><p>Sign up</p></Link>
                    </li>
                </ul>
            </div>
            </div>
            <div className='header-main'>
            <h1>Best Food Waiting For Your bally</h1>
                <input type="search" name="" id="" />
                <button>Search</button>
         
            </div>
            <FoodsHeader></FoodsHeader>
        </div>
    );
};

export default Header;