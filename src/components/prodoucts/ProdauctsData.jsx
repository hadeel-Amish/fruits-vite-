import React from "react";
import star from "./../../assets/images/Star 3.svg";
import "./ProdauctsData.css";
// import { useCart } from "./CartContext";
import { useCart } from "../context/CartContext";
function ProdauctsData({ product }) {
  const { addToCart } = useCart();
  const { cartItems, removeFromCart } = useCart();
  const handleAddToCart = () => {
    addToCart(product);
  };
  // const handleRemoveFromCart = () => {
  //   removeFromCart(product);
  // };
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };
  return (
    <div className="perentdata">
      <img src={product.image} alt={product.title} className="imgdata" />
      <h1 className="title">{product.title}</h1>
      <hr />
      <div className="footerData">
        <p className="del-text discount ">${product.pricediscount}.00</p>
        <p className="price">price:${product.price}</p>
        <div className="stars">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
      </div>
      <div className="buttons" style={{ display: "flex" }}>
        <div className="addtocart">
          <a onClick={handleAddToCart}>Add to Cart</a>
        </div>
        <div className="addtocart">
          {/* <a onClick={handleRemoveFromCart}>Remove</a> */}
          <a onClick={() => handleRemoveFromCart(product.id)}>Remove</a>
        </div>
      </div>
    </div>
  );
}

export default ProdauctsData;
