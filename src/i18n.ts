import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "./utils/locale";

export type Locale = (typeof locales)[number];

export const locales = ["en", "pl"] as const;
export const defaultLocale: Locale = "pl";

export default getRequestConfig(async () => {
	const locale = await getUserLocale();

	return {
		locale,
		messages: (await import(`../messages/${locale}.json`)).default,
	};
});
