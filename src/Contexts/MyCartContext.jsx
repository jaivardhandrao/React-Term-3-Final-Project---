import React, { createContext, useContext, useState, useEffect } from 'react';

export const MyCartContext = createContext();

export function MyCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  } , [])
  
  useEffect(()=>{
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log(cartItems);
  } , [cartItems])

  function addToCart(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function removeFromCart(item) {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== item.id));
  }

  return (
    <MyCartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </MyCartContext.Provider>
  );
}


export default MyCartContext
