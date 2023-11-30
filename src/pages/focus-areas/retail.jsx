
import RootLayout from "@/components/common/layout/RootLayout";
import RetailAgencyContent from "@/components/brand/RetailAgencyContent";       
import RetailMain from "@/components/portfolio/RetailHero";
import RetailAgency from "@/components/brand/RetailAgency";
import RetailBanner from "@/components/cta/RetailBanner";
import Retail from "@/components/cta/RetailAgency"; 


import Head from "next/head";

const Manufacturing = () => {
  return (
    <div>
      <Head>
        <title>Retail Solutions Data Analytics & E-Commerce Tools | KAISPE</title>
        <meta name="description" content="About Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header4" footer="footer3">
          <RetailMain />
          <RetailAgency />
          <RetailBanner />
          <RetailAgencyContent />
          <Retail />
        </RootLayout>
      </main>
    </div>
  );
};

export default Manufacturing;
