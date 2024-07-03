import Link from "next/link";
import React from "react";

export default function NavLogo() {
	return (
		<Link href="/#hero">
			<span className="text-3xl text-light font-bold tracking-widest rounded-lg">
				<span className="text-primary">P</span>
				ixel
				<span className="text-primary">B</span>
				laze
			</span>
		</Link>
	);
}
