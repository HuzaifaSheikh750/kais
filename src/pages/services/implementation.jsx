import Head from "next/head";
import { useEffect, useRef } from "react";

import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/development/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Detail3 from "../../../public/assets/imgs/blog/detail/erp.jpg";
import DetailShape from "../../../public/assets/imgs/portfolio/detail/shape.png";
import DigitalAgencyWorkflow from "@/components/workflow/DigitalAgencyWorkflow";

import ThumbDev1 from "../../../public/assets/imgs/thumb/dev-1.jpg";
import ThumbDev2 from "../../../public/assets/imgs/thumb/dev-2.jpg";
import Link from "next/link";
import Award from "../../../public/assets/imgs/about/award.png";
import Image from "next/image.js";
import AboutHero from "@/components/hero/AboutHero";
import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import Story1 from "../../../public/assets/imgs/story/1.jpg";
import Story2 from "../../../public/assets/imgs/story/2.jpg";
import Story3 from "../../../public/assets/imgs/story/3.jpg";
import Story4 from "../../../public/assets/imgs/story/4.jpg";

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
                      Implementation
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
                          {
                            "Successful organizations equip their people with the right technology to do more! As a leading expert in software technologies, KAISPE is helping out companies leverage the latest advancements to maximize their investments in technology."
                          }
                        </p>
                      </div>
                      {/* <div className="hero__about-award">
                    <Image
                      priority
                      width={126}
                      height={82}
                      src={Award}
                      alt="Best Studio Award"
                    />
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
                      Implementation
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
                      <p>
                        Successful organizations equip their people with the
                        right technology to do more! As a leading expert in
                        software technologies, KAISPE is helping out companies
                        leverage the latest advancements to maximize their
                        investments in technology.
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
          </section> */}
          <section className="story__area">
            <div className="container g-0 line pt-140">
              <span className="line-3"></span>
              <div className="sec-title-wrapper">
                {/* <div className="from-text">
              from <span>1990</span>
            </div> */}

                <div className="row">
                  <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                    {/* <h2 className="sec-sub-title title-anim">Digital Studio</h2> */}
                    <h3 className="sec-title title-anim">Why Choose KAISPE</h3>
                  </div>
                  <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                    <div className="story__text">
                      <p>
                        PE For more than 10 years, KAISPE has been a leading
                        Microsoft Partner to plan, implement, train, support,
                        and customize Microsoft and other technology solutions
                        in USA, South Asia, Africa and Gulf regions. We are
                        helping organizations implementing ERP, CRM, BI and
                        Process Automation solutions for a broad range of
                        industries including Retail, Distribution, Manufacturing
                        and Professional Services.
                      </p>
                      <p>
                        KAISPE has a team of experts to help you implement
                        technology solutions. We can also help the organization
                        take advantage of the various implementation tools that
                        already exist within the solutions to speed up
                        implementation. Our team has the capability to deliver
                        implementation projects with different levels of
                        complexity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                  <div className="story__img-wrapper">
                    <Image
                      priority
                      width={300}
                      style={{ height: "auto" }}
                      src={Story1}
                      alt="Story Thumbnail"
                      className="w-100"
                    />
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <div className="story__img-wrapper img-anim">
                    <Image
                      priority
                      width={520}
                      style={{ height: "auto" }}
                      src={Story2}
                      alt="Story Thumbnail"
                      data-speed="auto"
                    />
                  </div>
                </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                    <div className="story__img-wrapper">
                      <Image
                        priority
                        width={230}
                        style={{ height: "auto" }}
                        src={Story3}
                        alt="Story Thumbnail"
                      />
                      <Image
                        priority
                        width={410}
                        style={{ height: "auto" }}
                        src={Story4}
                        alt="Story Thumbnail"
                      />
                    </div>
                  </div>
              </div> */}
            </div>
          </section>

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
                  {/* <div className="service__detail-img">
                <Image
                  priority
                  width={960}
                  style={{ height: "auto" }}
                  src={ServiceDetail}
                  alt="Service detail image"
                />
                <Image
                  priority
                  width={51}
                  style={{ height: "auto" }}
                  src={Shape6}
                  alt="Service shape image"
                  className="sd-shape"
                />
              </div> 
                  <div className="service__detail-content">
                    <p>
                      For more than 10 years, KAISPE has been a leading
                      Microsoft Partner to plan, implement, train, support, and
                      customize Microsoft and other technology solutions in USA,
                      South Asia, Africa and Gulf regions. We are helping
                      organizations implementing ERP, CRM, BI and Process
                      Automation solutions for a broad range of industries
                      including Retail, Distribution, Manufacturing and
                      Professional Services.
                    </p>
                    <p>
                      KAISPE has a team of experts to help you implement
                      technology solutions. We can also help the organization
                      take advantage of the various implementation tools that
                      already exist within the solutions to speed up
                      implementation. Our team has the capability to deliver
                      implementation projects with different levels of
                      complexity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section className="workflow__area-6">
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
                        On-TIme Delivery
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
                        Excellence in <br />
                        Quality
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
          </section>

          <section className="cta__area cta__area-7 pt-130">
            <div className="container pb-110">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="cta__content">
                    {/* <p className="cta__sub-title">Work with us</p> */}
                    <h2 className="cta__title title-anim">
                      A 5-Step Guide to ERP Implementation
                    </h2>
                    <p
                      style={{
                        marginTop: "30px",
                        color: "grey",
                        fontSize: "20px",
                      }}
                    >
                      Enterprise resource planning (ERP) implementation is a
                      complicated process that requires careful planning and
                      strategy.
                    </p>
                    <div className="btn_wrapper">
                      <Link
                        href="https://dynamics.microsoft.com/en-us/erp/erp-implementation/"
                        target="_blank"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span>Let’s talk us{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1 pb-100">
            <div className="blog__detail-content">
              <DigitalAgencyWorkflow />
            </div>
          </div>

          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;

/* <ServiceDetailsDevelopment /> */
/* <ServiceDetailsWorkflow /> */
/* <ServiceDetailsService /> */
/* <ServiceDetailsFaq /> */
/* <DigitalAgencyCTA /> */
