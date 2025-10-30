import Link from "next/link";

type Props = {
	pillText?: string;
	pillHref?: string;
	titleLeft?: string; // e.g. "Browse by"
	titleHighlight?: string; // e.g. "Category"
	subtitle?: string;
	className?: string;
};

export default function ProductsHeading({
	pillText = "",
	pillHref = "#",
	titleLeft = "All Products",
	titleHighlight = "",
	subtitle = "",
	className = "",
}: Props) {
	return (
		<section className={`relative ${className}`}>
			{/* subtle light gradient background like the screenshot */}
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,#f8fafc_0%,#f8fafc_40%,transparent_100%)]" />

			<div className="relative mx-auto max-w-5xl px-6 py-10 lg:py-14 text-center">
				{/* title */}
				<h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
					{titleLeft}{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
						{titleHighlight}
					</span>
				</h2>
			</div>
		</section>
	);
}
