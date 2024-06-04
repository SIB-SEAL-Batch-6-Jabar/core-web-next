"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "@/navigation";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useTranslations } from "next-intl";
import { locales } from "@/navigation";
import Image from "next/image";

type Props = {
  defaultValue: string;
};

export default function LocaleSwitcherSelect({ defaultValue }: Props) {
  const t = useTranslations("global.localeSwitcher");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onClick(locale: string) {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  }

  return (
    <>
      <Menu>
        <MenuButton className="px-2 py-1 rounded-lg border-2 flex items-center gap-2 border-gray-200">
          <Image
            src={t("locale", { locale: defaultValue })}
            alt={defaultValue}
            width={24}
            height={24}
          />
          <ChevronUpDownIcon className="w-6 h-6 fill-gray-400" />
        </MenuButton>
        <MenuItems
          anchor="bottom"
          modal={false}
          className="z-50 mt-2 bg-white shadow px-2 py-1 rounded divide-y w-20 flex flex-col items-center"
        >
          {locales.map((cur) => (
            <MenuItem key={cur}>
              <button
                className="flex gap-1 cursor-pointer py-2 px-0 w-full items-center justify-center"
                name={cur}
                onClick={() => onClick(cur)}
              >
                <Image
                  src={t("locale", { locale: cur })}
                  alt={cur}
                  width={24}
                  height={24}
                />

                <span>{cur.toString().toUpperCase()}</span>
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </>
  );
}
