
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import ManufactureHero from "@/components/hero/ManufactureHero";
import DistributionAgency from "@/components/cta/DistributionAgency"; 
import ServiceDetailsService from "@/components/service/ServiceDetailsService";
import DistributionService from "@/components/cta/DistributionService";
import DistributionServices from "@/components/service/DistributionServices";
import DigitalAgencyBrand from "@/components/brand/DigitalAgencyBrand";


import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Distribution Technology Solutions | KAISPE</title>
        <meta name="description" content="About Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header4" footer="footer3">
          <DistributionServices />
          <DistributionAgency />
          <DigitalAgencyBrand />
          <DistributionService />

        </RootLayout>
      </main>
    </div>
  );
};

export default About;
