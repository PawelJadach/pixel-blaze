import React from "react";
import Service from "./Service";
import {
	BrandingIcon,
	CopywritingIcon,
	DesignIcon,
	DevelopmentIcon,
} from "./Icons";
import { useTranslations } from "next-intl";

const Services = () => {
	const t = useTranslations("Services");

	return (
		<div
			className="max-w-screen-xl mx-auto flex justify-between items-center md:items-start flex-col md:flex-row gap-12 mt-20 md:mt-40"
			id="services"
		>
			<Service
				header={t("Development.Header")}
				text={t("Development.Text")}
				icon={<DevelopmentIcon />}
			/>
			<Service
				header={t("Design.Header")}
				text={t("Design.Text")}
				icon={<DesignIcon />}
			/>
			<Service
				header={t("Copywriting.Header")}
				text={t("Copywriting.Text")}
				icon={<CopywritingIcon />}
			/>
			<Service
				header={t("Branding.Header")}
				text={t("Branding.Text")}
				icon={<BrandingIcon />}
			/>
		</div>
	);
};

export default Services;
