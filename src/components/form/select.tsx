import { Description, Field, Label, Select } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React, { ChangeEvent, ChangeEventHandler } from "react";

function SelectForm(props: {
  title: string;
  name: string;
  value?: string;
  description?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  error?: string;
  required?: boolean;
  options: {
    title: string;
    value: string | number;
  }[];
  disabled?: boolean;
}) {
  return (
    <Field>
      <Label className="text-sm text-gray-800">{props.title}</Label>
      <div className="relative">
        <Select
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          required={props.required}
          disabled={props.disabled}
          defaultValue=""
          className={clsx(
            `block w-full appearance-none mt-2 rounded-lg border text-gray-800 ${
              props.error ? "border-red-500" : "border-gray-100"
            } bg-gray-50 py-1.5 px-3 text-sm/6 `,
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
        >
          <option value="" hidden>
            Select
          </option>
          {props.options.map((item, i) => (
            <option value={item.value} key={i}>
              {item.title}
            </option>
          ))}
        </Select>
        <ChevronDownIcon
          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 "
          aria-hidden="true"
        />
      </div>
      {props.error ? (
        <Description className="text-xs text-red-500">
          {props.error}
        </Description>
      ) : (
        <Description className="text-xs text-gray-400">
          {props.description}
        </Description>
      )}
    </Field>
  );
}

export default SelectForm;
