export const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};
