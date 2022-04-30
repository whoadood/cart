import { useProductContext } from "../context/ProductContext";
import Loader from "../components/Loader";
import Product from "../components/Product";
import "../styles/products.css";

export default function Products() {
  const { data, isLoading, error } = useProductContext();

  if (isLoading) {
    return (
      <div className="loading-container">
        <Loader />
      </div>
    );
  }
  console.log(data);
  return (
    <>
      <h2> product heading</h2>
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
