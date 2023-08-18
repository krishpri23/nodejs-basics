import React, { useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

export default function Vans() {
  const vans = useLoaderData();
  console.log(vans);
  const [searchParams, setSearchParams] = useSearchParams();
  const vanType = searchParams?.get("type");
  console.log(vanType);
  console.log(searchParams.get("type"));

  // sort out vans based on type using query params
  const displayVans = vanType
    ? vans.filter((van) => van.type.toLowerCase() === vanType.toLowerCase())
    : vans;

  function handleMergeParams(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          // className="van-type simple"
          className={`van-type simple ${
            vanType.toLowerCase() === "simple" ? "selected" : ""
          }`}
          onClick={() => handleMergeParams("type", "simple")}
        >
          Simple{" "}
        </button>
        <button
          // className="van-type rugged"
          className={`van-type simple ${
            vanType.toLowerCase() === "rugged" ? "selected" : ""
          }`}
          onClick={() => handleMergeParams("type", "rugged")}
        >
          Rugged
        </button>
        <button
          // className="van-type luxury "
          className={`van-type simple ${
            vanType.toLowerCase() === "luxury" ? "selected" : ""
          }`}
          onClick={() => handleMergeParams("type", "luxury")}
        >
          Luxury
        </button>
        {vanType === null ? (
          ""
        ) : (
          <button
            className="van-type clear-filters"
            onClick={() => handleMergeParams("type", null)} //! do not pass null as string
          >
            clear filters{" "}
          </button>
        )}
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

//  MERGE query params in the url
// function genNewSearchParamString(key, value) {
// const sp = new URLSearchParams(searchParams);
// if (value === null) {
//   sp.delete(key);
// } else {
//   sp.set(key, value);
// }
// return `?${sp.toString()}`;
// }
//  <div>
//         <Link to={genNewSearchParamString("type", "jedi")}>Jedi</Link>
//         <Link to={genNewSearchParamString("type", "sith")}>Sith</Link>
//         <Link to={genNewSearchParamString("type", null)}>Clear</Link>
//   </div>
