import React from "react";

export default function Product({ prod }) {
  console.log(prod);
  return (
    <>
      <div className="product-overlay" />
      <img src={prod.image} alt="product image" />
      <div className="product-details-container">
        <button>add to cart</button>
        <h3>{prod.title.slice(0, 20)}...</h3>
        <p>{prod.description.slice(0, 80)}...</p>
        <div className="product-footer">
          <h4>${prod.price}</h4>
          <div className="customer-feedback-container">
            <p>{prod.rating.count} reviews</p>
            {/* make star rating with icons */}
            <ul className="rating-container">{prod.rating.rate}</ul>
          </div>
        </div>
      </div>
    </>
  );
}
