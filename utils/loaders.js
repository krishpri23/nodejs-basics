export const VansLoader = async () => {
  const vans = await fetch("/api/vans")
    .then((res) => res.json())
    .then((data) => data.vans);
  console.log(vans);
  return vans;
};

export const VanDetail = async ({ params }) => {
  const res = await fetch(`/api/vans/${params.id}`);
  if (!res.ok) {
    throw Error("Could not find the van details");
  }
  return res;
};
