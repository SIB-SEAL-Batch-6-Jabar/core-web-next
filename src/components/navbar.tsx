"use client";

import Link from "next/link";
// import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const Navbar = () => {
  const navigation = ["Forum"];

  return (
    <div className="w-full sticky top-0 bg-white/90 backdrop-blur-sm z-50">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 ">
                    <span>
                      <Image
                        src="/img/logo.svg"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>Simanis</span>
                  </span>
                </Link>

                <DisclosureButton
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none "
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </DisclosureButton>

                <DisclosurePanel className="flex flex-wrap w-full my-5 lg:hidden">
                  <Link
                    href="/blog"
                    className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100  focus:outline-none"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/chat"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                  >
                    Try our chatbot
                  </Link>
                </DisclosurePanel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="flex items-center">
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              <li className="mr-3 nav__item">
                <Link
                  href="/blog"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none "
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden mr-3 space-x-4 lg:flex nav__item">
            <Link
              href="/chat"
              className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            >
              Try our chatbot
            </Link>

            {/* <ThemeChanger /> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
