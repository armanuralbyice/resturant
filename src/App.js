import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {createContext, useState} from "react";
import Breakfast from "./components/Foods/Meal/Breakfast";
import Lunch from "./components/Foods/Meal/Lunch";
import Dinner from "./components/Foods/Meal/Dinner";
import FoodDetails from "./components/Foods/FoodDetails/FoodDetails";
import data from "./components/Data/Data";
import Cart from "./components/Cart/Cart";
import SignUp from "./components/SignUp/SignUp";
function App() {
    const FoodItems = data;
    const [cart, setCart] = useState([]);
    const handelAddFood = (foods)=>{
        const foodExist = cart.find((foodItems)=>foodItems.id===foods.id);
        if(foodExist){
            setCart(cart.map((foodItems) => foodItems.id===foods.id ?
                {...foodExist,quantity:foodExist.quantity+1,FoodItems}:foodItems)
            );
        }
        else{
            setCart([...cart, {...foods, quantity:1}])
        }
    }
    const handelRemoveFood = (foods)=>{
        const foodExist = cart.find((foodItems)=>foodItems.id===foods.id);
        if(foodExist.quantity==1){
          return setCart(cart.filter((foodItems)=>foodItems.id!==foods.id));
        }
        else {
            setCart(cart.map((foodItems)=>foodItems.id===foods.id ?
                {...foodExist,quantity:foodExist.quantity-1}:foodItems)
            );
        }
    }
  return (
      <div>

              <BrowserRouter>
                  <Header></Header>
                  <Routes>
                      <Route path="/" element={ <Breakfast FoodItems={FoodItems}/>}/>}/>
                      <Route path="/lunch" element={ <Lunch FoodItems={FoodItems}/>}/>}/>
                      <Route path="/dinner" element={ <Dinner FoodItems={FoodItems}/>}/>}/>
                      <Route path="/food/:foodId" element={ <FoodDetails handelAddFood={handelAddFood}/>}/>}/>
                      <Route path="/cart" element={ <Cart cart={cart} handelAddFood={handelAddFood} handelRemoveFood={handelRemoveFood}/>}/>}/>
                      <Route path="/signup" element={ <SignUp/>}/>}/>
                  </Routes>

              </BrowserRouter>
      </div>

  );
}

export default App;
