import React, { useEffect, useState } from "react";
// import datapro from "./../prodoucts/data/Data.json";
import jsonData from "./data/Data.json";
import ProdauctsData from "./ProdauctsData";
import "./Prodaucts.css";
// import Vector from "./../../assets/images/Vector.png";
function Prodaucts() {
  // useEffect(() => {
  //   setProducts(jsonData.Data);
  // }, []);
  console.log(jsonData);
  const [products, setProducts] = useState([]);
  const [showLess, setShowLess] = useState(false);

  useEffect(() => {
    const filteredData = jsonData.Data.slice(0, 8);
    setProducts(filteredData);
  }, []);

  const loadMore = () => {
    const remainingData = jsonData.Data.slice(
      products.length,
      products.length + 8
    );
    setProducts([...products, ...remainingData]);
    setShowLess(true);
  };
  const handleShowLess = () => {
    const initialData = jsonData.Data.slice(0, 8);
    setProducts(initialData);
    setShowLess(false);
  };

  return (
    <div className="Products">
      <p
        style={{
          fontFamily: "Yellowtail",
          color: "#7EB693",
          fontSize: "25px",
          fontWeight: "400",
          textAlign: "center",
        }}
      >
        Categories
      </p>
      <h1
        style={{
          color: "#274C5B",
          textAlign: "center",
          fontSize: "35px",
          fontWeight: "900",
        }}
      >
        Our Products
      </h1>
      <div className="perentmain">
        {products.map((product, index) => {
          return (
            <div key={index.id}>
              <ProdauctsData product={product} />
            </div>
          );
        })}
      </div>
      {products.length < jsonData.Data.length && (
        <div className="loadmore">
          <button onClick={loadMore}>Load More</button>
        </div>
      )}
      {showLess && (
        <div className="showless">
          <button onClick={handleShowLess}>Show Less</button>
        </div>
      )}
    </div>
  );
}

export default Prodaucts;
