import React from "react";
import Form from "./Form";
import { useTranslations } from "next-intl";
import SlideIn from "../animations/SlideIn";

const Contact = () => {
	const t = useTranslations("Contact");

	return (
		<div
			className="max-w-screen-xl mx-auto mt-20 md:mt-40 flex flex-col md:flex-row gap-6 items-center justify-between py-6"
			id="contact"
		>
			<SlideIn>
				<div>
					<div className="h-1 w-28 bg-primary rounded-xl mb-5 text-balance" />
					<h1>{t("Header")}</h1>
				</div>
			</SlideIn>
			<SlideIn className="w-full max-w-[650px]" delay={0.4}>
				<Form />
			</SlideIn>
		</div>
	);
};

export default Contact;
