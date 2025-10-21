import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const ProductList = async () => {
	const products = await getProducts();

	return (
		<div className="flex flex-col items-center gap-8 py-8 px-5">
			<p className="text-heading1-bold text-[#271f17]">Products</p>
			{!products || products.length === 0 ? (
				<p className="text-body-bold">No products found.</p>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
					{products.map((product: ProductType) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			)}
		</div>
	);
};

export default ProductList;
