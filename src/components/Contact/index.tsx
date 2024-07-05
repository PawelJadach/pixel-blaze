import React from "react";
import Form from "./Form";
import { useTranslations } from "next-intl";

const Contact = () => {
	const t = useTranslations("Contact");

	return (
		<div
			className="max-w-screen-xl mx-auto mt-20 md:mt-40 flex flex-col md:flex-row gap-6 items-center justify-between py-6"
			id="contact"
		>
			<div>
				<div className="h-1 w-28 bg-primary rounded-xl mb-5 text-balance" />
				<h1>{t("Header")}</h1>
			</div>
			<Form />
		</div>
	);
};

export default Contact;
