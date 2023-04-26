import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams, Outlet } from "react-router-dom";

export default function HostVanDetail() {
  const [van, setVan] = useState({});

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const applyActiveStyle = ({ isActive }) => (isActive ? activeStyle : null);
  let { id } = useParams();
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, []);

  let renderVanDetails = (
    <div>
      <h2>{van.name}</h2>
      <img src={van.imageUrl} alt={`image of ${van.name}`} width={100} />

      <div className="host-van-nav">
        <NavLink to="." style={applyActiveStyle} end>
          Details
        </NavLink>
        <NavLink to="pricing" style={applyActiveStyle}>
          Pricing
        </NavLink>
        <NavLink to="photos" style={applyActiveStyle}>
          Photos
        </NavLink>
      </div>
    </div>
  );

  return (
    <div>
      <Link to=".." relative="path">
        &larr; back to my vans
      </Link>
      {renderVanDetails}
      <Outlet context={[van]} />
    </div>
  );
}
