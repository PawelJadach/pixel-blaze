"use client";
import { useTranslations } from "next-intl";
import Script from "next/script";
import React from "react";

const Calendly = () => {
	const t = useTranslations("Calendly");

	const handleClick = () => {
		// @ts-ignore
		window.Calendly.initPopupWidget({
			url: "https://calendly.com/pixel-blaze/15min",
		});
		return false;
	};

	return (
		<>
			<Script
				src="https://assets.calendly.com/assets/external/widget.js"
				type="text/javascript"
				async
			/>
			<link
				href="https://assets.calendly.com/assets/external/widget.css"
				rel="stylesheet"
			/>

			<button className="text-sm z-50 p-2 px-4" onClick={handleClick}>
				{t("button")}
			</button>
		</>
	);
};

export default Calendly;
