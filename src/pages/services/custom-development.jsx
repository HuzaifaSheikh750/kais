import Head from "next/head";
import { useEffect, useRef } from "react";

import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/development/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import DesignStudioAbout from "@/components/about/DesignStudioAbout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Team1 from "@/components/team/Team1";
import TeamCounter from "@/components/counter/TeamCounter";

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
          {/* <Team1 /> */}

          <section className="service__area-3 pb-150">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="sec-title-wrapper pt-130 text-anim">
                    {/* <h2 className="sec-sub-title title-anim">Services</h2> */}
                    <h3 className="sec-title title-anim">
                      Custom Development <br />
                    </h3>
                    <h4>
                      Extend the functionality of your business applications
                      with custom <br />
                      development services to further improve the ROI
                    </h4>
                    <p>
                      The decision to upgrade your current application version
                      can be a difficult choice. KAISPE can help you leverage
                      the upgrade benefits. We can show you how upgrades deliver
                      improved functionality and other important features that
                      you shouldn’t ignore, at least not long term.
                    </p>
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
                  <div
                    className=""
                    style={{
                      fontSize: "18px",
                      fontFamily: "kanit, sans-serif",
                    }}
                  >
                    <p>
                      KAISPE has a unique skill set to customize complex
                      business applications for its customers, ISVs, and
                      partners. For the last 10 years, we have been working
                      closely with our partners across the globe to deliver
                      custom development services. Our offshore office has a
                      highly experienced team of software engineers, software
                      test engineers, technical consultants, and solution
                      architects working round the clock to serve customers in
                      various geographical locations.
                    </p><br/>
                    <p>
                      For enterprise applications like Microsoft Dynamics AX,
                      Dynamics 365 Finance and Operations, Dynamics 365 Business
                      Central, and Dynamics 365 Customer Engagement apps, we
                      have specialized engineers and consultants for different
                      custom development areas like report development, UI/UX,
                      POS customization, business logic development, etc. We
                      have highly experienced resources experts in
                      cross-industry, cross-module areas of these business apps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*           
          <section className="development__area">
            <div className="container g-0 line pt-100 pb-150">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <div className="sec-title-wrapper">
                    <h2
                      className="sec-title animation__char_come"
                      ref={charAnim}
                    >
                      Why Choose KAISPE
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
                        Extend the functionality of your business applications
                        with custom development services to further improve the
                        ROI
                      </h4>
                      <p>
                        The decision to upgrade your current application version
                        can be a difficult choice. KAISPE can help you leverage
                        the upgrade benefits. We can show you how upgrades
                        deliver improved functionality and other important
                        features that you shouldn’t ignore, at least not long
                        term.
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
                      KAISPE has a unique skill set to customize complex
                      business applications for its customers, ISVs, and
                      partners. For the last 10 years, we have been working
                      closely with our partners across the globe to deliver
                      custom development services. Our offshore office has a
                      highly experienced team of software engineers, software
                      test engineers, technical consultants, and solution
                      architects working round the clock to serve customers in
                      various geographical locations.
                    </p>
                    <p>
                      For enterprise applications like Microsoft Dynamics AX,
                      Dynamics 365 Finance and Operations, Dynamics 365 Business
                      Central, and Dynamics 365 Customer Engagement apps, we
                      have specialized engineers and consultants for different
                      custom development areas like report development, UI/UX,
                      POS customization, business logic development, etc. We
                      have highly experienced resources experts in
                      cross-industry, cross-module areas of these business apps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* 
          <div className="portfolio__detail-content cta__area cta__area-7">
            <div className="container g-0  pt-100">
              <span className="line-3"></span>

              <div className="block-content">
                <div className="row">
                  <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                    <h2 className="portfolio__detail-title title-anim" style={{color:"white"}}>
                      A 5-Step Guide to ERP Implementation
                    </h2>
                  </div>

                  <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                    <div className="portfolio__detail-text">
                      <p>
                        Enterprise resource planning (ERP) implementation is a
                        complicated process that requires careful planning and
                        strategy.
                      </p>
                      <div className="btn_wrapper">
                        <Link
                          href="/contact"
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
            </div>
          </div> */}

          <DesignStudioAbout />

          {/* <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1 pb-100">
            <div className="blog__detail-content">
              <h2 style={{ textAlign: "center" }}>
                Our Custom Development Approach
              </h2>
              <p style={{ textAlign: "center" }}>
                Having completed projects with thousands of man hours of effort
                required, we have devised a specialized approach to complete
                custom development for different technology platforms.
              </p>

              <div className="col-xxl-12">
              <div className="">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={Detail3}
                  alt="Blog Thumbnail"
                />
              </div>
            </div>
            </div>
          </div> */}

          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
