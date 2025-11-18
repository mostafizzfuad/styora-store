"use client";
import Image from "next/image";

export default function PremiumTech() {
	return (
		<section className="relative w-full bg-[#0b1623] text-white py-20 lg:py-28 overflow-hidden">
			<div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 lg:flex-row lg:justify-between">
				{/* LEFT TEXT SIDE */}
				<div className="flex-1 max-w-xl">
					<span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
						<span className="text-lg">⚡</span> PREMIUM TECHNOLOGY
					</span>

					<h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
						Unmatched
						<br />
						<span className="text-blue-500">Performance</span>
					</h1>

					<p className="mt-6 max-w-lg text-neutral-300">
						Upgrade your devices with cutting-edge technology that
						powers your productivity and entertainment to the next
						level.
					</p>

					{/* Features */}
					<div className="mt-8 flex flex-wrap gap-6 text-neutral-300">
						<div className="flex items-center gap-2">
							<span className="text-blue-400">⚡</span> Lightning
							Fast
						</div>
						<div className="flex items-center gap-2">
							<span className="text-blue-400">🔒</span> Secure &
							Reliable
						</div>
						<div className="flex items-center gap-2">
							<span className="text-blue-400">✨</span> Latest
							Tech
						</div>
					</div>

					{/* BUTTONS */}
					<div className="mt-10 flex flex-wrap gap-4">
						<button className="rounded-full bg-blue-500 px-8 py-3 text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition">
							Shop Now →
						</button>

						<button className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-white font-semibold hover:bg-white/20 transition">
							Learn More
						</button>
					</div>
				</div>

				{/* RIGHT IMAGE SIDE */}
				<div className="flex-1 flex justify-center lg:justify-end">
					<div className="relative h-[350px] w-[350px] sm:h-[420px] sm:w-[420px] lg:h-[500px] lg:w-[500px]">
						<Image
							src="/phone.webp"
							alt="Phones"
							fill
							className="object-contain drop-shadow-2xl"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
