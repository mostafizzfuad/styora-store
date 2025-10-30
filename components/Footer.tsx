// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import React from "react";

type LinkItem = { label: string; href: string };
type Column = { title: string; links: LinkItem[] };

type Props = {
	logoSrc?: string;
	logoAlt?: string;
	blurb?: string;
	socials?: { icon: "facebook" | "twitter" | "linkedin"; href: string }[];
	columns?: Column[];
	brandName?: string;
	className?: string;
};

const defaultColumns: Column[] = [
	{
		title: "Products",
		links: [
			{ label: "Shop", href: "/shop" },
			{ label: "New Arrivals", href: "/new" },
			{ label: "Best Sellers", href: "/best-sellers" },
			{ label: "Special Offers", href: "/offers" },
		],
	},
	{
		title: "Support",
		links: [
			{ label: "Blog", href: "/blog" },
			{ label: "FAQs", href: "/faq" },
			{ label: "Help Center", href: "/help" },
			{ label: "Contact Us", href: "/contact" },
		],
	},
	{
		title: "Solutions",
		links: [
			{
				label: "Device Management",
				href: "/solutions/device-management",
			},
			{ label: "Smart Home Integration", href: "/solutions/smart-home" },
			{ label: "Gadget Insurance", href: "/solutions/insurance" },
			{ label: "Tech Consultancy", href: "/solutions/consultancy" },
		],
	},
];

const iconMap = {
	facebook: (
		<svg
			viewBox="0 0 24 24"
			className="h-5 w-5"
			fill="currentColor"
			aria-hidden
		>
			<path d="M22 12.06C22 6.49 17.52 2 11.94 2 6.37 2 2 6.49 2 12.06c0 4.99 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.86c0-2.5 1.49-3.88 3.78-3.88 1.1 0 2.25.2 2.25.2v2.46h-1.27c-1.25 0-1.64.78-1.64 1.58v1.9h2.8l-.45 2.91h-2.35V22c4.78-.8 8.44-4.95 8.44-9.94z" />
		</svg>
	),
	twitter: (
		<svg
			viewBox="0 0 24 24"
			className="h-5 w-5"
			fill="currentColor"
			aria-hidden
		>
			<path d="M20.94 7.91c.01.16.01.31.01.47 0 4.76-3.63 10.26-10.26 10.26A10.2 10.2 0 0 1 2 17.67c.3.03.6.04.91.04a7.24 7.24 0 0 0 4.48-1.54 3.62 3.62 0 0 1-3.38-2.51c.22.04.45.06.68.06.33 0 .66-.04.96-.13a3.61 3.61 0 0 1-2.9-3.54v-.05c.49.27 1.06.44 1.66.46A3.61 3.61 0 0 1 3.6 6.1c0-.67.18-1.3.5-1.84a10.25 10.25 0 0 0 7.44 3.77 3.6 3.6 0 0 1 6.13-3.28 7.2 7.2 0 0 0 2.29-.88 3.62 3.62 0 0 1-1.58 2 7.21 7.21 0 0 0 2.07-.57 7.77 7.77 0 0 1-1.53 1.85z" />
		</svg>
	),
	linkedin: (
		<svg
			viewBox="0 0 24 24"
			className="h-5 w-5"
			fill="currentColor"
			aria-hidden
		>
			<path d="M6.94 8.59H4.1V21h2.84V8.59zM5.52 7.21a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28zM20 21h-2.84v-6.37c0-1.52-.03-3.49-2.13-3.49-2.13 0-2.46 1.66-2.46 3.39V21H9.72V8.59h2.72v1.7h.04c.38-.72 1.31-1.48 2.69-1.48 2.88 0 3.41 1.9 3.41 4.36V21z" />
		</svg>
	),
};

export default function Footer({
	logoSrc = "/logo.png",
	logoAlt = "Brand logo",
	blurb = "Your ultimate hub for the latest gadgets — from smartphones to smartwatches, delivering innovation to your doorstep.",
	socials = [
		{ icon: "facebook", href: "#" },
		{ icon: "twitter", href: "#" },
		{ icon: "linkedin", href: "#" },
	],
	columns = defaultColumns,
	brandName = "Styora",
	className = "",
}: Props) {
	const year = new Date().getFullYear();

	return (
		<footer className={`bg-[#141414] text-slate-200 ${className}`}>
			{/* top border & container */}
			<div className="border-t border-slate-800/80">
				<div className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
					{/* center on mobile, left on md+ */}
					<div
						className="grid grid-cols-1 gap-10 place-items-center text-center
                md:grid-cols-2 md:place-items-start md:text-left
                lg:grid-cols-4"
					>
						{/* Brand + blurb + socials */}
						<div className="max-w-md">
							<div className="flex items-center justify-center md:justify-start gap-3">
								{logoSrc && (
									<div className="relative h-8 w-40">
										<Image
											src={logoSrc}
											alt={logoAlt}
											fill
											className="object-contain"
										/>
									</div>
								)}
							</div>

							<p className="mt-4 text-slate-400">{blurb}</p>

							<div className="mt-5 flex items-center justify-center md:justify-start gap-5 text-blue-500">
								{socials.map((s, i) => (
									<Link
										key={i}
										href={s.href}
										className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-blue-600/30 hover:bg-blue-600/10"
										aria-label={s.icon}
									>
										{iconMap[s.icon]}
									</Link>
								))}
							</div>
						</div>

						{/* Columns */}
						{columns.map((col, idx) => (
							<div key={idx} className="max-w-xs">
								<h4 className="text-lg font-semibold text-blue-400">
									{col.title}
								</h4>
								<ul className="mt-4 space-y-3">
									{col.links.map((l) => (
										<li key={l.href}>
											<Link
												href={l.href}
												className="text-slate-300 transition hover:text-white"
											>
												{l.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* bottom bar */}
			<div className="border-t border-slate-800/80">
				<div className="mx-auto max-w-7xl px-6 py-5 text-center text-sm text-blue-400">
					© {year} {brandName}. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
