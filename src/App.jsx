import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/services/Services";
import Shop from "./pages/shop/Shop";
import Ourteam from "./pages/ourteam/Ourteam";
import Contact from "./pages/contact/Contact";
import { CartProvider } from "./components/context/CartContext";
// import { CartProvider } from "./components/context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/services" element={<Services></Services>} />
          <Route path="/shop" element={<Shop></Shop>} />
          <Route path="/ourteam" element={<Ourteam></Ourteam>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
