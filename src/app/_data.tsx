import { DocumentCheckIcon } from "@heroicons/react/24/solid";
import { FireIcon } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import { FaceFrownIcon } from "@heroicons/react/24/solid";
import { FaceSmileIcon } from "@heroicons/react/24/solid";
import { HandRaisedIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export const benefitOne = {
  title: "Why Test for Diabetes?",
  desc: "Early detection is key to managing and preventing diabetes. Take our quick and easy test to find out if you're at risk for diabetes, prediabetes, or if you're in the clear.",
  image: "/img/benefit-1.svg",
  imgPos: "left",
  bullets: [
    {
      title: "Prevent Complications",
      desc: "Diabetes can lead to serious complications, including heart disease, stroke, and kidney failure. Early detection can help you take steps to prevent these issues.",
      icon: <HandRaisedIcon />,
    },
    {
      title: "Manage Your Health",
      desc: "Knowing your risk for diabetes can help you make informed decisions about your health. By taking our test, you can get the information you need to take control of your health.",
      icon: <DocumentCheckIcon />,
    },
    {
      title: "Live Your Best Life",
      desc: "Diabetes doesn't have to hold you back. By understanding your risk and taking proactive steps to manage your health, you can live a full and active life.",
      icon: <FaceSmileIcon />,
    },
  ],
};

export const benefitTwo = {
  title: "Signs of Diabetes to Watch For",
  desc: "Diabetes can be a silent condition, but there are signs and symptoms to watch for. If you experience any of these symptoms, it's important to speak with your healthcare provider.",
  image: "/img/benefit-2.svg",
  imgPos: "right",
  bullets: [
    {
      title: "Increased Thirst and Frequent Urination",
      desc: "High blood sugar levels cause more fluid to be pulled from your tissues, making you feel thirsty and leading to more frequent trips to the bathroom.",
      icon: <FireIcon />,
    },
    {
      title: "Extreme Fatigue",
      desc: "When your body can't use sugar for energy, it starts to break down fat and muscle for fuel, which can make you feel very tired.",
      icon: <FaceFrownIcon />,
    },
    {
      title: "Blurred Vision",
      desc: "High blood sugar levels can cause the lenses in your eyes to swell, leading to vision problems.",
      icon: <FaceFrownIcon />,
    },
  ],
};

export const benefitThree = {
  title: "Take the Test Now!",
  desc: "Simply answer a few questions about your lifestyle and health. Our algorithm will analyze your answers and categorize your risk into one of three categories:",
  image: "/img/benefit-3.svg",
  imgPos: "left",
  bullets: [
    {
      title: "No Diabetes",
      desc: "Great news! Learn how to maintain your healthy lifestyle.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Prediabetes",
      desc: "You're at risk, but there's still time to make changes. Discover steps to prevent diabetes.",
      icon: <BellAlertIcon />,
    },
    {
      title: "Diabetes",
      desc: "It's important to act now. Find out how to manage your condition effectively.",
      icon: <ExclamationCircleIcon />,
    },
  ],
};
