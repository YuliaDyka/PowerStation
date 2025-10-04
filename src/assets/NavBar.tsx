import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ padding: "10px", background: "#f2f2f2" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Головна</Link>
      <Link to="/stations">Список станцій</Link>
      <Link to="/login" style={{ marginRight: "10px" }}>Увійти</Link>
      <Link to="/register">Реєстрація</Link>
    </nav>
  );
}