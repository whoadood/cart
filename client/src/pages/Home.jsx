import { useState, useEffect } from "react";
import { useProductContext } from "../context/ProductContext";
import Product from "../components/Product";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function Home() {
  const { data, isLoading, error } = useProductContext();

  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    if (data[0]) {
      setBestSellers(
        data.sort((a, b) => b.rating.count - a.rating.count).slice(0, 6)
      );
    }
  }, [isLoading]);

  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h2>Garage Sale</h2>
      <div className="hero-container">
        <img src="/assets/pexels-kei-scampa-2964779.jpg" alt="storefrontj" />
        <div className="CTA-container">
          <h3>One persons trash is anothers treasure</h3>
          <p>
            Garage Sale aims to simplify reselling of authentic high end
            designer items through an intuitive responsive user interface
          </p>
          <button onClick={() => navigate("/products")}>Start Shopping</button>
        </div>
      </div>
      <h2>Best Sellers</h2>
      <ul className="product-container">
        {bestSellers?.map((prod) => (
          <li key={prod.id}>
            <Product prod={prod} />
          </li>
        ))}
      </ul>
    </>
  );
}
