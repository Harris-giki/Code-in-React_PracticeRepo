//comments of this code are a part of implementation, just commented to remove compilation errors
//this is the app component where the changes from one componet are lifted to be transferred to another
// to understand the concept clearly, please view the navbar and cart components side by side

import { useState } from "react";
//import Cart from "./components/Cart";
//import Navbar from "./components/Navbar";

function App() {
  //just for demo we passed string in array here but usually in r-t there are objects passed in arrays
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <div>
      {/*
    <Navbar cartItemsCount={cartItems.length} />
    <Cart cartItems={cartItems} onClear={()=> setCartItems([])} />
    
    thus if the onclear function is passed through the cart component, we simply pass a empty string */}
    </div>
  );
}

export default App;
