import Benefits from "@/components/benefits";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import SectionTitle from "@/components/section-title";
import Cta from "@/components/cta";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import { useTranslations } from "next-intl";
import {
  BellAlertIcon,
  DocumentCheckIcon,
  ExclamationCircleIcon,
  EyeIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/solid";
import { Metadata } from "next";

export default function Home() {
  const t = useTranslations("index");

  return (
    <>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle={t("diabetes.pretitle")}
        title={t("diabetes.title")}
      >
        {t("diabetes.subtitle")}
      </SectionTitle>

      <Benefits
        title={t("benefit-1.title")}
        imgPos="left"
        image="/img/benefit-1.svg"
        bullets={[
          {
            title: t("benefit-1.children.one.title"),
            desc: t("benefit-1.children.one.description"),
            icon: <HandRaisedIcon />,
          },
          {
            title: t("benefit-1.children.two.title"),
            desc: t("benefit-1.children.two.description"),
            icon: <DocumentCheckIcon />,
          },
          {
            title: t("benefit-1.children.three.title"),
            desc: t("benefit-1.children.three.description"),
            icon: <FaceSmileIcon />,
          },
        ]}
      />
      <Benefits
        title={t("benefit-2.title")}
        imgPos="right"
        image="/img/benefit-2.svg"
        bullets={[
          {
            title: t("benefit-2.children.one.title"),
            desc: t("benefit-2.children.one.description"),
            icon: <FireIcon />,
          },
          {
            title: t("benefit-2.children.two.title"),
            desc: t("benefit-2.children.two.description"),
            icon: <FaceFrownIcon />,
          },
          {
            title: t("benefit-2.children.three.title"),
            desc: t("benefit-2.children.three.description"),
            icon: <EyeIcon />,
          },
        ]}
      />
      <Benefits
        title={t("benefit-3.title")}
        imgPos="right"
        image="/img/benefit-3.svg"
        bullets={[
          {
            title: t("benefit-3.children.one.title"),
            desc: t("benefit-3.children.one.description"),
            icon: <FaceSmileIcon />,
          },
          {
            title: t("benefit-3.children.two.title"),
            desc: t("benefit-3.children.two.description"),
            icon: <BellAlertIcon />,
          },
          {
            title: t("benefit-3.children.three.title"),
            desc: t("benefit-3.children.three.description"),
            icon: <ExclamationCircleIcon />,
          },
        ]}
      />

      <SectionTitle pretitle={t("faq.pretitle")} title={t("faq.title")}>
        {t("faq.subtitle")}
      </SectionTitle>
      <Faq />

      <Cta />

      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Home",
  description: "Your On-The-Go Diabetes Risk Test App",
};
