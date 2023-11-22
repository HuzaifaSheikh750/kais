import Head from "next/head";
import { useEffect, useRef } from "react";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Link from "next/link";
import Image from "next/image";
import SolutionHero from "@/components/hero/SolutionHero";
import DigitalMarketingAbout from "@/components/about/DigitalMarketingAbout";
import animationCharCome from "@/lib/utils/animationCharCome";
import StartupAgencyTestimonial from "@/components/testimonial/StartupAgencyTestimonial";
import StartupAgencyCTA from "@/components/cta/StartupAgencyCTA";
import DesignStudioProtfolio from "@/components/portfolio/DesignStudioProtfolio";
import StartupAgencyFaq from "@/components/faq/StartupAgencyFaq";

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
          <SolutionHero />

          <DigitalMarketingAbout />

          <footer className="footer__area-2 pt-100">
            <div className="container">
              <div className="footer__top-2 text-anim">
                <div className="row">
                  <div className="col-xxl-12">
                    <h2
                      className="sec-title-33 title-anim"
                      style={{ marginBottom: "10px", fontSize: "50px" }}
                    >
                      Improve your Financial Statement by Upgrading to Microsoft
                      Dynamics 365 F&O
                    </h2>
                    <p
                      className="footer__sub-title"
                      style={{ fontSize: "20px" }}
                    >
                      Mainstream support for Dynamics AX 2012 has ended now.
                      This means many organizations are planning to upgrade to
                      Microsoft Dynamics 365.
                    </p>

                    <div className="btn_wrapper" style={{ textAlign: "start" }}>
                      <Link
                        href="https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/migration-upgrade/upgrade-overview-2012"
                        target="_blank"
                        className="wc-btn-secondary btn-hover btn-item"
                      >
                        <span></span>Learn More{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <StartupAgencyCTA />

          <StartupAgencyTestimonial />

          {/* <StartupAgencyFaq /> */}
          <StartupAgencyFaq />

          <DesignStudioProtfolio />

          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
