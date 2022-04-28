import { useCartContext } from "./context/CartContext";
import CartProvider from "./context/CartContext";

function App() {
  const { state, dispatch } = useCartContext();
  console.log("cart", state);
  return (
    <div>
      <h2>hello</h2>
      <button
        onClick={() =>
          dispatch({ type: "ADD_TO_CART", newState: "hello from reducer" })
        }
      >
        add to cart
      </button>
    </div>
  );
}

export default App;
