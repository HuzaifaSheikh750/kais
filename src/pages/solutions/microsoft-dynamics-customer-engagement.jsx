import Head from "next/head";
import { useEffect, useRef } from "react";

import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import CustomerEngagementHero from "@/components/hero/CustomerEngagementHero";
import CustomerENgagementAbout from "@/components/about/CustomerEngagementAbout";
import DigitalAgencyService from "@/components/service/DigitalAgencyService";
import CreativeAgencyService from "@/components/service/CreativeAgencyService";
import ServiceElementV6 from "@/components/service/ServiceElementV6";
import DigitalMarketingPrice from "@/components/price/DigitalMarketingPrice";

import Link from "next/link";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

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
        <RootLayout header="header3" footer="footer3">

        <CustomerEngagementHero />

        {/* <DigitalMarketingPrice /> */}

        <ServiceElementV6 />
    
        <CustomerENgagementAbout />

        <DigitalAgencyService />

        <CreativeAgencyService />



          {/* <footer className="footer__area-2 pt-130">
            <div className="container">
              <div className="footer__top-2 text-anim">
                <div className="row">
                  <div className="col-xxl-12">
                    <h2
                      className="sec-title-33 title-anim"
                      style={{ marginBottom: "10px" }}
                    >
                      Support
                    </h2>
                    <p
                      className="footer__sub-title"
                      style={{ fontSize: "20px" }}
                    >
                      We have the resources at your fingertips when you need
                      them. You can also stay up to date, either way, leveling
                      up is just one click away.
                    </p>
                    <p
                      className="footer__sub-title"
                      style={{ fontSize: "20px" }}
                    >
                      Our KAISPE support team is ready to calculate the cost
                      according to the software and its underlying
                      infrastructure, the extent of support and maintenance
                      required, and the preferred pricing model.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer> */}


          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
