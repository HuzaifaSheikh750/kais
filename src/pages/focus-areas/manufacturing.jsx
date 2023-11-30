
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import ManufactureHero from "@/components/hero/ManufactureHero";
import CreativeAgencyCTA from "@/components/cta/CreativeAgencyCTA"; 
import ServiceDetailsService from "@/components/service/ServiceDetailsService";
import StartupAgencyCTA from "@/components/cta/StartupAgencyCTA";



import Head from "next/head";

const Manufacturing = () => {
  return (
    <div>
      <Head>
        <title>Manufacturing | KAISPE</title>
        <meta name="description" content="About Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header4" footer="footer3">
          <ManufactureHero />
          <CreativeAgencyCTA />
          <ServiceDetailsService />
          <StartupAgencyCTA />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default Manufacturing;
