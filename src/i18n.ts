import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "./utils/locale";

export type Locale = (typeof locales)[number];

export const locales = ["en", "de"] as const;
export const defaultLocale: Locale = "en";

export default getRequestConfig(async () => {
	const locale = await getUserLocale();

	return {
		locale,
		messages: (await import(`../messages/${locale}.json`)).default,
	};
});
