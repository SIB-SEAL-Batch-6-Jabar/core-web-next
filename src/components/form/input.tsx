import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import React, { ChangeEventHandler } from "react";

function InputForm(props: {
  title: string;
  name: string;
  value?: string;
  description?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: React.HTMLInputTypeAttribute;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <Field>
      <Label className="text-sm/3 text-gray-800">{props.title}</Label>
      <Input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        required={props.required}
        disabled={props.disabled}
        className={clsx(
          `block w-full rounded-lg border mt-2 text-gray-800 ${
            props.error ? "border-red-500" : "border-gray-100"
          } bg-gray-50 py-1.5 px-3 text-sm/6`,
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        )}
      />
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

export default InputForm;
