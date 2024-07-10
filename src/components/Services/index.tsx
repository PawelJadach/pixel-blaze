import React from "react";
import Service from "./Service";
import {
	BrandingIcon,
	CopywritingIcon,
	DesignIcon,
	DevelopmentIcon,
} from "./Icons";
import { useTranslations } from "next-intl";
import SlideIn from "../animations/SlideIn";

const Services = () => {
	const t = useTranslations("Services");

	return (
		<div
			className="max-w-screen-xl mx-auto flex justify-between items-center md:items-start flex-col md:flex-row gap-12 mt-20 md:mt-40"
			id="services"
		>
			<SlideIn delay={0.2}>
				<Service
					header={t("Development.Header")}
					text={t("Development.Text")}
					icon={<DevelopmentIcon />}
				/>
			</SlideIn>
			<SlideIn delay={0.4}>
				<Service
					header={t("Design.Header")}
					text={t("Design.Text")}
					icon={<DesignIcon />}
				/>
			</SlideIn>
			<SlideIn delay={0.6}>
				<Service
					header={t("Copywriting.Header")}
					text={t("Copywriting.Text")}
					icon={<CopywritingIcon />}
				/>
			</SlideIn>
			<SlideIn delay={0.8}>
				<Service
					header={t("Branding.Header")}
					text={t("Branding.Text")}
					icon={<BrandingIcon />}
				/>
			</SlideIn>
		</div>
	);
};

export default Services;
