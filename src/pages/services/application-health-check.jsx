import Head from "next/head";
import { useEffect, useRef } from "react";

import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/development/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import StartupAgencyWorkflow from "@/components/workflow/StartupAgencyWorkflow";

import ThumbDev1 from "../../../public/assets/imgs/thumb/dev-1.jpg";
import ThumbDev2 from "../../../public/assets/imgs/thumb/dev-2.jpg";
import Link from "next/link";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

const ServiceDetails = () => {
  
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
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
          <section className="development__area">
            <div className="container g-0 line pt-130 pb-150">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <div className="sec-title-wrapper">
                    <h2
                      className="sec-title animation__char_come"
                      ref={charAnim}
                    >
                      Application Health Check
                    </h2>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="development__wrapper">
                    <div
                      className=""
                      style={{
                        paddingBottom: "45px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      <h4 style={{ marginBottom: "20px", marginTop: "20px" }}>
                        Optimize your on-premises business application
                        performance with KAISPE Health Check offering
                      </h4>
                      <p>
                        In-depth analysis of your existing environment and
                        generate a comprehensive report to identify the
                        performance bottlenecks along with recommendations on
                        how to resolve them.
                      </p>
                       <p>
                    We like to be different, in the same way that every mission
                    is different. Every project is an opportunity to create
                    result that will help you
                  </p> 
                    </div>
                    <ul style={{ paddingTop: "20px" }}>
                      <li>+ API Development</li>
                      <li>+ WordPress</li>
                      <li>+ Cloud Migration</li>
                      <li>+ Front End Development</li>
                      <li>+ JavaScript</li>
                      <li>+ Fluter Framework</li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                  <div className="development__img">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={ThumbDev1}
                      alt="Development Image"
                      data-speed="auto"
                    />
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                  <div className="development__img">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={ThumbDev2}
                      alt="Development Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          

          <section className="service__detail">
            <div className="container g-0 line pb-140">
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
                  <div className="service__detail-content">
                    <p>
                      The Microsoft Dynamics Health Check collects data from the
                      Microsoft Dynamics™ AX or CRM environment and its
                      dependencies that includes but is not limited to, SQL
                      Server, the Windows operating system, Dynamics AX/CRM
                      server and client configuration, the network
                      infrastructure and the physical hardware. The scope of the
                      Health Check is to help identify issues and suggest
                      resolution. Issue resolution or remediation of any
                      performance issues identified is outside the scope of the
                      Health Check.
                    </p>
                    <p>
                      The Microsoft Dynamics AX/CRM Health Check is a
                      point-in-time review of the customer’s environment. As
                      users are added, additional data is created, performance
                      data may change. It is recommended to review the
                      performance data on a regular interval. The
                      recommendations contained in this Health Check are
                      accurate for the time of data collection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <StartupAgencyWorkflow />


          <section className="cta__area cta__area-7 pt-130" style={{marginBottom:"60px", color:"grey"}}>
            <div className="container pb-110">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="cta__content">
                    <p
                      style={{
                        marginTop: "30px",
                        color: "grey",
                        fontSize: "20px",
                      }}
                    >
                      By taking this holistic approach, KAISPE team is better
                      equipped to provide detailed, accurate picture of the
                      Customer‘s environment than would be available by just
                      focusing on a single component.
                    </p>
                    <div className="btn_wrapper">
                      <Link
                        href="https://www.kaispe.com/wp-content/uploads/2022/05/Health-Check-for-Microsoft-Dynamics.pdf"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span>Learn More{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
