import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });
  const [cartItemCount, setCartItemCount] = useState(cartItems.length);

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    setCartItemCount(updatedCartItems.length);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    setCartItemCount(updatedCartItems.length);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, cartItemCount, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
