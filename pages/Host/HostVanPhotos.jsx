import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { imageUrl } = useOutletContext();
  return <img src={imageUrl} alt="van" className="host-van-detail-image" />;
}
