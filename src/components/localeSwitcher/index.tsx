import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./select";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return <LocaleSwitcherSelect defaultValue={locale} />;
}
