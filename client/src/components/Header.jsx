import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import "../styles/header.css";

export default function Header({ children }) {
  const menuItems = ["profile", "cart", "settings", "logout"];
  const [active, setActive] = useState(false);
  return (
    <>
      <header className="header-container">
        <nav>
          <h1>Garage Sale</h1>
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
            <li key={item}>{item}</li>
          ))}
        </ul>
      </header>
      <main>{children}</main>
    </>
  );
}
