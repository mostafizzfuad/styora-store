"use client";
import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
	const { user } = useUser();
	const cart = useCart();
	const router = useRouter();
	const [dropdownMenu, setDropdownMenu] = useState(false);
	const [query, setQuery] = useState("");

	return (
		<div className="sticky top-0 z-50 py-2 px-10 flex gap-2 justify-between items-center bg-white shadow-md max-sm:px-2">
			{/* Logo */}
			<Link href="/">
				<Image src="/logo.png" alt="Logo" width={130} height={130} />
			</Link>

			{/* Home */}
			<div className="flex gap-4 text-base-bold max-lg:hidden">
				<Link href="/" className="hover:text-blue-800">
					Home
				</Link>
				<Link
					href={user ? "/wishlist" : "/sign-in"}
					className="hover:text-blue-800"
				>
					Wishlist
				</Link>
				<Link
					href={user ? "/orders" : "/sign-in"}
					className="hover:text-blue-800"
				>
					Orders
				</Link>
			</div>

			{/* SearchBar */}
			<div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
				<input
					className="outline-none max-sm:max-w-[120px]"
					placeholder="Search..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button
					disabled={query === ""}
					onClick={() => router.push(`/search/${query}`)}
				>
					<Search className="cursor-pointer h-4 w-4 hover:text-blue-800" />
				</button>
			</div>

			{/* Cart */}
			<div className="relative flex items-center gap-3">
				<Link
					href="/cart"
					className="flex items-center gap-2 border rounded-lg px-2 py-1 hover:bg-black hover:text-white transition max-md:hidden"
				>
					<ShoppingCart />
					<p className="text-base-bold">
						Cart ({cart.cartItems.length})
					</p>
				</Link>

				<Menu
					className="cursor-pointer lg:hidden"
					onClick={() => setDropdownMenu(!dropdownMenu)}
				/>

				{/* Dropdown Menu */}
				{dropdownMenu && (
					<div className="absolute top-12 right-5 flex flex-col gap-4 rounded-lg border bg-white p-3 text-base-bold lg:hidden">
						<Link href="/" className="hover:text-blue-800">
							Home
						</Link>
						<Link
							href={user ? "/wishlist" : "/sign-in"}
							className="hover:text-blue-800"
						>
							Wishlist
						</Link>
						<Link
							href={user ? "/orders" : "/sign-in"}
							className="hover:text-blue-800"
						>
							Orders
						</Link>
						<Link
							href="/cart"
							className="flex items-center gap-2 border rounded-lg px-2 py-1 hover:bg-black hover:text-white transition"
						>
							<ShoppingCart />
							<p className="text-base-bold">
								Cart ({cart.cartItems.length})
							</p>
						</Link>
					</div>
				)}

				{user ? (
					<UserButton afterSignOutUrl="/sign-in" />
				) : (
					<Link href="sign-in">
						<CircleUserRound className="cursor-pointer" />
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
