import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <div className="relative">
      <Container>
        <div className="max-w-screen-xl flex flex-col items-center gap-10 border-t border-gray-100">
          <div className="mt-10">
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
              Simanis is your dedicated diabetes management app, offering a
              convenient diabetes test, a helpful chatbot for personalized
              assistance, and a supportive forum for community engagement.{" "}
              <br /> Take control of your health journey with Simanis.
            </div>
          </div>

          <div>
            <Link
              href="/"
              className="w-full px-4 py-2 text-gray-500 rounded-md  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none "
            >
              Forum
            </Link>
            <Link
              href="/chat"
              className="w-full px-4 py-2 text-gray-500 rounded-md  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none "
            >
              Chatbot
            </Link>
            <Link
              href="/test"
              className="w-full px-4 py-2 text-gray-500 rounded-md  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none "
            >
              Take a test
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
