import React from "react";
import { useCartContext } from "../context/CartContext";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

import "../styles/product.css";

export default function Product({ prod }) {
  const { cart, dispatch } = useCartContext();
  const stars = [1, 2, 3, 4, 5];
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
        <div className="link-to-product" onClick={() => console.log("hello")}>
          <h3>{prod.title.slice(0, 20)}...</h3>
          <p>{prod.description.slice(0, 80)}...</p>
          <div className="product-footer">
            <h4>${prod.price.toFixed(2)}</h4>
            <div className="customer-feedback-container">
              <p>{prod.rating.count} reviews</p>
              <ul className="rating-container">
                {stars.map((star) =>
                  star < Math.floor(prod.rating.rate) ? (
                    <AiFillStar />
                  ) : star === Math.floor(prod.rating.rate) ? (
                    <BsStarHalf />
                  ) : (
                    <AiOutlineStar />
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
