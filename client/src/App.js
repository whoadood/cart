import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header>
        <Router>
          <Routes></Routes>
        </Router>
      </Header>
    </div>
  );
}

export default App;
