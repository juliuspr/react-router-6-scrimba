import { NavLink } from "react-router-dom";
import "../styles.scss";

export default function Navbar() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const applyActiveStyle = ({ isActive }) => (isActive ? activeStyle : null);

  return (
    <nav>
      <NavLink to="." className="logo">
        #Vanlife
      </NavLink>

      <NavLink to="/host" style={applyActiveStyle}>
        Host
      </NavLink>
      <NavLink to="/about" style={applyActiveStyle}>
        About
      </NavLink>
      <NavLink to="/vans" style={applyActiveStyle}>
        Vans
      </NavLink>
    </nav>
  );
}
