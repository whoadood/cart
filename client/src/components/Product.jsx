import React from "react";
import "../styles/product.css";
import { useCartContext } from "../context/CartContext";

export default function Product({ prod }) {
  const { dispatch } = useCartContext();
  return (
    <div className="product">
      <img style={{ maxWidth: "350px" }} src={prod.image} alt={prod.title} />
      <h2>{prod.title}</h2>
      <p>{prod.description}</p>
      <h3>${prod.price}</h3>
      <div>
        {prod.rating.rate}/{prod.rating.count}
      </div>
      <button onClick={() => dispatch({ type: "ADD_TO_CART", product: prod })}>
        add to cart
      </button>
    </div>
  );
}
