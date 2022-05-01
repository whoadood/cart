import { useState } from "react";
import { useCartContext } from "../context/CartContext";

export default function CartItem({ prod }) {
  const selectQTY = [1, 2, 3, 4, 5];
  const [select, setSelect] = useState(prod.qty);

  const { dispatch } = useCartContext();

  const handleChange = (e) => {
    setSelect(e.target.value);
    dispatch({
      type: "UPDATE_CART_QTY",
      product: { ...prod, qty: Number(e.target.value) },
    });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_FROM_CART", product: prod });
  };

  console.log(select);

  return (
    <li className="cartItem">
      <img src={prod.image} alt="product image" />
      <h3>{prod.title}</h3>
      <select type="input" name="qty" value={select} onChange={handleChange}>
        {selectQTY.map((q) => (
          <option value={q} key={`${prod.name} ${prod.id} ${q}`}>
            {q}
          </option>
        ))}
      </select>
      <button onClick={handleDelete} className="delete-item">
        X
      </button>
    </li>
  );
}
