import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Header>
      </Router>
    </>
  );
}

export default App;
