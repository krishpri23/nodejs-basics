import React from "react";
import { useLoaderData, useParams, Link, useLocation } from "react-router-dom";

export default function VanDetailsPage() {
  const { id } = useParams();
  const { vans } = useLoaderData();
  console.log(vans);

  //* Access the query params using this hook
  const location = useLocation();

  console.log(location);
  const vanType = location.state.type;

  return (
    <div className="van-detail-container">
      {/* Pass down the location state to the previous route to maintain the filter state */}
      <Link
        className="back-button"
        to={`..?${location?.state?.search}`}
        relative="path"
      >
        {vanType && location.state.search
          ? `Back to ${vanType} filters`
          : "Back to All vans"}
      </Link>
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
