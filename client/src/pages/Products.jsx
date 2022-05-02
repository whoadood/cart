import { useProductContext } from "../context/ProductContext";
import Loader from "../components/Loader";
import Product from "../components/Product";
import "../styles/products.css";
import { useCartContext } from "../context/CartContext";

export default function Products() {
  const { data, isLoading, error } = useProductContext();
  const { cart, dispatch } = useCartContext();

  if (isLoading) {
    return (
      <div className="loading-container">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <h2> products heading</h2>
      <ul className="product-container">
        {data?.map((product) => (
          <li key={product.id}>
            <Product prod={product} />
          </li>
        ))}
      </ul>
    </>
  );
}
