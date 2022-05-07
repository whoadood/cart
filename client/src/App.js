import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <Header>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Header>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
