import { useCartContext } from "./context/CartContext";

function App() {
  const { state, dispatch } = useCartContext();
  console.log("cart", state);
  return (
    <div>
      <h2>hello</h2>
      {state === "hello from context" ? (
        <button
          onClick={() =>
            dispatch({ type: "ADD_TO_CART", newState: "hello from reducer" })
          }
        >
          add to cart
        </button>
      ) : (
        <button onClick={() => dispatch({ type: "RESET_CART" })}>
          reset cart
        </button>
      )}
    </div>
  );
}

export default App;
