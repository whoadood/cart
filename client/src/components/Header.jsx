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

  return (
    <>
      <header className="header-container">
        <nav>
          <h1 onClick={() => navigate("/")}>
            Garage Sale<span className="nav-tooltip">Home</span>
          </h1>
          <div className="header-menu-container">
            <ul className="header-menu-active-container">
              {menuItems.map((item) => (
                <li
                  onClick={() => {
                    navigate(item.route);
                  }}
                  key={item.name}
                >
                  {item.icon ? item.icon : item.name}
                  {item.name === "cart" && cartQTY > 0 && (
                    <div className="cart-qty">{cartQTY}</div>
                  )}
                  <span className="nav-tooltip">{item.name}</span>
                </li>
              ))}
              <li
                onClick={() => {
                  if (!user.username) {
                    navigate("/login");
                  } else {
                    logout();
                  }
                }}
              >
                {user.username ? <HiOutlineLogout /> : <HiOutlineLogin />}
                <span className="nav-tooltip">
                  {user.username ? "Logout" : "Login"}
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className="page-container">{children}</div>
      </main>
    </>
  );
}
