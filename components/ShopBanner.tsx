import Image from "next/image";

type Props = {
	leftText?: string; // e.g. "Shop"
	highlight?: string; // e.g. "Products"
	subtitle?: string; // e.g. "Discover our wide range..."
	bgImageSrc?: string; // optional background image (right side fade)
	className?: string;
};

export default function ShopBanner({
	leftText = "Shop",
	highlight = "Products",
	subtitle = "Discover our wide range of premium gadgets and accessories",
	bgImageSrc, // put something like "/banners/shop-products.jpg"
	className = "",
}: Props) {
	return (
		<section
			className={
				"relative overflow-hidden border-t border-slate-800 " +
				className
			}
		>
			{/* Background gradient */}
			<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_0%,#0b1220_0%,#05070b_55%,#000_100%)]" />

			{/* Optional right background image with gradient fade */}
			{bgImageSrc && (
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute right-[-10%] top-[-10%] h-[160%] w-[70%] opacity-35">
						<Image
							src={bgImageSrc}
							alt=""
							fill
							sizes="(max-width: 1024px) 0vw, 60vw"
							className="object-cover"
							priority
						/>
					</div>
					<div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent" />
				</div>
			)}

			{/* Content */}
			<div className="relative mx-auto max-w-7xl px-6 py-10 lg:py-14">
				<div className="flex items-center gap-3">
					{/* cube icon */}
					<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/15 ring-1 ring-blue-500/30">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className="h-5 w-5 text-blue-500"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.6"
						>
							<path d="M12 2l7 4-7 4-7-4 7-4z" />
							<path d="M19 8v8l-7 4-7-4V8" />
							<path d="M12 10v10" />
						</svg>
					</span>

					<h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
						{leftText}{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
							{highlight}
						</span>
					</h2>
				</div>

				<p className="mt-4 max-w-3xl text-lg text-slate-300">
					{subtitle}
				</p>
			</div>
		</section>
	);
}
