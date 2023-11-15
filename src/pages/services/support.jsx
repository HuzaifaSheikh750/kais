import Head from "next/head";
import { useEffect, useRef } from "react";

import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/development/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Detail3 from "../../../public/assets/imgs/blog/detail/upgrade.jpg";
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
                      Support
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
                      <h4 style={{marginBottom:"20px", marginTop:"20px"}}>Hello! Welcome to KAISPE Support.</h4>
                      <p>
                      We have the resources at your fingertips when you need them. You can also stay up to date, either way, leveling up is just one click away.
                      </p>
                      <p>
                      Our KAISPE support team is ready to calculate the cost according to the software and its underlying infrastructure, the extent of support and maintenance required, and the preferred pricing model.
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
              </div> */}
                  <div className="" style={{fontSize:"18px", fontFamily:"kanit, sans-serif"}} >
                    <p>
                    Your success is a top priority for us, and we make sure that our customers receive the maximum return on their investment. We offer flexible support offerings ranging from Basic to Advance, to Premium Customer Support. Each offering provides specific service levels and capabilities, from online case submission to phone support, that helps maintain your software solution.
                    </p><br/>
                    <p>
                    Please check below a typical set of flexible support offerings available to you. To better suit your requirements, we can also mix and match the options to build a custom option for you:
                    </p>
                  
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
                    {/* <h2 className="cta__title title-anim">
                      A 5-Step Guide to ERP Implementation
                    </h2> */}
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
                        href="https://learn.microsoft.com/en-us/dynamics365/get-started/migration/dynamics365-ax-feature-compare"
                        className="wc-btn-primary btn-hover btn-item"
                        target="_blank"
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


