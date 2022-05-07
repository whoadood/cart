import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { HiMenu } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogout, HiOutlineLogin } from "react-icons/hi";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function Header({ children }) {
  const navigate = useNavigate();

  const { user, logout } = useUserContext();

  const { cart } = useCartContext();

  const cartQTY = cart?.reduce((acc, cur) => (acc += cur.qty), 0);

  const menuItems = [
    { name: "cart", icon: <FaShoppingCart />, route: "/cart" },
    { name: "products", icon: <RiShoppingBasket2Line />, route: "/products" },
  ];
  const [active, setActive] = useState(false);

  return (
    <>
      <header className="header-container">
        <nav>
          <h1 onClick={() => navigate("/")}>Garage Sale</h1>
          <div
            className="header-menu-container"
            onClick={() => setActive(!active)}
          >
            {active ? <IoIosCloseCircle /> : <HiMenu />}
          </div>
        </nav>
        <ul
          style={{
            transform: `${active ? "translateX(0)" : "translateX(0)"}`,
            opacity: `${active ? "1" : "0"}`,
            zIndex: `${active ? 3 : 0}`,
            maxHeight: `${active ? "500px" : 0}`,
            transition: "all 1s ease-in-out",
          }}
          className="header-menu-active-container"
        >
          {menuItems.map((item) => (
            <li
              onClick={() => {
                setActive(false);
                navigate(item.route);
              }}
              key={item.name}
            >
              {item.icon ? item.icon : item.name}
              {item.name === "cart" && cartQTY > 0 && (
                <div className="cart-qty">{cartQTY}</div>
              )}
            </li>
          ))}
          <li
            onClick={() => {
              setActive(false);
              if (!user.username) {
                navigate("/login");
              } else {
                logout();
              }
            }}
          >
            {user.username ? <HiOutlineLogout /> : <HiOutlineLogin />}
          </li>
        </ul>
      </header>
      <main>
        <div className="page-container">{children}</div>
      </main>
    </>
  );
}
