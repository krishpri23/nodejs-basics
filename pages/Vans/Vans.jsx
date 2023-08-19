import React, { useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

export default function Vans() {
  const vans = useLoaderData();
  console.log(vans);

  // Query params
  const [searchParams, setSearchParams] = useSearchParams();
  const vanType = searchParams?.get("type");
  console.log(searchParams.toString());

  //get type of van
  const vanFilterType = searchParams.get("type");
  console.log(vanFilterType);

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
            vanType?.toLowerCase() === "simple" ? "selected" : ""
          }`}
          onClick={() => handleMergeParams("type", "simple")}
        >
          Simple{" "}
        </button>
        <button
          // className="van-type rugged"
          className={`van-type simple ${
            vanType?.toLowerCase() === "rugged" ? "selected" : ""
          }`}
          onClick={() => handleMergeParams("type", "rugged")}
        >
          Rugged
        </button>
        <button
          // className="van-type luxury "
          className={`van-type simple ${
            vanType?.toLowerCase() === "luxury" ? "selected" : ""
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
              <Link
                to={van.id}
                //* We are passing state props to set a stateful value for the new location which is stored inside history state.
                //* To maintain the state of the filtered van type on back navigation, we pass params value
                //* vanFilterType is extracted from query params to use it as back nav title
                state={{
                  search: searchParams.toString(),
                  type: vanFilterType,
                }}
              >
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
