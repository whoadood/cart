import React from "react";
import { useProductContext } from "../context/ProductContext";
import Product from "../components/Product";

export default function Home() {
  const { data } = useProductContext();
  const bestSellers = data
    .sort((a, b) => b.rating.count - a.rating.count)
    .slice(0, 6);

  console.log("home", bestSellers);

  return (
    <>
      <h2>Garage Sale</h2>
      <p>One persons trash is anothers treasure</p>
      <ul>
        {bestSellers?.map((prod) => (
          <li key={prod.id}>
            <Product prod={prod} />
          </li>
        ))}
      </ul>
    </>
  );
}
