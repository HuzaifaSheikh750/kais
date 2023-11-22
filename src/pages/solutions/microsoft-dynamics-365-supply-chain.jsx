import Head from "next/head";
import { useEffect, useRef } from "react";

import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import DigitalAgencyWorkflow from "@/components/workflow/DigitalAgencyWorkflow";
import Link from "next/link";
import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import DigitalMarketingAbout from "@/components/about/DigitalMarketingAbout";
import CreativeAgencyTeam from "@/components/team/CreativeAgencyTeam";
import DesignStudioHero from "@/components/hero/DesignStudioHero";
import StartupAgencyFaq from "@/components/faq/ServiceDetailsFaq";

const ServiceDetails = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  const wordAnim = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
  }, []);

  return (
    <>
      <Head>
        <title>Service Details</title>
        <meta name="description" content="Service Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <DesignStudioHero />
          <section className="hero__about">
            <div className="container g-0 line">
              <span className="line-3"></span>
              <div className="row">
                <div className="col-xxl-12">
                  <div className="hero__about-content">
                    <h1
                      className="hero-title animation__word_come"
                      ref={wordAnim}
                    >
                      Microsoft Dynamics 365 Supply Chain Management
                    </h1>
                    <div className="hero__about-info">
                      <div className="hero__about-btn">
                        <div className="btn_wrapper">
                          <Link
                            href="/service"
                            className="wc-btn-primary btn-hover btn-item"
                          >
                            <span></span> Trends & <br />
                            technology
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="hero__about-text title-anim">
                        <p>
                          D365 Supply Chain Management is a powerful tool that
                          provides employees and organizations with a unified
                          view of every aspect of the supply chain, from
                          inventory and warehousing to manufacturing, service,
                          and logistics. With the help of predictive analytics,
                          the software turns vast amounts of data into valuable
                          insights that enable better strategic decisions. This
                          solution is up-to-date and can help businesses stay
                          competitive in an ever-evolving market.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <CreativeAgencyTeam />
          <StartupAgencyFaq />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
