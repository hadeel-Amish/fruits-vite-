import React, { useEffect, useState } from "react";
import "./Offer.css";
import jsonData from "../prodoucts/data/Data.json";
import ProdauctsData from "../prodoucts/ProdauctsData";
// import jsonData from "../../components/prodoucts/data/Data.json";
function Offer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const filteredData = jsonData.Data.slice(12, 16);
    setProducts(filteredData);
  }, []);
  const viewprodouct = () => {
    const remainingData = jsonData.Data.slice(
      products.length,
      products.length + 4
    );
    setProducts([...products, ...remainingData]);
  };

  return (
    <div className="offer">
      <div className="flex">
        <div className="text" style={{ margin: "10px 10px" }}>
          <p
            style={{
              fontFamily: "Yellowtail",
              color: "#7EB693",
              fontSize: "25px",
              fontWeight: "400",
            }}
          >
            Offer
          </p>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "35px",
              fontWeight: "900",
            }}
          >
            We Offer Organic For You
          </h1>
        </div>
        <div className="view" style={{ margin: "0 30px" }}>
          <button onClick={viewprodouct}>view all products</button>
        </div>
      </div>
      <div className="perentmain">
        {products.map((product, index) => {
          return (
            <div key={index.id}>
              <ProdauctsData product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Offer;
