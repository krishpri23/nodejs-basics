//*  /vans
export const VansLoader = async () => {
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
  const vansList = await fetch("/api/host/vans")
    .then((res) => res.json())
    .then((data) => data.vans);
  console.log(vansList);
  return vansList;
};

//* /host/vans/:id

export const HostVanDetail = async ({ params }) => {
  const hostVanDetail = await fetch(`/api/host/vans/${params.id}`)
    .then((res) => res.json())
    .then((data) => data.vans);
  console.log(hostVanDetail);
  return hostVanDetail;
};
