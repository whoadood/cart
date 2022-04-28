import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../hooks/CartReducer";

const CartContext = createContext();

export const useCartContext = () => {
  const cart = useContext(CartContext);

  if (cart === undefined)
    console.log("cart must be called within cart context provider");

  return cart;
};

export default function CartProvider({ children }) {
  const initialCart = [];
  const [cart, dispatch] = useReducer(CartReducer, initialCart);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
