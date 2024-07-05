"use client";
import { Locale } from "@/i18n";
import { setUserLocale } from "@/utils/locale";
import React, { useTransition } from "react";
import { useLocale } from "next-intl";
import { cn } from "@/utils/cn";

const LocaleSwitcher = () => {
	const [isPending, startTransition] = useTransition();
	const locale = useLocale();
	const differentLocale = locale === "pl" ? "en" : "pl";

	function handleClick() {
		const locale = differentLocale as Locale;
		startTransition(() => {
			setUserLocale(locale);
		});
	}

	return (
		<div className="relative">
			<button
				className={cn(
					"p-2 py-1 text-sm border border-primary bg-transparent w-10",
					isPending && "pointer-events-none opacity-60",
				)}
				onClick={handleClick}
				disabled={isPending}
			>
				{differentLocale.toUpperCase()}
			</button>
		</div>
	);
};

export default LocaleSwitcher;
