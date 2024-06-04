import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { Locale } from "./navigation";
import { type AbstractIntlMessages } from "next-intl";

// Can be imported from a shared config
const locales = ["en", "id"];

const messageImports = {
  en: () => import("../messages/en.json"),
  id: () => import("../messages/id.json"),
} as const satisfies Record<
  Locale,
  () => Promise<{ default: AbstractIntlMessages }>
>;

export function isValidLocale(locale: unknown): locale is Locale {
  return locales.some((l) => l === locale);
}

export default getRequestConfig(async ({ locale }) => {
  const baseLocale = new Intl.Locale(locale).baseName;
  if (!isValidLocale(baseLocale)) notFound();

  const messages = (await messageImports[baseLocale]()).default;

  return {
    messages,
  };
});
