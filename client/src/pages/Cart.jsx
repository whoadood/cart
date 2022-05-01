import React from "react";
import { useCartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart } = useCartContext();

  return (
    <>
      <h2>Cart</h2>
      <ul className="cart-list-container">
        {cart?.map((item) => (
          <CartItem key={item.id} prod={item} />
        ))}
      </ul>
    </>
  );
}
