import Header from "./components/Header";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Router>
        <Header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Header>
      </Router>
    </>
  );
}

export default App;
