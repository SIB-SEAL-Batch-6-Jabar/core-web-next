import React from "react";
import ReactMarkdown from "react-markdown";

function BubbleChat(props: { message: string; position?: "left" | "right" }) {
  return (
    <div
      className={`flex ${props.position == "right" ? "justify-end" : ""} m-2`}
    >
      <div
        className={`bg-white px-4 py-2 rounded-xl md:max-w-md max-w-xs text-gray-800 prose  ${
          props.position == "right" ? "rounded-br-none" : "rounded-bl-none"
        }`}
      >
        <ReactMarkdown>{props.message}</ReactMarkdown>
      </div>
    </div>
  );
}

export default BubbleChat;
