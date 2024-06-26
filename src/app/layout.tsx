import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import Navbar from "@/components/Navbar";

const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Pixel Blaze",
	description: "Custom Websites Crafted Just for You",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</head>
			<body className={cn(SpaceGrotesk.className, "bg-dark text-light")}>
				<Navbar />
				<div className="mt-32 px-5 md:px-[80px]">{children}</div>
			</body>
		</html>
	);
}
