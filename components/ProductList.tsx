import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";
import ProductsHeading from "./ProductsHeading";

const ProductList = async () => {
	const products = await getProducts();

	return (
		<div className="flex flex-col items-center py-2 px-5 bg-slate-50 pb-24">
			<ProductsHeading />
			{!products || products.length === 0 ? (
				<p className="text-body-bold">No products found.</p>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-30 justify-items-center">
					{products.map((product: ProductType) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			)}
		</div>
	);
};

export default ProductList;
