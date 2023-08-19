import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const { message, status, statusText } = useRouteError();
  return (
    <div>
      <h2>{message}</h2>
      <p>
        {status} - {statusText}
      </p>
    </div>
  );
}
