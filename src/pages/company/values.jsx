
import RootLayout from "@/components/common/layout/RootLayout";
import ValueHero from "@/components/hero/ValueHero";
import ProfessionalAbout from "@/components/about/ProfessionalAbout";
import ProfessionlBanner from "@/components/cta/ProfessionlBanner"; 
import ProfessionalContent from "@/components/brand/ProfessionalContent";
import TeamDetails1 from "@/components/team/TeamDetails1";
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
        <ValueHero />
        <TeamDetails1 />
        <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
