import { Link } from "react-router-dom";
import "./styles.scss";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        #Vanlife
      </Link>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/vans">Vans</Link>
    </nav>
  );
}
