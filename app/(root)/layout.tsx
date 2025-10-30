import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/provider/ToasterProvider";
import Footer from "@/components/Footer";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Styora Store",
	description: "Styora Store - Your One-Stop Shop for Stylish Essentials",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<ClerkProvider>
					<ToasterProvider />
					<Navbar />
					{children}
					<Footer />
				</ClerkProvider>
			</body>
		</html>
	);
}
