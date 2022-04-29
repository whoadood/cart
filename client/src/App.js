import { useCartContext } from "./context/CartContext";
import { useState, useEffect } from "react";
import "./styles/product.css";

const Toast = ({ messageText, error }) => {
  return <div className={error ? "toast error" : "toast"}>{messageText}</div>;
};

function App() {
  const { cart, dispatch } = useCartContext();
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        setProducts(data);
      } catch (err) {
        console.log(err);
        setMessage(true);
        setError(true);
        setMessageText(err.message);
        setTimeout(() => {
          setError(false);
          setMessage(false);
          setMessageText("");
        }, 1500);
      }
    })();
  }, []);

  console.log(cart);
  console.log(products);
  return (
    <div>
      <header>
        {message && <Toast messageText={messageText} error={error} />}
      </header>
      <div>cart {cart.reduce((acc, cur) => (acc += cur.qty), 0)}</div>
      <h2>hello</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {products?.map((product) => (
          <button
            key={product.id}
            onClick={() => {
              setMessage(true);
              setMessageText(`${product.id} added to cart`);
              dispatch({ type: "ADD_TO_CART", product });
              setTimeout(() => {
                setMessage(false);
                setMessageText("");
              }, 1500);
            }}
          >
            {product.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
