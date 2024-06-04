import Container from "@/components/container";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";

function OfflinePage() {
  return (
    <>
      <Navbar />

      <Container className="flex flex-col items-center">
        <Image
          src="/img/offline.svg"
          alt="Offline"
          width={300}
          height={300}
          className="mx-auto"
        />
        <h1 className="text-4xl font-bold text-center text-gray-800 mt-8">
          Oops! It looks like you&apos;re offline.
        </h1>
        <p className="text-center text-gray-500 mt-2 mb-8">
          We noticed you&apos;re not connected to the internet. But don&apos;t
          worry, we&apos;ll be here when you get back online.
        </p>
      </Container>

      <Footer />
    </>
  );
}

export default OfflinePage;
