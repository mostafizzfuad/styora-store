import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";
import CollectionsHeading from "./CollectionsHeading";

const Collections = async () => {
	const collections = await getCollections();

	return (
		<div className="flex flex-col items-center py-8 px-5">
			<CollectionsHeading />
			{!collections || collections.length === 0 ? (
				<p className="text-body-bold">No collections found.</p>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
					{collections.map((collection: CollectionType) => (
						<Link
							href={`/collections/${collection._id}`}
							key={collection._id}
						>
							<Image
								src={collection.image}
								alt={collection.title}
								width={350}
								height={200}
								className="rounded-lg"
							/>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default Collections;
