import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  let [van] = useOutletContext();

  return (
    <div>
      <h3>Photos</h3>
      {van.imageUrl}
    </div>
  );
}
