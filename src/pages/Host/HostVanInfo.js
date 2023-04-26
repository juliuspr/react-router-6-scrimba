import React, { useEffect, useState } from "react";
import { Link, useParams, useOutletContext } from "react-router-dom";

export default function HostVanDetail({ type, price }) {
  let [van] = useOutletContext();
  let renderVan = (
    <div>
      <h3>Details</h3>
      <div>Type: {van.type}</div>
      <div>Description: {van.description}</div>
    </div>
  );

  return <div>{renderVan}</div>;
}
