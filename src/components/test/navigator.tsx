import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import React from "react";

const Navigator = (props: {
  leftOnClick?: () => void;
  rightOnClick?: () => void;
  showBack?: boolean;
  showError: boolean;
  errorMsg: string;
}) => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col space-y-4 items-center">
      {props.showError && <p className="text-red-500">{props.errorMsg}</p>}
      <div className="flex space-x-4 ">
        {props.showBack && (
          <button
            onClick={props.leftOnClick}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 text-gray-500 hover:bg-gray-100 focus:outline-none"
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>
        )}
        <button
          onClick={props.rightOnClick}
          className="w-24 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white hover:bg-indigo-800 focus:outline-none"
        >
          <ChevronRightIcon className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default Navigator;
