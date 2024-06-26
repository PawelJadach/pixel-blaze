import React from "react";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import { navLinks } from "@/settings/navbar";
import { global } from "@/settings/global";

export default function NavDesktop() {
	return (
		<div className="lg:block bg-dark/90 backdrop-blur fixed top-0 left-0 right-0 hidden">
			<div className="max-w-7xl mx-auto flex justify-between items-center py-6">
				<NavLogo />
				<div className="flex gap-8 items-center">
					{navLinks.map((link) => (
						<NavLink key={link.label} {...link} />
					))}
				</div>
			</div>
		</div>
	);
}
