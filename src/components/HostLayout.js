import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const applyActiveStyle = ({ isActive }) => (isActive ? activeStyle : null);

  return (
    <>
      <nav className="host-nav">
        <NavLink to="." end style={applyActiveStyle}>
          Dashboard
        </NavLink>
        <NavLink to="vans" style={applyActiveStyle}>
          Vans
        </NavLink>
        <NavLink to="income" style={applyActiveStyle}>
          Income
        </NavLink>
        <NavLink to="reviews" style={applyActiveStyle}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
