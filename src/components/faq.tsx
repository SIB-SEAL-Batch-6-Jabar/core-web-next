"use client";

import React from "react";
import Container from "./container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 ">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 ">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "How long does the test take?",
    answer: "The test takes about 5 minutes to complete.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Absolutely. We prioritize your privacy and ensure that all data is kept confidential.",
  },
  {
    question: "What should I do if I’m at risk for diabetes?",
    answer:
      "If your results indicate prediabetes or diabetes, we will provide you with resources and next steps to manage your health.",
  },
  {
    question: "Can lifestyle changes really help prevent diabetes?",
    answer:
      "Yes, lifestyle changes such as maintaining a healthy diet, exercising regularly, and managing your weight can significantly reduce your risk of developing diabetes or help manage the condition if you already have it.",
  },
];

export default Faq;
