import Head from "next/head";
import { useEffect, useRef } from "react";

import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/development/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import CareerBenefit from "@/components/benefit/CareerBenefit";

import Detail3 from "../../../public/assets/imgs/blog/detail/integration.jpg";
import ThumbDev1 from "../../../public/assets/imgs/thumb/dev-1.jpg";
import ThumbDev2 from "../../../public/assets/imgs/thumb/dev-2.jpg";
import Link from "next/link";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Brand1 from "../../../public/assets/imgs/brand/1.png";
import Brand2 from "../../../public/assets/imgs/brand/2.png";
import Brand3 from "../../../public/assets/imgs/brand/3.png";
import Brand4 from "../../../public/assets/imgs/brand/4.png";
import Brand5 from "../../../public/assets/imgs/brand/5.png";
import Brand6 from "../../../public/assets/imgs/brand/6.png";

gsap.registerPlugin(ScrollTrigger);

const ServiceDetails = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom");
          fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom", {
            scrollTrigger: {
              trigger: ".fade_bottom",
              start: "top center+=300",
              markers: false,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });
        }
      });
      return () => tHero.revert();
    }
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
                      Integration
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
                        Seamlessly integrate applications, data and process for
                        your business to streamline operations
                      </h4>
                      <p>
                        With businesses moving toward digitization, KAISPE can
                        help your business connect legacy, modern, and complex
                        business applications more easily and quickly by
                        providing integrations using standard and custom
                        connectors.
                      </p>
                      {/* <p>
                    We like to be different, in the same way that every mission
                    is different. Every project is an opportunity to create
                    result that will help you
                  </p> */}
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
                      Our team of integration experts can assist you with
                      integration design and deployment as well as to transfer
                      core integration skills to you and your team. Even, if you
                      have already started an enterprise integration project and
                      would like our oversight and review, feel free to reach
                      out to us.
                    </p>
                    <p>
                      As experts in eCommerce integration, we specialize in
                      developing custom integrations that connect your
                      storefront like Shopify, BigCommerce, Magento and
                      SquareSpace with all other systems and applications. From
                      ERP and CRM systems to marketplaces, shipment providers,
                      and other third-party applications, we offer both custom
                      integrations as well as out-of-the-box integration
                      solutions for any and all applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <div className="portfolio__detail-content">
            <div className="container g-0 line pt-100">
              <span className="line-3"></span>

              <div className="block-content">
                <div className="row">
                  <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                    <h2 className="portfolio__detail-title title-anim">
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

          {/* <section className="brand__area">
            <div className="container g-0 line pt-100 pb-130">
              <span className="line-3"></span>
              <div className="row">
                <div
                  className="col-xxl-6 "
                  style={{ textAlign: "center", margin: "auto" }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      marginBottom: "40px",
                      fontFamily: "kanit, sans-serif",
                    }}
                  >
                    For Microsoft applications integration, we consume several
                    different integration patterns based on your specific
                    requirements:
                  </p>
                </div>

                <div className="col-xxl-12">
                  <div className="brand__list">
                    <div className="brand__item fade_bottom">
                      <h4 style={{ marginTop: "20px" }}>
                        Power Platform Integration
                      </h4>
                    </div>
                    <div className="brand__item fade_bottom">
                      <h4 style={{ marginTop: "20px" }}>Azure Logic Apps</h4>
                    </div>
                    <div className="brand__item fade_bottom">
                      <h4 style={{ marginTop: "20px" }}>Custom Service</h4>
                    </div>
                    <div className="brand__item fade_bottom">
                      <h4 style={{ marginTop: "20px" }}>Excel Integration</h4>
                    </div>
                    <div className="brand__item fade_bottom">
                      <h4 style={{ marginTop: "40px" }}>OData</h4>
                    </div>
                    <div className="brand__item fade_bottom">
                      <h4>Consume External Web Services</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <CareerBenefit />


          <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1 pb-100">
            <div className="blog__detail-content">
              <div className="col-xxl-12" style={{ textAlign: "center" }}>
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
          </div>

          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
