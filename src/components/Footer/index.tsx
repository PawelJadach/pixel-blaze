import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
	const t = useTranslations("Footer");

	return (
		<div className="max-w-screen-xl mx-auto mt-20 md:mt-40 flex flex-col md:flex-row gap-6 items-center justify-between py-6">
			<p className="font-bold text-2xl">
				<span className="text-primary">P</span>ixel
				<span className="text-primary">B</span>laze
			</p>
			<p className="text-sm">{t("Text")}</p>
		</div>
	);
};

export default Footer;
