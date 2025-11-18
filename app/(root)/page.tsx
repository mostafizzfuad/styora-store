import Banner from "@/components/Banner";
import Collections from "@/components/Collections";
import FeaturedBrands from "@/components/FeaturedBrands";
import PremiumTech from "@/components/PremiumTech";
import ProductList from "@/components/ProductList";
import ReviewsSection from "@/components/ReviewsSection";
import Image from "next/image";

export default function HomePage() {
	return (
		<>
			<Banner />
			<Collections />
			<ProductList />
			<Image
				src="/banner.webp"
				alt="Mid Section"
				width={1920}
				height={600}
				className="w-full h-auto"
			/>
			<FeaturedBrands />
			<PremiumTech />
			<ReviewsSection />
		</>
	);
}

export const dynamic = "force-dynamic";
