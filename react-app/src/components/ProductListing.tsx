import React, { useEffect, useState } from "react";

const ProductListing = () => {
  const [products, setProducts] = useState<string[]>([]);

  //   useEffect(() => {
  //     console.log("Fetching products");
  //     setProducts(["Clothing", "HouseHold"]);
  //   });
  // this implementation of the effect hook makes the state update indefinitely therefore we need to control it
  // fixed below
  useEffect(() => {
    console.log("Fetching products");
    setProducts(["Clothing", "HouseHold"]);
  }, []);
  return <div>ProductList</div>;
};

export default ProductListing;
