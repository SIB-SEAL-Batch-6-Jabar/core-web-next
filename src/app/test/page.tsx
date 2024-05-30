"use client";
import Navbar from "@/components/navbar";
import React, { useState } from "react";
import Container from "@/components/container";
import { Button } from "@headlessui/react";
import InputForm from "@/components/form/input";
import SelectForm from "@/components/form/select";
import { z } from "zod";
import { API } from "@/utils/axios";
import { AxiosError } from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import Footer from "@/components/footer";
import SectionTitle from "@/components/section-title";
import Benefits from "@/components/benefits";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function TestPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ [key: string]: string[] }>({});
  const [answer, setAnswer] = useState<{
    [key: string]: string | number | undefined;
  }>({});
  const [start, setStart] = useState<boolean>(false);

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    let value: string | number = e.currentTarget.value;

    if (typeof value === "string" && !isNaN(Number(value))) {
      value = Number(value);
    }

    setAnswer({
      ...answer,
      [e.currentTarget.name]: value,
    });
  };

  const yesNoValidator = (value: number) => {
    if (![0, 1].includes(value)) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const schema = z
        .object({
          Email: z.string().email({ message: "Invalid email address" }),
          HighBP: z.number().refine(yesNoValidator, {
            message: "Value must be 0 (No) or 1 (Yes)",
          }),
          HighChol: z.number().refine(yesNoValidator, {
            message: "Value must be 0 (No) or 1 (Yes)",
          }),
          CholCheck: z.number().refine(yesNoValidator, {
            message: "Value must be 0 (No) or 1 (Yes)",
          }),
          BMI: z.number().min(1.0, { message: "BMI must be at least 1.0" }),
          Smoker: z.number().refine(yesNoValidator, {
            message: "Value must be 0 (No) or 1 (Yes)",
          }),
          Stroke: z.number().refine(yesNoValidator, {
            message: "Value must be 0 (No) or 1 (Yes)",
          }),
          HeartDiseaseorAttack: z.number().refine(yesNoValidator, {
            message: "Value must be 0 (No) or 1 (Yes)",
          }),
          PhysActivity: z.number().refine(yesNoValidator, {
            message: "Value must be 0 (No) or 1 (Yes)",
          }),
          Fruits: z.number().refine(yesNoValidator, {
            message: "Value must be 0 (No) or 1 (Yes)",
          }),
          Veggies: z.number().refine(yesNoValidator, {
            message: "Value must be 0 (No) or 1 (Yes)",
          }),
          HvyAlcoholConsump: z.number().refine(yesNoValidator, {
            message: "Value must be 0 (No) or 1 (Yes)",
          }),
          AnyHealthcare: z.number().refine(yesNoValidator, {
            message: "Value must be 0 (No) or 1 (Yes)",
          }),
          NoDocbcCost: z.number().refine(yesNoValidator, {
            message: "Value must be 0 (No) or 1 (Yes)",
          }),
          GenHlth: z.number().refine((val) => [1, 2, 3, 4, 5].includes(val), {
            message: "Value must be between 1 (Excellent) and 5 (Poor)",
          }),
          MentHlth: z
            .number()
            .min(0, { message: "Mental health days must be at least 0" })
            .max(30, { message: "Mental health days must be at most 30" }),
          PhysHlth: z
            .number()
            .min(0, { message: "Physical health days must be at least 0" })
            .max(30, { message: "Physical health days must be at most 30" }),
          DiffWalk: z.number().refine(yesNoValidator, {
            message: "Value must be 0 (No) or 1 (Yes)",
          }),
          Sex: z.number().refine(yesNoValidator, {
            message: "Value must be 0 (Female) or 1 (Male)",
          }),
          Age: z
            .number()
            .min(1, { message: "Age category must be at least 1" })
            .max(13, { message: "Age category must be at most 13" }),
        })
        .required();

      const result = schema.safeParse(answer);

      if (!result.success) {
        let errors: { [key: string]: string[] } = {};

        result.error.errors.map((e) => {
          errors[e.path[0]] = [e.message];
        });

        setError(errors);

        throw errors;
      }

      const response = await API.post("/calculate/", result.data);

      if (response.status == 200) {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          title: "Your test result is on the way!",
          text: "Please check your email for the result.",
          icon: "success",
        });
      }

      setError({});
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError) {
        if (error.response?.status == 422) {
          setError(error.response?.data.errors);
        }

        const MySwal = withReactContent(Swal);
        MySwal.fire({
          title: "Failed to submit the test!",
          text: "Please try again later.",
          icon: "error",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      {start ? (
        <Container>
          <form onSubmit={handleSubmit}>
            <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
              Diabetes Test
            </h2>
            <hr className="mt-2 mb-6" />
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="flex flex-col w-full gap-4">
                <InputForm
                  name="Email"
                  title="Email Address"
                  onChange={handleChange}
                  description="We need your email address for sending the test result only."
                  required
                  disabled={loading}
                  type="email"
                  error={error["Email"]?.join(", ")}
                />
                <SelectForm
                  title="What is your sex?"
                  onChange={handleChange}
                  name="Sex"
                  required
                  disabled={loading}
                  options={[
                    { title: "Female", value: 0.0 },
                    { title: "Male", value: 1.0 },
                  ]}
                  error={error["Sex"]?.join(", ")}
                />
                <SelectForm
                  title="What is your age category?"
                  onChange={handleChange}
                  name="Age"
                  required
                  disabled={loading}
                  error={error["Age"]?.join(", ")}
                  options={[
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
                  ]}
                />
                <SelectForm
                  title="Diagnosed with high blood pressure"
                  onChange={handleChange}
                  name="HighBP"
                  required
                  disabled={loading}
                  options={[
                    { title: "No high BP", value: 0 },
                    { title: "High BP", value: 1 },
                  ]}
                  error={error["HighBP"]?.join(", ")}
                />
                <SelectForm
                  title="Diagnosed with high cholesterol"
                  onChange={handleChange}
                  name="HighChol"
                  required
                  disabled={loading}
                  options={[
                    { title: "No high cholesterol", value: 0 },
                    { title: "High cholesterol", value: 1 },
                  ]}
                  error={error["HighChol"]?.join(", ")}
                />
                <SelectForm
                  title="Did a cholesterol check in the last 5 years"
                  onChange={handleChange}
                  name="CholCheck"
                  required
                  disabled={loading}
                  options={[
                    { title: "No", value: 0 },
                    { title: "Yes", value: 1 },
                  ]}
                  error={error["CholCheck"]?.join(", ")}
                />
                <InputForm
                  name="BMI"
                  title="What is your Body Mass Index (BMI)?"
                  onChange={handleChange}
                  description="BMI = Weight(Kg) / Height(m)"
                  type="number"
                  error={error["BMI"]?.join(", ")}
                />
                <SelectForm
                  title="Have you smoked at least 100 cigarettes in your entire life? (Note: 5 packs = 100 cigarettes)"
                  onChange={handleChange}
                  name="Smoker"
                  required
                  disabled={loading}
                  options={[
                    { title: "No", value: 0 },
                    { title: "Yes", value: 1 },
                  ]}
                  error={error["Smoker"]?.join(", ")}
                />
                <SelectForm
                  title="Have you ever had a stroke?"
                  onChange={handleChange}
                  name="Stroke"
                  required
                  disabled={loading}
                  options={[
                    { title: "No", value: 0 },
                    { title: "Yes", value: 1 },
                  ]}
                  error={error["Stroke"]?.join(", ")}
                />
                <SelectForm
                  title="Have you ever been told you had coronary heart disease (CHD) or myocardial infarction (MI)?"
                  onChange={handleChange}
                  name="HeartDiseaseorAttack"
                  required
                  disabled={loading}
                  options={[
                    { title: "No", value: 0 },
                    { title: "Yes", value: 1 },
                  ]}
                  error={error["HeartDiseaseorAttack"]?.join(", ")}
                />
                <SelectForm
                  title="Have you participated in any physical activity in the past 30 days?"
                  onChange={handleChange}
                  name="PhysActivity"
                  required
                  disabled={loading}
                  options={[
                    { title: "No", value: 0 },
                    { title: "Yes", value: 1 },
                  ]}
                  error={error["PhysActivity"]?.join(", ")}
                />
              </div>
              <div className="flex flex-col w-full  gap-4">
                <SelectForm
                  title="Do you consume fruit 1 or more times per day?"
                  onChange={handleChange}
                  name="Fruits"
                  required
                  disabled={loading}
                  options={[
                    { title: "No", value: 0 },
                    { title: "Yes", value: 1 },
                  ]}
                  error={error["Fruits"]?.join(", ")}
                />
                <SelectForm
                  title="Do you consume vegetables 1 or more times per day?"
                  onChange={handleChange}
                  name="Veggies"
                  required
                  disabled={loading}
                  options={[
                    { title: "No", value: 0 },
                    { title: "Yes", value: 1 },
                  ]}
                  error={error["Veggies"]?.join(", ")}
                />
                <SelectForm
                  title="Are you a heavy drinker? (Adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)"
                  onChange={handleChange}
                  name="HvyAlcoholConsump"
                  required
                  disabled={loading}
                  options={[
                    { title: "No", value: 0 },
                    { title: "Yes", value: 1 },
                  ]}
                  error={error["HvyAlcoholConsump"]?.join(", ")}
                />
                <SelectForm
                  title="Do you have any kind of health care coverage, including health insurance, prepaid plans such as HMO, etc.?"
                  onChange={handleChange}
                  name="AnyHealthcare"
                  required
                  disabled={loading}
                  options={[
                    { title: "No", value: 0 },
                    { title: "Yes", value: 1 },
                  ]}
                  error={error["AnyHealthcare"]?.join(", ")}
                />
                <SelectForm
                  title="Was there a time in the past 12 months when you needed to see a doctor but couldn't because of cost?"
                  onChange={handleChange}
                  name="NoDocbcCost"
                  required
                  disabled={loading}
                  options={[
                    { title: "No", value: 0 },
                    { title: "Yes", value: 1 },
                  ]}
                  error={error["NoDocbcCost"]?.join(", ")}
                />
                <SelectForm
                  title="In general, would you say that your health is:"
                  onChange={handleChange}
                  name="GenHlth"
                  required
                  disabled={loading}
                  options={[
                    { title: "Excellent", value: 1 },
                    { title: "Very good", value: 2 },
                    { title: "Good", value: 3 },
                    { title: "Fair", value: 4 },
                    { title: "Poor", value: 5 },
                  ]}
                  error={error["GenHlth"]?.join(", ")}
                />
                <InputForm
                  title="Thinking about your mental health, which includes stress, depression, and problems with emotions, for how many days during the past 30 days was your mental health not good?"
                  onChange={handleChange}
                  name="MentHlth"
                  type="number"
                  required
                  disabled={loading}
                  error={error["MentHlth"]?.join(", ")}
                />
                <InputForm
                  title="Thinking about your physical health, which includes physical illness and injury, for how many days during the past 30 days was your physical health not good?"
                  onChange={handleChange}
                  name="PhysHlth"
                  type="number"
                  required
                  disabled={loading}
                  error={error["PhysHlth"]?.join(", ")}
                />
                <SelectForm
                  title="Do you have serious difficulty walking or climbing stairs?"
                  onChange={handleChange}
                  name="DiffWalk"
                  required
                  disabled={loading}
                  options={[
                    { title: "No", value: 0 },
                    { title: "Yes", value: 1 },
                  ]}
                  error={error["DiffWalk"]?.join(", ")}
                />
                <Button
                  type="submit"
                  className="bg-indigo-600 text-white rounded py-2"
                  disabled={loading}
                >
                  {loading ? (
                    <ArrowPathIcon className="animate-spin h-6 w-6 mx-auto" />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Container>
      ) : (
        <div className="flex flex-col items-center">
          <SectionTitle
            pretitle="Are you concerned about diabetes?"
            title="Find out if you're at risk with our quick and easy test!"
          >
            Taking just a few minutes to complete, our diabetes risk test helps
            you understand your current health status. Follow these simple steps
            to take control of your health.
          </SectionTitle>
          <button
            className="px-6 py-2 text-white bg-indigo-600 rounded-md"
            onClick={() => setStart(true)}
          >
            Start the test
          </button>
          <Benefits
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
          />
        </div>
      )}
      <Footer />
    </>
  );
}

export default TestPage;
