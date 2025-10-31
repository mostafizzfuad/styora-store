"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const brands = [
	{ name: "Google", color: "bg-yellow-100" },
	{ name: "Apple", color: "bg-gray-100" },
	{ name: "Asus", color: "bg-orange-100" },
	{ name: "Lenovo", color: "bg-red-100" },
	{ name: "HP", color: "bg-blue-100" },
	{ name: "Dell", color: "bg-cyan-100" },
];

export default function FeaturedBrands() {
	return (
		<section className="relative">
			{/* soft top-right glow */}
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_70%_0%,#f1f7ff_0%,transparent_60%)]" />

			<div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-20">
				{/* Heading */}
				<div className="text-center">
					<span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-600 ring-1 ring-blue-200">
						<span className="inline-block h-2 w-2 rounded-full bg-blue-600" />{" "}
						TRUSTED PARTNERS
					</span>
					<h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
						Featured{" "}
						<span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
							Brands
						</span>
					</h2>
					<p className="mt-3 text-lg text-slate-600">
						Shop from the world's leading tech brands
					</p>
				</div>

				{/* Brand row */}
				<div className="mt-10 flex items-center justify-center gap-4 overflow-x-auto py-6 px-2">
					<Button
						variant="ghost"
						className="rounded-full shadow-md"
						aria-label="Previous"
					>
						<ArrowLeft />
					</Button>
					{brands.map((brand) => (
						<motion.div
							key={brand.name}
							whileHover={{ scale: 1.05 }}
							className={`${brand.color} rounded-2xl shadow-md w-40 h-40 flex flex-col justify-center items-center text-gray-700 ring-1 ring-black/5 transition-transform`}
						>
							<div className="text-2xl font-extrabold text-slate-900">
								{brand.name}
							</div>
							<p className="mt-1 text-sm font-medium text-slate-600">
								{brand.name}
							</p>
						</motion.div>
					))}
					<Button
						variant="ghost"
						className="rounded-full shadow-md"
						aria-label="Next"
					>
						<ArrowRight />
					</Button>
				</div>

				{/* Stats row */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 text-center">
					<div>
						<h3 className="text-3xl font-bold text-blue-600">
							100+
						</h3>
						<p className="text-slate-500">Premium Brands</p>
					</div>
					<div>
						<h3 className="text-3xl font-bold text-blue-600">
							50K+
						</h3>
						<p className="text-slate-500">Happy Customers</p>
					</div>
					<div>
						<h3 className="text-3xl font-bold text-blue-600">
							1000+
						</h3>
						<p className="text-slate-500">Products Available</p>
					</div>
					<div>
						<h3 className="text-3xl font-bold text-blue-600">
							24/7
						</h3>
						<p className="text-slate-500">Customer Support</p>
					</div>
				</div>
			</div>
		</section>
	);
}
