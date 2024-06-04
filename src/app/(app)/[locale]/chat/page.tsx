import React from "react";
import Navbar from "@/components/navbar";
import Chat from "@/components/chat";
import { Metadata } from "next";

function ChatPage() {
  return (
    <div className="max-h-vh">
      <Navbar />
      <Chat />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Chatbot",
  description: "Chat with our AI assistant to get personalized assistance.",
};

export default ChatPage;
