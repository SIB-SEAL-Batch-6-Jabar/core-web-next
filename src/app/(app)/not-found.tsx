import Container from "@/components/container";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <>
      <Navbar />

      <Container className="flex flex-col items-center">
        <Image
          src="/img/not-found.svg"
          alt="Not Found"
          width={300}
          height={300}
          className="mx-auto"
        />
        <h1 className="text-4xl font-bold text-center text-gray-800 mt-8">
          Oops! Page Not Found
        </h1>
        <p className="text-center text-gray-500 mt-2 mb-8">
          We&apos;re sorry, but the page you were looking for doesn&apos;t
          exist.
        </p>

        <Link href="/" className="text-white bg-indigo-600 rounded py-2 px-4">
          Home
        </Link>
      </Container>

      <Footer />
    </>
  );
}

export default NotFound;
