import React from "react";
import { useCartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import "../styles/cart.css";

export default function Cart() {
  const { cart } = useCartContext();

  return (
    <>
      <h2>Cart</h2>
      <ul className="cart-list-container">
        {cart?.map((item) => (
          <CartItem key={item.id} prod={item} />
        ))}
        {cart[0] ? (
          <li className="checkout-container">
            <h3>
              $
              {cart
                ?.reduce((acc, cur) => (acc += Number(cur.qty) * cur.price), 0)
                .toFixed(2)}
            </h3>
            <button className="checkout">Checkout</button>
          </li>
        ) : (
          <h3>cart is empty...</h3>
        )}
      </ul>
    </>
  );
}
