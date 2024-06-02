import Navbar from "@/components/navbar";
import React from "react";
import Footer from "@/components/footer";
import { Metadata } from "next";
import Test from "@/components/test";

function TestPage() {
  return (
    <>
      <Navbar />
      <Test />
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Simanis: Diabetes Test",
  description: "Find out if you're at risk with our quick and easy test!",
};

export default TestPage;
