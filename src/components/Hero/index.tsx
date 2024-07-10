import { cn } from "@/utils/cn";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SlideIn from "../animations/SlideIn";

const Hero = () => {
	const t = useTranslations("Hero");
	const locale = useLocale();

	return (
		<div
			className="max-w-screen-xl mx-auto flex justify-between items-center flex-col md:flex-row gap-12"
			id="hero"
		>
			<div className="flex flex-col gap-8 max-w-lg">
				<SlideIn>
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
				</SlideIn>
				<SlideIn>
					<p>{t("Text")}</p>
				</SlideIn>
				<SlideIn delay={0.6}>
					<Link href="#contact">
						<button>{t("Button")}</button>
					</Link>
				</SlideIn>
			</div>
			<SlideIn delay={0.8}>
				<div>
					<Image
						src="/hero.png"
						width={570}
						height={278}
						alt={t("Image")}
					/>
				</div>
			</SlideIn>
		</div>
	);
};

export default Hero;
