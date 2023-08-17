import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function VanDetailsPage() {
  const { id } = useParams();
  const { vans } = useLoaderData();
  console.log(vans);

  return (
    <div className="van-detail-container">
      {vans ? (
        <div className="van-detail">
          <img src={vans.imageUrl} />
          <i className={`van-type ${vans.type} selected`}>{vans.type}</i>
          <h2>{vans.name}</h2>
          <p className="van-price">
            <span>${vans.price}</span>/day
          </p>
          <p>{vans.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
