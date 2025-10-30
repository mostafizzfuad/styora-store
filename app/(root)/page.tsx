import Banner from "@/components/Banner";
import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import ReviewsSection from "@/components/ReviewsSection";

export default function HomePage() {
	return (
		<>
			<Banner />
			<Collections />
			<ProductList />
			<ReviewsSection />
		</>
	);
}

export const dynamic = "force-dynamic";
