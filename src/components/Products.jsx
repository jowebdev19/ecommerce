import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

export default function Products({ filter }) {
  const [products, setProducts] = useState(null);
  //console.log(products)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      if (filter === "All") {
        setProducts(response.data);
      } else {
        setProducts(
          response.data.filter((item) => {
            if (item.category === filter) {
              return item;
            }
          })
        );
        //console.log(products)
      }
    });
  }, [filter]);

  return (
    <div className="w-[85%] grid grid-cols-1 md:grid-cols-4 gap-4">
      {products?.map((product) => {
        return <ProductCard key={product.id} productInfo={product} />;
      })}
    </div>
  );
}
