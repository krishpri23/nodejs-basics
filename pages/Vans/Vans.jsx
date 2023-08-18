import React, { useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

export default function Vans() {
  const vans = useLoaderData();
  console.log(vans);
  const [searchParams, setSearchParams] = useSearchParams();
  const vanType = searchParams?.get("type");
  console.log(searchParams.get("type"));

  // sort out vans based on type using query params
  const displayVans = vanType
    ? vans.filter((van) => van.type.toLowerCase() === vanType.toLowerCase())
    : vans;

  // van type button click handle
  // function handleClick(event) {
  //   const { name, value } = event?.target;
  //   const params = setSearchParams({ [name]: value });
  //   console.log(params);
  // }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className="van-type simple "
          to="?type=simple"
          onClick={() => setSearchParams({ type: "simple" })}
        >
          Simple{" "}
        </button>
        <button
          className="van-type rugged"
          to="?type=rugged"
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          Rugged
        </button>
        <button
          className="van-type luxury "
          to="?type=luxury"
          onClick={() => setSearchParams({ type: "luxury" })}
        >
          Luxury
        </button>
        <button
          to=""
          className="van-type clear-filters"
          onClick={() => setSearchParams({})}
        >
          clear filters{" "}
        </button>
      </div>
      <div className="van-list">
        {vans &&
          displayVans.map((van) => (
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
