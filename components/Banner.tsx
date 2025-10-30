"use client";
import { motion } from "framer-motion";

type CTA = {
	label: string;
	href: string;
};

type HeroProps = {
	badgeText?: string;
	kicker?: string;
	title?: string;
	highlight?: string; // word in title to accent
	titleSuffix?: string; // after highlight
	subTitle?: string; // second line big text
	description?: string;
	primaryCta?: CTA;
	secondaryCta?: CTA;
	imageSrc: string; // required — image shown on the right
	imageAlt?: string;
};

export default function Banner({
	badgeText = "New Arrival",
	kicker = "STAY FIT & ENERGIZED",
	title = "The Best",
	highlight = "Mice",
	titleSuffix = " for",
	subTitle = "Gaming & Work",
	description = "Precision and comfort in every click",
	primaryCta = { label: "Shop Now", href: "/shop" },
	secondaryCta = { label: "View More", href: "/shop" },
	imageSrc,
	imageAlt = "Product image",
}: HeroProps) {
	return (
		<section className="relative overflow-hidden bg-slate-100">
			<div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-2 md:items-center lg:py-18">
				{/* Left: Text */}
				<div className="order-2 md:order-1">
					<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 ring-1 ring-blue-200">
						<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
							⚡
						</span>
						{badgeText}
					</div>

					<p className="mb-3 text-sm font-semibold tracking-widest text-slate-500">
						{kicker}
					</p>

					<h1 className="text-4xl font-extrabold leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl">
						{title}{" "}
						<span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
							{highlight}
						</span>
						{titleSuffix}
						<br />
						<span className="mt-2 inline-block bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
							{subTitle}
						</span>
					</h1>

					<p className="mt-5 max-w-xl text-lg text-slate-600">
						{description}
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-4">
						<a
							href={primaryCta.href}
							className="group inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-white shadow-lg shadow-blue-600/30 transition hover:translate-y-[-2px] hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
						>
							{primaryCta.label}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="h-5 w-5 transition-transform group-hover:translate-x-1"
							>
								<path
									d="M13.5 4.5l6 6-6 6M3 12h16.5"
									stroke="currentColor"
									strokeWidth="1.5"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>

						<a
							href={secondaryCta.href}
							className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 ring-1 ring-slate-300 text-slate-800 transition hover:bg-slate-50"
						>
							{secondaryCta.label}
						</a>
					</div>
				</div>

				{/* Right: Image */}
				<div className="order-1 md:order-2">
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="relative mx-auto max-w-xl"
					>
						<div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-blue-100/60 blur-3xl" />
						<img
							src={imageSrc}
							alt={imageAlt}
							className="w-full rounded-3xl p-3 ring-black/5"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
