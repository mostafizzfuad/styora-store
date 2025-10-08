"use client";
import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const { user } = useUser();
	const cart = useCart();
	const [dropdownMenu, setDropdownMenu] = useState(false);

	return (
		<div className="sticky top-0 z-50 py-2 px-10 flex justify-between items-center bg-white shadow-md">
			{/* Logo */}
			<Link href="/">
				<Image src="/logo.png" alt="Logo" width={130} height={130} />
			</Link>
			{/* Home */}
			<div>
				<Link href="/">Home</Link>
			</div>
			{/* Cart */}
			<div className="relative flex items-center gap-3">
				<Link
					href="/cart"
					className="flex items-center gap-2 border rounded-lg px-2 py-1 hover:bg-black hover:text-white transition"
				>
					<ShoppingCart />
					<p className="text-base-bold">
						Cart ({cart.cartItems.length})
					</p>
				</Link>
				{user && (
					<Menu
						className="cursor-pointer"
						onClick={() => setDropdownMenu(!dropdownMenu)}
					/>
				)}

				{/* Dropdown Menu */}
				{user && dropdownMenu && (
					<div className="absolute top-10 right-5 flex flex-col gap-2 rounded-lg border bg-white p-3 text-base-bold">
						<link href="/wishlist" className="hover:text-red-600">
							Wishlist
						</link>
						<link href="/orders" className="hover:text-red-600">
							Orders
						</link>
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
