import React from 'react';
import './cart.css'
import {Link} from "react-router-dom";
const Cart = ({cart,handelAddFood,handelRemoveFood}) => {
    const Subtotal = cart.reduce((price,items)=>price + items.quantity * items.price, 0);
    const VAT = Subtotal/10;
    return (
        <div className="cart">
            <div className="customer_Details">
                <h1 style={{borderBottom:"1px solid black"}}>Edit Delivery Details</h1>
            </div>
            <div>
                <div className='cart-item-header'>Cart Items</div>
                {
                    cart.length===0 &&(
                        <div className='empty-cart'>No Item Are Added</div>
                    )
                }
                {
                    cart.map((items)=>(
                        <div className='cart-item-list'>
                            <div className="cart-item">
                              <div>
                                  <img className='cart-item-image' src={items.img} alt=""/>
                              </div>
                                <div className='cart-item-name'>
                                    <h3>{items.name}</h3>
                                    <h3>$ {items.price}</h3>
                            </div>
                            </div>
                                <div className='cart-item-function'>
                                    <button className='cart-item-remove' onClick={()=>handelRemoveFood(items)}>-</button>
                                    <h3>{items.quantity}</h3>
                                    <button className='cart-item-add'  onClick={()=>handelAddFood(items)}>+</button>

                            </div>

                        </div>

                    ))
                }
                <div style={{marginTop:"20px", textAlign:"center"}}>
                    <h4 style={{marginTop:"10px", fontFamily: "cursive"}}>SUB TOTAL: $ {Subtotal.toFixed(2)}</h4>
                    <h4 style={{marginTop:"10px", fontFamily: "cursive"}}>VAT: $ {VAT.toFixed(2)}</h4>
                    <h3 style={{marginTop:"10px", fontFamily: "cursive"}}>Total $ {(Subtotal+VAT).toFixed(2)}</h3>
                    {
                        cart.length===0 ?<button className='btn'> <Link to = "/"> Order Any Items </Link></button> : <button className='btn'><Link to="/signup">place Order</Link> </button>
                    }
                </div>
            </div>


        </div>
    );
};

export default Cart;