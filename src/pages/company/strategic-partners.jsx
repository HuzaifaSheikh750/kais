
import RootLayout from "@/components/common/layout/RootLayout";
import PartnerHero from "@/components/hero/PartnerHero";
import Partners from "@/components/brand//Partners";
import PartnerFeaures from "@/components/feature/PartnerFeaures";
import PartnerCTA from "@/components/cta/PartnerCTA"; 

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
        <PartnerHero />
        <PartnerFeaures />
        <Partners />
        <PartnerCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
