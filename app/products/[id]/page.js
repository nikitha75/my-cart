import Image from "next/image";
import { getProducts } from "../../lib/getProducts";
import UpdateCartButton from "../../components/UpdateCartButton";

const Product = async ({ params }) => {
  const { id } = await params;

  const products = await getProducts();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-6 text-center text-red-500">Product not found</div>
    );
  }

  return (
    <main className="p-4 my-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={350}
          height={350}
          className="object-contain"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-6">₹{product.price}</p>
        <UpdateCartButton product={product} />
      </div>
    </main>
  );
};

export default Product;
