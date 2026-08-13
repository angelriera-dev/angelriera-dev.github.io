import { LOCALES, type Locale, DEFAULT_LOCALE } from "@/content/i18n/site";

// @ponytail: detect locale from path, avoiding prop drilling.
export function getLocale(pathname: string): Locale {
    const lang = pathname.split('/')[1];
    return LOCALES.includes(lang as Locale) ? (lang as Locale) : DEFAULT_LOCALE;
}
