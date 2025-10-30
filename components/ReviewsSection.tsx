import React from "react";
import Image from "next/image";

// --- Types ---
export type Stat = { value: string; label: string };
export type Review = {
	name: string;
	location: string;
	avatarSrc: string;
	rating?: number; // 0-5
	text: string;
	product?: { name: string; price?: string };
	timeAgo?: string;
};

type Props = {
	pillText?: string;
	titleLeft?: string;
	titleHighlight?: string;
	subtitle?: string;
	stats?: Stat[];
	reviews?: Review[];
	className?: string;
};

// --- Helpers ---
function Stars({ n = 5 }: { n?: number }) {
	return (
		<div
			className="flex items-center gap-1 text-blue-500"
			aria-label={`${n} star rating`}
		>
			{Array.from({ length: 5 }).map((_, i) => (
				<svg
					key={i}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					className={`h-4 w-4 ${
						i < n ? "fill-current" : "fill-transparent"
					} stroke-current`}
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.802-2.036a1 1 0 00-1.175 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.07-3.292z" />
				</svg>
			))}
		</div>
	);
}

function Badge({ children }: { children: React.ReactNode }) {
	return (
		<span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-600 ring-1 ring-blue-200">
			<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-white">
				✓
			</span>
			{children}
		</span>
	);
}

// --- Component ---
export default function ReviewsSection({
	pillText = "CUSTOMER REVIEWS",
	titleLeft = "What Our",
	titleHighlight = "Customers Say",
	subtitle = "Join thousands of satisfied customers who love our products",
	stats = [
		{ value: "50K+", label: "Happy Customers" },
		{ value: "4.9/5", label: "Average Rating" },
		{ value: "98%", label: "Satisfaction Rate" },
		{ value: "15K+", label: "Reviews" },
	],
	reviews = [
		{
			name: "Lisa P.",
			location: "London, UK",
			avatarSrc: "/person1.png",
			rating: 5,
			text: "I was pleasantly surprised by how fast my order arrived. Support was super helpful and responsive. Great experience!",
			product: { name: "Amazfit Bip 5 Smart Watch", price: "$120.00" },
			timeAgo: "1 month ago",
		},
		{
			name: "Vineta P.",
			location: "Sydney, Australia",
			avatarSrc: "/person2.png",
			rating: 5,
			text: "The quality exceeded my expectations. Feels premium and the performance is outstanding. I'm impressed!",
			product: { name: "Instax Mini 12 Camera", price: "$130.00" },
			timeAgo: "3 weeks ago",
		},
		{
			name: "Michael R.",
			location: "Toronto, Canada",
			avatarSrc: "/person3.png",
			rating: 5,
			text: "Amazing products and even better service! High‑quality gadgets, fast shipping. Highly recommended!",
			product: { name: "Wireless Earbuds Pro", price: "$99.00" },
			timeAgo: "1 week ago",
		},
	],
	className = "",
}: Props) {
	return (
		<section className={`relative ${className}`}>
			{/* soft top-right glow */}
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_70%_0%,#fef7ee_0%,transparent_60%)]" />

			<div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-20">
				{/* Heading */}
				<div className="text-center">
					<span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-600 ring-1 ring-blue-200">
						<span className="inline-block h-2 w-2 rounded-full bg-blue-600" />{" "}
						{pillText}
					</span>
					<h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
						{titleLeft}{" "}
						<span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
							{titleHighlight}
						</span>
					</h2>
					<p className="mt-3 text-lg text-slate-600">{subtitle}</p>
				</div>

				{/* Stats row */}
				<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{stats.map((s, i) => (
						<div
							key={i}
							className="rounded-2xl bg-white/70 p-6 text-center shadow-lg ring-1 ring-black/5 backdrop-blur"
						>
							<div className="text-3xl font-extrabold text-blue-600">
								{s.value}
							</div>
							<div className="mt-1 text-sm font-medium text-slate-600">
								{s.label}
							</div>
						</div>
					))}
				</div>

				{/* Reviews - scroll snap on mobile, grid on lg */}
				<div className="mt-10 lg:mt-14">
					<div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
						{reviews.map((r, i) => (
							<article
								key={i}
								className="snap-center shrink-0 basis-[85%] rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5 lg:basis-auto lg:p-8"
							>
								<header className="flex items-center gap-4">
									<div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white shadow">
										<Image
											src={r.avatarSrc}
											alt={`${r.name} avatar`}
											fill
											className="object-cover"
										/>
									</div>
									<div>
										<div className="font-semibold text-slate-900">
											{r.name}
										</div>
										<div className="text-sm text-slate-500">
											{r.location}
										</div>
										<div className="mt-1">
											<Stars n={r.rating ?? 5} />
										</div>
									</div>
									<svg
										className="ml-auto h-10 w-10 text-blue-200"
										viewBox="0 0 48 48"
										fill="currentColor"
										aria-hidden
									>
										<path d="M20 10h-8l-4 12v16h12V22h-8l4-12zm20 0h-8l-4 12v16h12V22h-8l4-12z" />
									</svg>
								</header>

								<p className="mt-5 text-slate-700">
									“{r.text}”
								</p>

								<div className="mt-6 border-t pt-4">
									<div className="flex flex-wrap items-center gap-3 text-sm">
										<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
											🏷️
										</span>
										<span className="text-slate-500">
											Purchased
										</span>
										{r.product?.name && (
											<strong className="text-slate-800">
												{r.product.name}
											</strong>
										)}
										{r.product?.price && (
											<span className="ml-auto font-semibold text-blue-600">
												{r.product.price}
											</span>
										)}
									</div>
									<div className="mt-2 flex flex-wrap items-center gap-3">
										<Badge>Verified Purchase</Badge>
										{r.timeAgo && (
											<span className="ml-auto text-xs text-slate-500">
												{r.timeAgo}
											</span>
										)}
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
