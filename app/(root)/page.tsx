import Banner from "@/components/Banner";
import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";

export default function HomePage() {
	return (
		<>
			<Banner imageSrc="/ear-banner.png" />
			<Collections />
			<ProductList />
		</>
	);
}

export const dynamic = "force-dynamic";
