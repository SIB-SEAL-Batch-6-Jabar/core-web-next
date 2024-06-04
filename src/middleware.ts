import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, Locale } from "./navigation";

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: "en" satisfies Locale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|_vercel|img|admin|.*\\..*).*)", "/(id|en)/:path*"],
};
