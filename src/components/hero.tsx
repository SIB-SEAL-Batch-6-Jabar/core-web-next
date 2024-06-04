import React from "react";
import Container from "./container";
import Image from "next/image";
import heroImg from "../../public/img/hero.svg";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

function Hero() {
  const t = useTranslations("index.hero");

  return (
    <>
      <Container className="flex flex-wrap min-h-[calc(100vh-100px)]">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              {t("title")}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl ">
              {t("subtitle")}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/test"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                {t("button")}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
      {/* <Container> */}
      {/* <div className="flex flex-col justify-center"> */}
      {/* <div className="text-xl text-center text-gray-700 ">
            Trusted by <span className="text-indigo-600">2000+</span> customers
            worldwide
          </div> */}

      {/* <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
              <div className="pt-2 text-gray-400 dark:text-gray-400">
                <AmazonLogo />
              </div>
              <div className="text-gray-400 dark:text-gray-400">
                <VerizonLogo />
              </div>
              <div className="text-gray-400 dark:text-gray-400">
                <MicrosoftLogo />
              </div>
              <div className="pt-1 text-gray-400 dark:text-gray-400">
                <NetflixLogo />
              </div>
              <div className="pt-2 text-gray-400 dark:text-gray-400">
                <SonyLogo />
              </div>
            </div> */}
      {/* </div> */}
      {/* </Container> */}
    </>
  );
}

export default Hero;
