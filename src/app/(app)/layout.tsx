import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SiManis",
  description:
    "Simanis is an app to test for your diabetes risk, with some other feature like a helpful chatbot for personalized assistance, and a supportive forum for community engagement. Take control of your health journey with Simanis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>{children}</body>
    </html>
  );
}
