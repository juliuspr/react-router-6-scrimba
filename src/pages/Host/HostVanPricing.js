import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing({ price }) {
  let [van] = useOutletContext();
  return (
    <div>
      <div>$ {van.price} / day</div>
    </div>
  );
}
