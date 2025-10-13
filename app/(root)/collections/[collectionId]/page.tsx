import Image from "next/image";
import { getCollectionDetails } from "@/lib/actions/actions";
import ProductCard from "@/components/ProductCard";

const CollectionDetails = async ({
	params,
}: {
	params: Promise<{ collectionId: string }>;
}) => {
	const { collectionId } = await params;
	const collectionDetails = await getCollectionDetails(collectionId);

	return (
		<div className="px-10 py-5 flex flex-col items-center gap-8">
			<Image
				src={collectionDetails.image}
				width={1500}
				height={1000}
				alt="collection"
				className="w-full h-[400px] object-cover rounded-xl"
			/>
			<p className="text-heading3-bold text-grey-2">
				{collectionDetails.title}
			</p>
			<p className="text-body-normal text-grey-2 text-center max-w-[900px]">
				{collectionDetails.description}
			</p>
			<div className="flex flex-wrap gap-16 justify-center">
				{collectionDetails.products.map((product: ProductType) => (
					<ProductCard key={product._id} product={product} />
				))}
			</div>
		</div>
	);
};

export default CollectionDetails;
export const dynamic = "force-dynamic";
