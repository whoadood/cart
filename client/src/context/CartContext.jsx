import { useContext, createContext, useReducer } from "react";
import { cartReducer } from "../hooks/CartReducer";

const cartContext = createContext();

export const useCartContext = () => {
  const cart = useContext(cartContext);

  if (cart === undefined) {
    console.log("must use cart within context provider");
  }

  return cart;
};

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, "hello from context");

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}
