import Head from "next/head";
import { useEffect, useRef } from "react";

import RootLayout from "@/components/common/layout/RootLayout";
import PowerPlatformHero from "@/components/hero/PowerPlatformHero";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import PowerPlatformSolution from "@/components/solution/PowerPlatformSolution";
import Link from "next/link";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";
import PortfolioDetails1 from "@/components/portfolio/PortfolioDetails1";
import ModernAgencySingleImage from "@/components/singleImage/ModernAgencySingleImage";
import DigitalMarketingService from "@/components/service/DigitalMarketingService";
import PowerPlatformFeatures from "@/components/feature/PowerPlatformFeatures";


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

        <PowerPlatformHero />

        <PowerPlatformSolution />

        <PortfolioDetails1 />

        <PowerPlatformFeatures />

        <DigitalMarketingService />

        <ModernAgencySingleImage />



{/* 
          <footer className="footer__area-2 pt-130">
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


          {/* <section className="service__detail">
            <div className="container g-0  pb-140">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-12">
                  <div className="sec-title-wrapper">
                    <h2 className="sec-title title-anim">Why Choose KAISPE</h2>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                  <div className="service__detail-circle">
                    <span></span>
                  </div>
                </div>
                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
                  <div
                    className=""
                    style={{
                      fontSize: "18px",
                      fontFamily: "kanit, sans-serif",
                    }}
                  >
                    <p>
                      Your success is a top priority for us, and we make sure
                      that our customers receive the maximum return on their
                      investment. We offer flexible support offerings ranging
                      from Basic to Advance, to Premium Customer Support. Each
                      offering provides specific service levels and
                      capabilities, from online case submission to phone
                      support, that helps maintain your software solution.
                    </p>
                    <br />
                    <p>
                      Please check below a typical set of flexible support
                      offerings available to you. To better suit your
                      requirements, we can also mix and match the options to
                      build a custom option for you:
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
