import { projects, testimonials } from "@/utils/data";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Footer = () => {
	const navTranslations = useTranslations("Navbar");
	const t = useTranslations("Footer");

	return (
		<div className="max-w-screen-xl mx-auto mt-20 md:mt-40 flex flex-col md:flex-row gap-6 items-center justify-between py-6">
			<div className="flex gap-4 text-sm">
				<Link href="#hero">{navTranslations("Home")}</Link>
				<Link href="#services">{navTranslations("Services")}</Link>
				{projects.length > 0 && (
					<Link href="#projects">{navTranslations("Projects")}</Link>
				)}
				{testimonials.length > 0 && (
					<Link href="#testimonials">
						{navTranslations("Testimonials")}
					</Link>
				)}
			</div>
			<p className="font-bold text-2xl">
				<span className="text-primary">P</span>ixel
				<span className="text-primary">B</span>laze
			</p>
			<p className="text-sm">{t("Text")}</p>
		</div>
	);
};

export default Footer;
