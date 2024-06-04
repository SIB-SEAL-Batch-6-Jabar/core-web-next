"use client";
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
import { TestMessage } from "../../../../global";
import { useTranslations } from "next-intl";

function StartTest() {
  const t = useTranslations("questions");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ [key: string]: string[] }>({});
  const [answer, setAnswer] = useState<{
    [key: string]: string | number | undefined;
  }>({});

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
    console.log(e.currentTarget.entrie);
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
    <Container className="bg-white rounded mt-2 xl:px-4">
      <form onSubmit={handleSubmit}>
        <h2 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
          Diabetes Test
        </h2>
        <hr className="mt-2 mb-6" />
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex flex-col w-full gap-4">
            <InputForm
              name="Email"
              title={t("Email.title")}
              onChange={handleChange}
              description={t("Email.description")}
              required
              disabled={loading}
              type="email"
              error={error["Email"]?.join(", ")}
            />
            <SelectForm
              title={t("Sex.title")}
              onChange={handleChange}
              name="Sex"
              required
              disabled={loading}
              options={[
                { title: t("Sex.options.female"), value: 0.0 },
                { title: t("Sex.options.male"), value: 1.0 },
              ]}
              error={error["Sex"]?.join(", ")}
            />
            <SelectForm
              title={t("Age.title")}
              onChange={handleChange}
              name="Age"
              required
              disabled={loading}
              error={error["Age"]?.join(", ")}
              options={[
                { title: t("Age.options.18-24"), value: 1 },
                { title: t("Age.options.25-29"), value: 2 },
                { title: t("Age.options.30-34"), value: 3 },
                { title: t("Age.options.35-39"), value: 4 },
                { title: t("Age.options.40-44"), value: 5 },
                { title: t("Age.options.45-49"), value: 6 },
                { title: t("Age.options.50-54"), value: 7 },
                { title: t("Age.options.55-59"), value: 8 },
                { title: t("Age.options.60-64"), value: 9 },
                { title: t("Age.options.65-69"), value: 10 },
                { title: t("Age.options.70-74"), value: 11 },
                { title: t("Age.options.75-79"), value: 12 },
                { title: t("Age.options.80orolder"), value: 13 },
              ]}
            />
            <SelectForm
              title={t("HighBP.title")}
              onChange={handleChange}
              name="HighBP"
              required
              disabled={loading}
              options={[
                { title: t("HighBP.options.nohighbp"), value: 0 },
                { title: t("HighBP.options.highbp"), value: 1 },
              ]}
              error={error["HighBP"]?.join(", ")}
            />
            <SelectForm
              title={t("HighChol.title")}
              onChange={handleChange}
              name="HighChol"
              required
              disabled={loading}
              options={[
                { title: t("HighChol.options.nohighcholesterol"), value: 0 },
                { title: t("HighChol.options.highcholesterol"), value: 1 },
              ]}
              error={error["HighChol"]?.join(", ")}
            />
            <SelectForm
              title={t("CholCheck.title")}
              onChange={handleChange}
              name="CholCheck"
              required
              disabled={loading}
              options={[
                { title: t("CholCheck.options.no"), value: 0 },
                { title: t("CholCheck.options.yes"), value: 1 },
              ]}
              error={error["CholCheck"]?.join(", ")}
            />
            <InputForm
              name="BMI"
              title={t("BMI.title")}
              onChange={handleChange}
              description={t("BMI.description")}
              type="number"
              error={error["BMI"]?.join(", ")}
            />
            <SelectForm
              title={t("Smoker.title")}
              onChange={handleChange}
              name="Smoker"
              required
              disabled={loading}
              options={[
                { title: t("Smoker.options.no"), value: 0 },
                { title: t("Smoker.options.yes"), value: 1 },
              ]}
              error={error["Smoker"]?.join(", ")}
            />
            <SelectForm
              title={t("Stroke.title")}
              onChange={handleChange}
              name="Stroke"
              required
              disabled={loading}
              options={[
                { title: t("Stroke.options.no"), value: 0 },
                { title: t("Stroke.options.yes"), value: 1 },
              ]}
              error={error["Stroke"]?.join(", ")}
            />
            <SelectForm
              title={t("HeartDiseaseorAttack.title")}
              onChange={handleChange}
              name="HeartDiseaseorAttack"
              required
              disabled={loading}
              options={[
                { title: t("HeartDiseaseorAttack.options.no"), value: 0 },
                { title: t("HeartDiseaseorAttack.options.yes"), value: 1 },
              ]}
              error={error["HeartDiseaseorAttack"]?.join(", ")}
            />
            <SelectForm
              title={t("PhysActivity.title")}
              onChange={handleChange}
              name="PhysActivity"
              required
              disabled={loading}
              options={[
                { title: t("PhysActivity.options.no"), value: 0 },
                { title: t("PhysActivity.options.yes"), value: 1 },
              ]}
              error={error["PhysActivity"]?.join(", ")}
            />
          </div>
          <div className="flex flex-col w-full  gap-4">
            <SelectForm
              title={t("Fruits.title")}
              onChange={handleChange}
              name="Fruits"
              required
              disabled={loading}
              options={[
                { title: t("Fruits.options.no"), value: 0 },
                { title: t("Fruits.options.yes"), value: 1 },
              ]}
              error={error["Fruits"]?.join(", ")}
            />
            <SelectForm
              title={t("Veggies.title")}
              onChange={handleChange}
              name="Veggies"
              required
              disabled={loading}
              options={[
                { title: t("Veggies.options.no"), value: 0 },
                { title: t("Veggies.options.yes"), value: 1 },
              ]}
              error={error["Veggies"]?.join(", ")}
            />
            <SelectForm
              title={t("HvyAlcoholConsump.title")}
              onChange={handleChange}
              name="HvyAlcoholConsump"
              required
              disabled={loading}
              options={[
                { title: t("HvyAlcoholConsump.options.no"), value: 0 },
                { title: t("HvyAlcoholConsump.options.yes"), value: 1 },
              ]}
              error={error["HvyAlcoholConsump"]?.join(", ")}
            />
            <SelectForm
              title={t("AnyHealthcare.title")}
              onChange={handleChange}
              name="AnyHealthcare"
              required
              disabled={loading}
              options={[
                { title: t("AnyHealthcare.options.no"), value: 0 },
                { title: t("AnyHealthcare.options.yes"), value: 1 },
              ]}
              error={error["AnyHealthcare"]?.join(", ")}
            />
            <SelectForm
              title={t("NoDocbcCost.title")}
              onChange={handleChange}
              name="NoDocbcCost"
              required
              disabled={loading}
              options={[
                { title: t("NoDocbcCost.options.no"), value: 0 },
                { title: t("NoDocbcCost.options.yes"), value: 1 },
              ]}
              error={error["NoDocbcCost"]?.join(", ")}
            />
            <SelectForm
              title={t("GenHlth.title")}
              onChange={handleChange}
              name="GenHlth"
              required
              disabled={loading}
              options={[
                { title: t("GenHlth.options.excellent"), value: 1 },
                { title: t("GenHlth.options.verygood"), value: 2 },
                { title: t("GenHlth.options.good"), value: 3 },
                { title: t("GenHlth.options.fair"), value: 4 },
                { title: t("GenHlth.options.poor"), value: 5 },
              ]}
              error={error["GenHlth"]?.join(", ")}
            />
            <InputForm
              title={t("MentHlth.title")}
              onChange={handleChange}
              name="MentHlth"
              type="number"
              required
              disabled={loading}
              error={error["MentHlth"]?.join(", ")}
            />
            <InputForm
              title={t("PhysHlth.title")}
              onChange={handleChange}
              name="PhysHlth"
              type="number"
              required
              disabled={loading}
              error={error["PhysHlth"]?.join(", ")}
            />
            <SelectForm
              title={t("DiffWalk.title")}
              onChange={handleChange}
              name="DiffWalk"
              required
              disabled={loading}
              options={[
                { title: t("DiffWalk.options.no"), value: 0 },
                { title: t("DiffWalk.options.yes"), value: 1 },
              ]}
              error={error["DiffWalk"]?.join(", ")}
            />
            <Button
              type="submit"
              className="bg-indigo-600 text-white rounded py-2"
              disabled={loading}
            >
              {loading ? (
                <ArrowPathIcon className="h-5 w-5 mx-auto animate-reverse-spin" />
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default StartTest;
