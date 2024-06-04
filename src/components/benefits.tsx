import Image, { StaticImageData } from "next/image";
import React from "react";
import Container from "./container";

export interface BenefitsProps {
  title: string;
  image: string;
  desc?: string;
  imgPos: "left" | "right";
  bullets: {
    title: string;
    desc: string;
    icon: React.ReactElement;
  }[];
}

const Benefits = ({ title, image, desc, imgPos, bullets }: BenefitsProps) => {
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            <Image
              src={image}
              alt="Benefits"
              width="0"
              height="0"
              className={"object-cover w-[512px] h-auto"}
              placeholder="blur"
              blurDataURL={image}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl ">
                {title}
              </h3>
              {desc && (
                <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl ">
                  {desc}
                </p>
              )}
            </div>

            <div className="w-full mt-5">
              {bullets?.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

function Benefit(props: {
  icon: React.ReactElement;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 ">{props.title}</h4>
          <p className="mt-1 text-gray-500 ">{props.children}</p>
        </div>
      </div>
    </>
  );
}

export default Benefits;
