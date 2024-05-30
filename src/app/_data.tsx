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

export const testQuestions = [
  {
    title: "Diagnosed with high blood pressure",
    name: "HighBP",
    type: "options",
    options: [
      { title: "No high BP", value: 0 },
      { title: "High BP", value: 1 },
    ],
  },
  {
    title: "Diagnosed with high cholesterol",
    name: "HighChol",
    type: "options",
    options: [
      { title: "No high cholesterol", value: 0 },
      { title: "High cholesterol", value: 1 },
    ],
  },
  {
    title: "Did a cholesterol check in the last 5 years",
    name: "CholCheck",
    type: "options",
    options: [
      { title: "No", value: 0 },
      { title: "Yes", value: 1 },
    ],
  },
  {
    title: "What is your Body Mass Index (BMI)?",
    name: "BMI",
    type: "continuous",
  },
  {
    title:
      "Have you smoked at least 100 cigarettes in your entire life? (Note: 5 packs = 100 cigarettes)",
    name: "Smoker",
    type: "options",
    options: [
      { title: "No", value: 0 },
      { title: "Yes", value: 1 },
    ],
  },
  {
    title: "Have you ever had a stroke?",
    name: "Stroke",
    type: "options",
    options: [
      { title: "No", value: 0 },
      { title: "Yes", value: 1 },
    ],
  },
  {
    title:
      "Have you ever been told you had coronary heart disease (CHD) or myocardial infarction (MI)?",
    name: "HeartDiseaseorAttack",
    type: "options",
    options: [
      { title: "No", value: 0 },
      { title: "Yes", value: 1 },
    ],
  },
  {
    title:
      "Have you participated in any physical activity in the past 30 days?",
    name: "PhysActivity",
    type: "options",
    options: [
      { title: "No", value: 0 },
      { title: "Yes", value: 1 },
    ],
  },
  {
    title: "Do you consume fruit 1 or more times per day?",
    name: "Fruits",
    type: "options",
    options: [
      { title: "No", value: 0 },
      { title: "Yes", value: 1 },
    ],
  },
  {
    title: "Do you consume vegetables 1 or more times per day?",
    name: "Veggies",
    type: "options",
    options: [
      { title: "No", value: 0 },
      { title: "Yes", value: 1 },
    ],
  },
  {
    title:
      "Are you a heavy drinker? (Adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)",
    name: "HvyAlcoholConsump",
    type: "options",
    options: [
      { title: "No", value: 0 },
      { title: "Yes", value: 1 },
    ],
  },
  {
    title:
      "Do you have any kind of health care coverage, including health insurance, prepaid plans such as HMO, etc.?",
    name: "AnyHealthcare",
    type: "options",
    options: [
      { title: "No", value: 0 },
      { title: "Yes", value: 1 },
    ],
  },
  {
    title:
      "Was there a time in the past 12 months when you needed to see a doctor but couldn't because of cost?",
    name: "NoDocbcCost",
    type: "options",
    options: [
      { title: "No", value: 0 },
      { title: "Yes", value: 1 },
    ],
  },
  {
    title: "In general, would you say that your health is:",
    name: "GenHlth",
    type: "options",
    options: [
      { title: "Excellent", value: 1 },
      { title: "Very good", value: 2 },
      { title: "Good", value: 3 },
      { title: "Fair", value: 4 },
      { title: "Poor", value: 5 },
    ],
  },
  {
    title:
      "Thinking about your mental health, which includes stress, depression, and problems with emotions, for how many days during the past 30 days was your mental health not good?",
    name: "MentHlth",
    type: "continuous",
    range: "0-30",
  },
  {
    title:
      "Thinking about your physical health, which includes physical illness and injury, for how many days during the past 30 days was your physical health not good?",
    name: "PhysHlth",
    type: "continuous",
    range: "0-30",
  },
  {
    title: "Do you have serious difficulty walking or climbing stairs?",
    name: "DiffWalk",
    type: "options",
    options: [
      { title: "No", value: 0 },
      { title: "Yes", value: 1 },
    ],
  },
  {
    title: "What is your sex?",
    name: "Sex",
    type: "options",
    options: [
      { title: "Female", value: 0 },
      { title: "Male", value: 1 },
    ],
  },
  {
    title: "What is your age category?",
    name: "Age",
    type: "options",
    options: [
      { title: "18-24", value: 1 },
      { title: "25-29", value: 2 },
      { title: "30-34", value: 3 },
      { title: "35-39", value: 4 },
      { title: "40-44", value: 5 },
      { title: "45-49", value: 6 },
      { title: "50-54", value: 7 },
      { title: "55-59", value: 8 },
      { title: "60-64", value: 9 },
      { title: "65-69", value: 10 },
      { title: "70-74", value: 11 },
      { title: "75-79", value: 12 },
      { title: "80 or older", value: 13 },
    ],
  },
];
