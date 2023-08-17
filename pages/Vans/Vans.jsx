import React, { useState } from "react";
import { Link } from "react-router-dom";
import vansList from "/data/vans.json";

export default function Vans() {
  const [vans, setVans] = useState(vansList.vans);

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vans &&
          vans.map((van) => (
            <div key={van.id} className="van-tile">
              <img src={van.imageUrl} alt="" />
              <div className="van-info">
                <h3>{van.name}</h3>
                <p>
                  ${van.price} <span>/day</span>
                </p>
              </div>
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
          ))}
      </div>
    </div>
  );
}
