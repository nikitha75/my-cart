import Link from "next/link";

const MegaMenu = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=8", {
    cache: "no-store",
  });

  if (!res.ok) {
    console.warn("Failed to fetch products");
    return <p>Unable to load products</p>;
  }

  const products = await res.json();

  return (
    <main className="max-w-7xl mx-auto p-6">
      <div className="bg-blue-100 rounded-lg p-6 mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to our store!</h1>
        <p className="text-gray-700">Featured products just for you</p>
      </div>
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition">
                <img
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="w-full h-48 object-contain mb-2"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MegaMenu;
