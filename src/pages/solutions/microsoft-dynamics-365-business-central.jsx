import Head from "next/head";
import { useEffect, useRef } from "react";

import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import BusinessCentralHero from "@/components/hero/BusinessCentralHero";
import Link from "next/link";
import Image from "next/image";
import ServiceElementV3 from "@/components/service/ServiceElementV3";
import animationCharCome from "@/lib/utils/animationCharCome";
import StartupAgencySolution from "@/components/solution/StartupAgencySolution";
import BsinessCentralFeatures from "@/components/feature/BsinessCentralFeatures";
import StartupAgencyFeature from "@/components/feature/StartupAgencyFeature";


const ServiceDetails = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);

  const menuAnim = useRef();
  useEffect(() => {
    if (menuAnim.current) {
      menuAnimation();
    }
  }, []);
  const menuAnimation = () => {
    let rootParent = menuAnim.current.children;
    for (let i = 0; i < rootParent.length; i++) {
      let firstParent = rootParent[i].children;
      let arr = firstParent[0].textContent.split("");
      let spanData = "";
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] == " ") {
          spanData += `<span style='width:6px;'>${arr[j]}</span>`;
        } else {
          spanData += `<span>${arr[j]}</span>`;
        }
      }
      let result = '<div class="menu-text">' + spanData + "</div>";
      firstParent[0].innerHTML = result;
    }
  };

  return (
    <>
      <Head>
        <title>Service Details</title>
        <meta name="description" content="Service Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer3">

        <BusinessCentralHero />

        <StartupAgencySolution />

        <ServiceElementV3 />

        <BsinessCentralFeatures />
        {/* <CreativeAgencyAward /> */}
        <StartupAgencyFeature />



          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
