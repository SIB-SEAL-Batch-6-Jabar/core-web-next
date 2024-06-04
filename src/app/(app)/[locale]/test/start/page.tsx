import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import StartTest from "@/components/test/start";
import { useTranslations } from "next-intl";
import React from "react";

function StartTestPage() {
  const t = useTranslations("test");

  return (
    <>
      <Navbar />
      <StartTest />
      <Footer />
    </>
  );
}

export default StartTestPage;
