import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function HostVans() {
  const vans = useLoaderData();
  console.log(vans);

  return (
    <section>
      <h1 className="host-vans-title">Your listed Vans</h1>
      <div className="host-vans-list">
        {vans ? (
          vans.map((van) => (
            <Link to={van.id} key={van.id} className="host-van-link-wrapper">
              <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                  <h3>{van.name}</h3>
                  <p>${van.price}/day</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
