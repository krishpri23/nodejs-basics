// * /host/vans/${van.id}

import React from "react";
import { Outlet, useLoaderData, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function HostVanDetails() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  const data = useLoaderData()[0];
  console.log(data);

  return (
    <section>
      {/* specify one level back wrt to path. By default, it takes route hierarchy */}
      <Link className="back-button" to=".." relative="path">
        {" "}
        Back to all vans{" "}
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={data.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${data.type}`}>{data.type}</i>
            <h3>{data.name}</h3>
            <h4>${data.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            {" "}
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            {" "}
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            {" "}
            Photos
          </NavLink>
        </nav>
        <Outlet context={data} />
      </div>
    </section>
  );
}
