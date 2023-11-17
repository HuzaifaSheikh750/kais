import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceHero from "@/components/hero/ServiceHero";
import Service1 from "@/components/service/Service1";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyHero from "@/components/hero/DigitalAgencyHero";
import DesignStudioHero from "@/components/hero/DesignStudioHero";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const Solutions = () => {
  return (
    <>
      <Head>
        <title>Service</title>
        <meta name="description" content="Service Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header2" footer="footer3">
        <DigitalAgencyHero />


          {/* <ServiceHero /> */}
          {/* <Service1 />
          <ServiceBrand /> */}
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Solutions;
