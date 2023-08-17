import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>Page not found</h2>
      <p>
        {" "}
        Go back to <Link to="/">Home</Link>
      </p>
    </div>
  );
}
