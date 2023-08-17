//*  /vans
export const VansLoader = async () => {
  const vans = await fetch("/api/vans")
    .then((res) => res.json())
    .then((data) => data.vans);
  console.log(vans);
  return vans;
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
