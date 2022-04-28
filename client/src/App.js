import { useCartContext } from "./context/CartContext";
import { useFetch } from "./hooks/useFetch";
import Product from "./components/Product";
import { useEffect, useState } from "react";

function App() {
  const { cart, dispatch } = useCartContext();

  const { data, isLoading, error } = useFetch(
    "https://fakestoreapi.com/products",
    []
  );

  console.log(cart);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="products-container">
          {data.map((prod) => (
            <Product key={prod.id} prod={prod} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
