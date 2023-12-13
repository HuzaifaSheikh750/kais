
import RootLayout from "@/components/common/layout/RootLayout";
import CompanyHero from "@/components/hero/CompanyHero";
import ProfessionalAbout from "@/components/about/ProfessionalAbout";
import ProfessionlBanner from "@/components/cta/ProfessionlBanner"; 
import ProfessionalContent from "@/components/brand/ProfessionalContent";
import CompanyAbout from "@/components/about/CompanyAbout";
import CompanyStudioServices from "@/components/service/CompanyStudioServices";
import CompanyInsight from "@/components/feature/CompanyInsight";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";


import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Professional Services Complete Guide & Solutions | KAISPE</title>
        <meta name="description" content="About Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header4" footer="footer3">
        <CompanyHero />
        <CompanyStudioServices />
        <CompanyAbout />
        <ProfessionalAbout />
        <CompanyInsight />
        <DigitalAgencyCTA />

        {/* <ProfessionlBanner />
        <ProfessionalContent /> */}

        </RootLayout>
      </main>
    </div>
  );
};

export default About;
