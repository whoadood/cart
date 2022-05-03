import React from "react";
import { useCartContext } from "../context/CartContext";
import "../styles/product.css";
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";

export default function Product({ prod }) {
  const { cart, dispatch } = useCartContext();
  const navigate = useNavigate();

  return (
    <>
      <div className="product-overlay" />
      <img src={prod.image} alt="product image" />
      <div className="product-details-container">
        <button
          onClick={() => {
            dispatch({ type: "ADD_TO_CART", product: prod });
          }}
        >
          add to cart
        </button>
        <div
          className="link-to-product"
          onClick={() => navigate(`/product/${prod.id}`)}
        >
          <h3>{prod.title.slice(0, 20)}...</h3>
          <p className="product-description">
            {prod.description.slice(0, 80)}...
          </p>
          <div className="product-footer">
            <h4>${prod.price.toFixed(2)}</h4>
            <div className="customer-feedback-container">
              <p>{prod.rating.count} reviews</p>
              <Rating prod={prod} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
