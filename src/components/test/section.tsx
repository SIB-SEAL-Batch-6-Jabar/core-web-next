"use client";
import {
  Description,
  Field,
  Input,
  Label,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import React from "react";

const SectionTest = (props: {
  question: string;
  id: string;
  options?: { title: string; value: string | number }[];
  onChange: (value: string | number, key: string) => void;
  value: string | number | undefined;
  type: string;
  range?: string;
}) => {
  return (
    <div
      className="h-[calc(100vh-108px)] flex items-center justify-center"
      id={props.id}
    >
      <div className="flex flex-col gap-4 md:p-0 px-4 max-w-xl w-full">
        <p className="text-center md:text-lg">{props.question}</p>
        {props.type == "options" ? (
          <RadioGroup
            value={props.value}
            onChange={(value) => props.onChange(value, props.id)}
            aria-label="Server size"
            className="flex justify-evenly items-center flex-wrap"
          >
            {props?.options?.map((option, i) => (
              <Field key={i} className="flex items-center gap-2">
                <Radio
                  value={option.value}
                  className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
                >
                  <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                </Radio>
                <Label>{option.title}</Label>
              </Field>
            ))}
          </RadioGroup>
        ) : (
          <input
            type="number"
            value={props.value}
            min={props.range?.split("-")[0]}
            max={props.range?.split("-")[1]}
            onChange={(e) => props.onChange(e.currentTarget.value, props.id)}
            className="border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
          />
        )}
      </div>
    </div>
  );
};

export default SectionTest;
