import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../hooks/cartReducer";

const CartContext = createContext();

export const useCartContext = () => {
  const { cart, dispatch } = useContext(CartContext);

  if (cart === undefined) {
    console.log("must use cart context within context provider");
  }

  return { cart, dispatch };
};

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
