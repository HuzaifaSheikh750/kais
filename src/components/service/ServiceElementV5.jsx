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
      <section className="portfolio__service service-v5 pt-140 pb-140" style={{marginBottom:"100px"}}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <h4 className="sec-title animation__char_come" ref={charAnim}>
                {" "}
                Our Expertise with Major App Development Technologies
              </h4>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="sec-text">
                <p>
                Having completed projects with thousands of man hours of effort required, we have devised a specialized approach to complete custom development for different technology platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio__service-list">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details">
                    <h3 className="ps-title">
                    Development Languages<br /> and Toolkits
                    </h3>
                    <ul>
                      <li>+ Kotlin</li>
                      <li>+ Javascript</li>
                      <li>+ Dart</li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details">
                    <h3 className="ps-title">
                    Backend Programming

                      <br /> Languages
                    </h3>
                    <ul>
                      <li>+ Net Core</li>
                      <li>+ Node js</li>
                      <li>+ Laravel</li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details">
                    <h3 className="ps-title">
                    Database and<br/> Storages
                    </h3>
                    <ul>
                      <li>+ MongoDB</li>
                      <li>+ Firebase</li>
                      <li>+ SQL Server</li>
                    </ul>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details">
                    <h3 className="ps-title">
                    Platform <br /> 
                    </h3>
                    <ul>
                      <li>+ Flutter</li>
                      <li>+ React</li>
                      <li>+ Angular</li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details">
                    <h3 className="ps-title">
                    QA Tools
                      <br /> 
                    </h3>
                    <ul>
                      <li>+ Selenium</li>
                      <li>+ Cypress</li>
                      <li>+ Jest </li>
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  <Link href="/service-details">
                    <h3 className="ps-title" >
                      Android Developemnt
                    </h3>
                    <ul>
                      <li>+ docker</li>
                      <li>+ Kubernetes</li>
                      <li>+ Azure DevOps</li>
                    </ul>
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
