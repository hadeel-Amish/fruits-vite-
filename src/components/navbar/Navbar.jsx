import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./../../assets/images/Logo.png";
import "./Navbar.css";
import { useCart } from "../context/CartContext";
// import { useCart } from "./CartContext";
function Navbar({ menu }) {
  // const [addcart, setAddcart] = useState(0);
  // const addbutton = () => {
  //   setAddcart(addcart + 1);
  // };
  const { cartItemCount } = useCart();
  const clickbutton = () => {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("bars").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("logo").style.display = "none";
    document.getElementById("form").style.display = "none";
  };
  const clickexit = () => {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("bars").style.display = "block";
    document.getElementById("logo").style.display = "block";
    document.getElementById("form").style.display = "flex";
  };
  return (
    <>
      <nav>
        <img src={logo} alt="" className="logo" id="logo" />
        <ul className="menu" id="menu">
          {menu.map((e, i) => {
            return (
              <li className="li" key={i}>
                <NavLink
                  className="menu-link"
                  activeClassName="active"
                  key={i}
                  to={e.path}
                >
                  {e.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div id="iconbar" onClick={clickbutton}>
          <i className="fa-solid fa-bars" id="bars"></i>
        </div>
        <div className="sidebar" id="sidebar">
          <div id="exit" onClick={clickexit}>
            <h3 className="exit">X</h3>
          </div>
          <ul className="sidemenu" id="sidemenu">
            {menu.map((e, i) => {
              return (
                <li className="li" key={i}>
                  <Link key={i} to={e.path}>
                    {e.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <hr style={{ marginTop: "25px" }} />
        </div>

        <form action="" style={{ display: "flex", gap: "15px" }} id="form">
          <div className="search">
            <input type="text" />
            <div className="secrchicon">
              <svg
                className="svg-inline--fa fa-magnifying-glass"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="magnifying-glass"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="cart">
            <input type="text" />
            {/* <span>{addcart}</span> */}
            <span className="span">{cartItemCount}</span>

            <div className="carticon">
              <svg
                className="svg-inline--fa fa-cart-shopping"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="cart-shopping"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                ></path>
              </svg>
            </div>
          </div>
        </form>
      </nav>
      {/* <button onClick={addbutton} style={{ margin: "100px" }}>
        add to cart
      </button> */}
    </>
  );
}

export default Navbar;
