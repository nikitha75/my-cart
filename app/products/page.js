import ProductCard from "../components/ProductCard";
import { getProducts } from "../lib/getProducts";

export const revalidate = 60;

const ProductListing = async () => {
  const products = await getProducts();

  return (
    <div>
      <h2 className="text-2xl font-bold m-4 mt-8">Products</h2>
      <main className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
};

export default ProductListing;
