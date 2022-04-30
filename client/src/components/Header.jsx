import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";

export default function Header({ children }) {
  const navigate = useNavigate();

  const menuItems = [
    { name: "profile", route: "/profile" },
    { name: "cart", route: "/cart" },
    { name: "settings", route: "/settings" },
    { name: "products", route: "/products" },
    { name: "logout", route: "/logout" },
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
              {item.name}
            </li>
          ))}
        </ul>
      </header>
      <main>
        <div className="page-container">{children}</div>
      </main>
    </>
  );
}
