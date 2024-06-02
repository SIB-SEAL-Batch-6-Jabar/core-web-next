import Link from "next/link";
import React from "react";

function Pagination({
  prev,
  next,
}: {
  prev: {
    disabled: boolean;
    nextPage: number;
  };
  next: {
    disabled: boolean;
    nextPage: number;
  };
}) {
  return (
    <div className="flex flex-col mt-8 md:max-w-2xl mx-auto w-full items-center">
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          disabled={prev.disabled}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed bg-white rounded-s hover:bg-gray-200 "
        >
          <Link href={`/blog?page=${prev.nextPage}`}>Prev</Link>
        </button>
        <button
          disabled={next.disabled}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed bg-white border-0 border-s border-gray-200 rounded-e hover:bg-gray-200 "
        >
          <Link href={`/blog?page=${next.nextPage}`}>Next</Link>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
