import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Register from "./pages/SignupPage";
import NavBar from "../src/assets/NavBar";
import StationPage from "./pages/StationPage"; 
// import { Link } from "react-router-dom";

export default function App() {
  return (
  <Router>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/station/:id" element={<StationPage />} />
      </Routes>
    </Router>
  );
}