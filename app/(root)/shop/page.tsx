import ProductList from "@/components/ProductList";
import ShopBanner from "@/components/ShopBanner";

const ShopPage = () => {
	return (
		<div className="pb-10">
			<ShopBanner />
			<ProductList />
		</div>
	);
};

export default ShopPage;
export const dynamic = "force-dynamic";