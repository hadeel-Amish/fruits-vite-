import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import shopimg from "./../../assets/images/bg-4.png";
import jsonData from "../../components/prodoucts/data/Data.json";
import ProdauctsData from "../../components/prodoucts/ProdauctsData";
import Footer from "../../components/footer/Footer";

function Shop() {
  console.log(jsonData);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredData = jsonData.Data.slice(4, 16);
    setProducts(filteredData);
  }, []);
  return (
    <div>
      <Navbar
        menu={[
          { title: "Home", path: "/" },
          { title: "About", path: "/about" },
          { title: "Services", path: "/services" },
          { title: "Shop", path: "/shop" },
          { title: "OurTeam", path: "/ourteam" },
          { title: "Contact", path: "/contact" },
        ]}
      />
      <Hero img={shopimg} title="Shop" />
      <div className="perentmain">
        {products.map((product, index) => {
          return (
            <div key={index.id}>
              <ProdauctsData product={product} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
