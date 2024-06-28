import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div
			className="max-w-screen-xl mx-auto mt-20 md:mt-40 flex flex-col md:flex-row gap-6 items-center justify-between py-6"
			id="process"
		>
			<div className="flex gap-4 text-sm">
				<Link href="#services">Services</Link>
				<Link href="#projects">Projects</Link>
				<Link href="#testimonials">Testimonials</Link>
			</div>
			<p className="font-bold text-2xl">
				<span className="text-primary">P</span>ixel
				<span className="text-primary">B</span>laze
			</p>
			<p className="text-sm">© 2024 Copyright. All rights reserved.</p>
		</div>
	);
};

export default Footer;
