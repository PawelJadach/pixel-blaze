import { cn } from "@/utils/cn";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
	const t = useTranslations("Hero");
	const locale = useLocale();

	return (
		<div
			className="max-w-screen-xl mx-auto flex justify-between items-center flex-col md:flex-row gap-12"
			id="hero"
		>
			<div className="flex flex-col gap-8 max-w-lg">
				<h1
					className={cn(
						"text-balance",
						locale === "pl" && "text-5xl",
					)}
				>
					{t("Header.Title")}{" "}
					<span className="relative -z-10">
						<span className="absolute -left-1 -right-2 top-1/2 bg-primary rounded-lg h-2 -z-20" />
						{t("Header.You")}
					</span>
				</h1>
				<p>{t("Text")}</p>
				<Link href="#contact">
					<button>{t("Button")}</button>
				</Link>
			</div>
			<div>
				<Image
					src="/hero.png"
					width={570}
					height={278}
					alt={t("Image")}
				/>
			</div>
		</div>
	);
};

export default Hero;
