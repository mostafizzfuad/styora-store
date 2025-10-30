import Link from "next/link";

type Props = {
	pillText?: string;
	pillHref?: string;
	titleLeft?: string; // e.g. "Browse by"
	titleHighlight?: string; // e.g. "Category"
	subtitle?: string;
	className?: string;
};

export default function CollectionsHeading({
	pillText = "EXPLORE NOW",
	pillHref = "/shop",
	titleLeft = "Browse by",
	titleHighlight = "Category",
	subtitle = "Discover our wide range of premium gadgets and accessories",
	className = "",
}: Props) {
	return (
		<section className={`relative ${className}`}>
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,#f8fafc_0%,#f8fafc_40%,transparent_100%)]" />

			<div className="relative mx-auto max-w-5xl px-6 py-10 lg:py-14 text-center">
				{/* pill */}
				<Link
					href={pillHref}
					className="inline-flex items-center rounded-full bg-blue-500 px-4 py-2 text-xs font-bold tracking-wider text-white shadow ring-1 ring-blue-600/30 hover:bg-blue-600"
				>
					{pillText}
				</Link>

				{/* title */}
				<h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
					{titleLeft}{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
						{titleHighlight}
					</span>
				</h2>

				{/* subtitle */}
				<p className="mx-auto mt-4 max-w-3xl text-lg text-slate-500">
					{subtitle}
				</p>
			</div>
		</section>
	);
}
