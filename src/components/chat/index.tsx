"use client";

import React, { useState } from "react";
import {
  continueConversation,
  Message,
} from "@/app/(app)/[locale]/chat/actions";
import { readStreamableValue } from "ai/rsc";
import Image from "next/image";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import BubbleChat from "./bubble";

function Chat() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim() === "") {
      return;
    }

    setLoading(true);

    const { messages, newMessage } = await continueConversation([
      ...conversation,
      { role: "user", content: input },
    ]);

    setInput("");

    let textContent = "";

    for await (const delta of readStreamableValue(newMessage)) {
      textContent = `${textContent}${delta}`;

      setConversation([
        ...messages,
        { role: "assistant", content: textContent },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col max-w-3xl w-full mx-auto h-[calc(100vh-109px)] pb-4">
      <div className=" flex-grow bg-slate-200 overflow-y-auto">
        {conversation.map((message, index) => (
          <BubbleChat
            message={message.content}
            position={message.role == "user" ? "right" : "left"}
            key={index}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex bg-white px-4 py-2 gap-4">
          <input
            type="text"
            className="w-full h-12 px-4 text-md rounded bg-slate-100 outline-none focus:ring-2 text-gray-800 focus:ring-indigo-600 focus:ring-opacity-50"
            placeholder="Type a message..."
            value={input}
            disabled={loading}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-indigo-600 rounded-full"
            disabled={loading}
          >
            {loading ? (
              <Image
                src="/img/spinner.svg"
                alt="loading"
                className="animate-spin"
                width={24}
                height={24}
              />
            ) : (
              <PaperAirplaneIcon className="h-6 w-6 fill-white" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chat;
