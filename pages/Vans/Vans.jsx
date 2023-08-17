import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function Vans() {
  const vans = useLoaderData();

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vans &&
          vans.map((van) => (
            <div key={van.id} className="van-tile">
              <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt="van image" />
                <div className="van-info">
                  <h3>{van.name}</h3>
                  <p>
                    ${van.price} <span>/day</span>
                  </p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
