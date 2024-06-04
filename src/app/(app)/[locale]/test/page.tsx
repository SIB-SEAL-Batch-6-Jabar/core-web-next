import Navbar from "@/components/navbar";
import React from "react";
import Footer from "@/components/footer";
import { Metadata } from "next";
import SectionTitle from "@/components/section-title";
import { Link } from "@/navigation";

function TestPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center ">
        <SectionTitle
          pretitle="Are you concerned about diabetes?"
          title="Find out if you're at risk with our quick and easy test!"
        >
          Taking just a few minutes to complete, our diabetes risk test helps
          you understand your current health status. Follow these simple steps
          to take control of your health.
        </SectionTitle>
        <Link
          className="px-6 py-2 text-white bg-indigo-600 rounded-md"
          href={"/test/start"}
        >
          Start the test
        </Link>
        {/* <Benefits
        data={{
          title: "How to Take the Test",
          imgPos: "left",
          image: "/img/test.svg",
          bullets: [
            {
              title: "Start the Test",
              desc: "Click the button above to start the test.",
              icon: <ChevronRightIcon />,
            },
            {
              title: "Answer Questions",
              desc: "Provide accurate answers based on your medical history and current lifestyle.",
              icon: <ChevronRightIcon />,
            },
            {
              title: "Submit Your Answers",
              desc: "Once you've completed all the questions, submit your responses.",
              icon: <ChevronRightIcon />,
            },
            {
              title: "Receive Results via Email",
              desc: "Your results will be processed according to the queue and sent to your email.",
              icon: <ChevronRightIcon />,
            },
          ],
        }}
      /> */}
      </div>
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Simanis: Diabetes Test",
  description: "Find out if you're at risk with our quick and easy test!",
};

export default TestPage;
