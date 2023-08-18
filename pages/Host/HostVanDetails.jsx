// * /host/vans/${van.id}

import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function HostVanDetails() {
  const data = useLoaderData()[0];
  console.log(data);

  return (
    <section>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={data.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${data.type}`}>{data.type}</i>
            <h3>{data.name}</h3>
            <h4>${data.price}/day</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
