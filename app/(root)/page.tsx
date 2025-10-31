import Banner from "@/components/Banner";
import Collections from "@/components/Collections";
import FeaturedBrands from "@/components/FeaturedBrands";
import ProductList from "@/components/ProductList";
import ReviewsSection from "@/components/ReviewsSection";

export default function HomePage() {
	return (
		<>
			<Banner />
			<Collections />
			<ProductList />
			<FeaturedBrands />
			<ReviewsSection />
		</>
	);
}

export const dynamic = "force-dynamic";
