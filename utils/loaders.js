import { redirect } from "react-router-dom";

//*  /vans
export const VansLoader = async () => {
  // protected routes
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return redirect("/login");
  }

  const res = await fetch("/api/vans");
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      status: res.status,
      statusText: res.statusText,
    };
  }
  const data = await res.json();
  console.log(data);
  return data.vans;
};

// * /vans/id
export const VanDetail = async ({ params }) => {
  const res = await fetch(`/api/vans/${params.id}`);
  if (!res.ok) {
    throw Error("Could not find the van details");
  }
  return res;
};

//* /host/vans
export const VanListLoader = async () => {
  const res = await fetch("/api/host/vans");
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      status: res.status,
      statusText: res.statusText,
    };
  }
  const vansList = await res.json();
  console.log(vansList.vans);
  return vansList.vans;
};

//* /host/vans/:id

export const HostVanDetail = async ({ params }) => {
  const res = await fetch(`/api/host/vans/${params.id}`);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      status: res.status,
      statusText: res.statusText,
    };
  }
  const hostVanDetail = await res.json();
  console.log(hostVanDetail.vans);
  return hostVanDetail.vans;
  vansList;
};
