import Head from "next/head";
import { useEffect, useRef } from "react";

import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/development/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import ServiceElementV3 from "@/components/service/ServiceElementV3";
import ServiceElementV5 from "@/components/service/ServiceElementV5";
import ThumbDev1 from "../../../public/assets/imgs/thumb/dev-1.jpg";
import ThumbDev2 from "../../../public/assets/imgs/thumb/dev-2.jpg";
import Detail1 from "../../../public/assets/imgs/portfolio/detail/1.jpg";
import Detail2 from "../../../public/assets/imgs/portfolio/detail/2.jpg";
import Detail3 from "../../../public/assets/imgs/portfolio/detail/3.jpg";
import Detail4 from "../../../public/assets/imgs/portfolio/detail/4.jpg";
import Detail5 from "../../../public/assets/imgs/portfolio/detail/5.jpg";
import Detail6 from "../../../public/assets/imgs/portfolio/detail/6.jpg";
import Detail7 from "../../../public/assets/imgs/portfolio/detail/7.jpg";
import DetailShape from "../../../public/assets/imgs/portfolio/detail/shape.png";


import Link from "next/link";
import Image from "next/image";
import ServiceV6Hero from "@/components/hero/ServiceV6Hero";

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

        <ServiceV6Hero />

          {/* <section className="development__area">
            <div className="container g-0 line pt-130 pb-150">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <div className="sec-title-wrapper">
                    <h2
                      className="sec-title animation__char_come"
                      ref={charAnim}
                    >
                      Mobile/Web App Development
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
                         Expand your business horizon with custom built mobile and web apps
                      </h4>
                      <p>
                      With more than a decade-long experience, we help customers design and build high quality modern digital apps, enabling seamless user experiences across all modern platforms and devices.
                      </p>
                      {/* <p>
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
          </section> */}

          {/* <section className="workflow__area-6">
            <div className="container g-0 line pb-130">
              <div className="line-3"></div>
              <div className="workflow__wrapper-6">
                <div className="row">
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                    <div className="workflow__slide-6">
                      <h6 className="workflow__title-6">
                        Technology Experts <br />
                      </h6>
                      <p>
                        Modern and unique design practically point of view, it
                        risks not meeting the huge expectations
                      </p>
                    </div>
                  </div>

                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                    <div className="workflow__slide-6">
                      <h6 className="workflow__title-6">On Time Delivery</h6>
                      <p>
                        Modern and unique design practically point of view, it
                        risks not meeting the huge expectations
                      </p>
                    </div>
                  </div>

                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                    <div className="workflow__slide-6">
                      <h6 className="workflow__title-6">
                        Excellence In Quality
                        <br />
                      </h6>
                      <p>
                        Modern and unique design practically point of view, it
                        risks not meeting the huge expectations
                      </p>
                    </div>
                  </div>

                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                    <div className="workflow__slide-6">
                      <h6 className="workflow__title-6">
                        User experience <br />
                        Testing
                      </h6>
                      <p>
                        Modern and unique design practically point of view, it
                        risks not meeting the huge expectations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

<div className="portfolio__detail-content">
          <div className="container g-0 line pt-140">
            <span className="line-3"></span>

            <div className="block-content">
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2 className="portfolio__detail-title title-anim">
                  Why Choose KAISPE
                  </h2>
                </div>

                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="portfolio__detail-text">
                    <p>Our Mobile and Web app development services are purposely designed to address your specific business requirements. Our team of experts cover the entire application life cycle management, including business requirements gathering, UX/UI design and development of your application from idea to launch, integrating the app into your cloud or on-premises infrastructure and providing further optimization and scale-up on demand.</p>
                    <p>Leveraging our experience serving multiple vertical industries including Retail, Health Care, Construction, Distribution and Manufacturing, we have developed apps that help digitizing your business and improve the ROI. KAISPE assist customers in specific development stages as well as to provide full-scale app implementation. Our app development services include:</p>
                    <ul>
                      <li>+ Brand Development</li>
                      <li>+ UX/UI Design</li>
                      <li>+ Front-end Development</li>
                      <li>+ Copywriting</li>
                      <li>+ Shopify Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


          {/* <section className="service__detail">
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
                    Our Mobile and Web app development services are purposely designed to address your specific business requirements. Our team of experts cover the entire application life cycle management, including business requirements gathering, UX/UI design and development of your application from idea to launch, integrating the app into your cloud or on-premises infrastructure and providing further optimization and scale-up on demand.
                    </p>
                    <p>
                    Leveraging our experience serving multiple vertical industries including Retail, Health Care, Construction, Distribution and Manufacturing, we have developed apps that help digitizing your business and improve the ROI. KAISPE assist customers in specific development stages as well as to provide full-scale app implementation. Our app development services include:
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* <ServiceElementV3/> */}
          <ServiceElementV5/>

          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;

