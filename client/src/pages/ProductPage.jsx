import { useCartContext } from "../context/CartContext";
import "../styles/product.css";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import { useProductContext } from "../context/ProductContext";
import Loader from "../components/Loader";
import "../styles/productpage.css";

export default function ProductPage() {
  const { dispatch } = useCartContext();
  const { data, isLoading, error } = useProductContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const prod = data.filter((product) => product.id === +id)[0];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : data.length > 0 ? (
        <div className="product-container">
          <img src={prod.image} alt="product image" />
          <div className="product-details-container">
            <button
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", product: prod });
              }}
            >
              add to cart
            </button>
            <h3>{prod.title}</h3>
            <p className="product-description">{prod.description}</p>
            <div className="product-footer">
              <h4>${prod.price.toFixed(2)}</h4>
              <div className="customer-feedback-container">
                <p>{prod.rating.count} reviews</p>
                <Rating prod={prod} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
