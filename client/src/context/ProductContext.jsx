import { createContext, useContext } from "react";
import { useFetch } from "../hooks/useFetch";

const ProductContext = createContext();

export const useProductContext = () => {
  const { data, isLoading, error } = useContext(ProductContext);

  if (data === undefined || isLoading === undefined || error === undefined) {
    console.log("must use product context in product provider");
  }
  return { data, isLoading, error };
};

export default function ProductProvider({ children }) {
  const { data, error, isLoading } = useFetch(
    [],
    "https://fakestoreapi.com/products"
  );

  return (
    <ProductContext.Provider value={{ data, error, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
}
