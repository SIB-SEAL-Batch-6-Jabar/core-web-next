import { Link } from "@/navigation";
import Image from "next/image";
import React from "react";
import Container from "./container";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("global.footer");
  return (
    <div className="relative bg-white  border-t border-gray-100 mt-10 py-8">
      <div className="max-w-screen-lg flex flex-col items-center gap-10 mx-auto">
        <div>
          <div>
            <Link
              href="/"
              className="flex items-center justify-center space-x-2 text-2xl font-medium text-indigo-500 text-center"
            >
              <Image
                src="/img/logo.svg"
                alt="N"
                width="32"
                height="32"
                className="w-8"
              />
              <span>Simanis</span>
            </Link>
          </div>

          <div className="lg:mx-52 md:mx-24 text-center mt-4 text-gray-500 ">
            {t("description")}
          </div>
        </div>

        <div>
          <Link
            href="/blog"
            className="w-full px-4 py-2 text-gray-500 rounded-md  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none "
          >
            {t("links.blog")}
          </Link>
          <Link
            href="/chat"
            className="w-full px-4 py-2 text-gray-500 rounded-md  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none "
          >
            {t("links.chatbot")}
          </Link>
          <Link
            href="/test"
            className="w-full px-4 py-2 text-gray-500 rounded-md  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none "
          >
            {t("links.test")}
          </Link>
        </div>
      </div>
    </div>
  );
}
