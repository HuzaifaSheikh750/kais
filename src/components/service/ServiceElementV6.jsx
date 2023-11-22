import animationCharCome from "@/lib/utils/animationCharCome";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const ServiceElementV5 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <div>
      <section className="price__area portfolio__service service-v5  pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="sec-title-wrapper">
                <h3 className=" title-anim mx-auto text-center" style={{fontSize:"50px", marginBottom:"20px"}}>
                  What is Microsoft Dynamics 365 Customer Engagement
                </h3>
                <p className="mx-auto text-center">
                  Microsoft D365 CE - the cloud-based CRM system that
                  revolutionizes the way businesses and companies interact with
                  their customers. Say goodbye to outdated sales processes and
                  hello to a seamless customer experience. With Dynamics 365
                  Customer Engagement, you can manage your sales, marketing, and
                  customer service activities all in one place. Given the 5
                  major components of the solution, its like having a personal
                  assistant that takes care of everything for you.
                </p>
              </div>
            </div>
          </div>
        {/* </div>
      </section> */}

      {/* <section
        className="portfolio__service service-v5 pt-140 pb-140"
        style={{ marginBottom: "100px" }}
      >
        <div className="container"> */}
          <div className="portfolio__service-list">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details">
                    <h3 className="ps-title">
                    Microsoft Dynamics
                      <br />  365 Sales
                    </h3>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details">
                    <h3 className="ps-title">
                    Microsoft Dynamics 
                      <br /> 365 Marketing
                    </h3>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details">
                    <h3 className="ps-title">
                    Microsoft Dynamics 365 
                      <br /> Customer Service 
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details">
                    <h3 className="ps-title">
                    Microsoft Dynamics 365 <br />
                    Project Operations 
                    </h3>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details">
                    <h3 className="ps-title">
                    Microsoft Dynamics 365 
                      <br />
                      Field Service
                    </h3>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceElementV5;
