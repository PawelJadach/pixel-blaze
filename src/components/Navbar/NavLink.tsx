import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import { rounded } from "@/settings/theme";
import { useTranslations } from "next-intl";

export type NavLinkProps = {
	href: string;
	labelKey: string;
	filled?: boolean;
	mobile?: boolean;
};

export default function NavLink({
	href,
	labelKey,
	filled = false,
	mobile = false,
}: NavLinkProps) {
	const t = useTranslations("Navbar");
	const label = t(labelKey);

	return (
		<Link href={href}>
			<span
				className={cn(
					"transition-all hover:opacity-90",
					rounded,
					filled
						? "bg-primary text-primaryContent px-4 py-2 rounded-lg"
						: "hover:bg-primary rounded-lg hover:text-primaryContent px-2 py-1",
					mobile && "text-lg",
				)}
			>
				{label}
			</span>
		</Link>
	);
}
