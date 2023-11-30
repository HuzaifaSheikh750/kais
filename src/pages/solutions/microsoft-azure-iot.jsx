import Head from "next/head";
import { useEffect, useRef } from "react";

import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Link from "next/link";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";
import IotHero from "@/components/hero/iotHero";
import Iotportfolio from "@/components/portfolio/iot-portfolio";
import IotTestimonial from "@/components/testimonial/IotTestimonial";

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
          <IotHero />

          <Iotportfolio />

          <IotTestimonial />

          <section className="" style={{ marginBottom: "100px" }}>
            <div className="research__area wf_panel pt-150">
              <div className="container inner_content">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="sec-title-wrapper">
                      {/* <h2 className="sec-sub-title">
                      why <br />
                      choose us
                    </h2> */}
                      <h3 className="sec-title">
                        Looking for a Proof of Concept (PoC) for your Next IoT
                        project?
                      </h3>
                      <p>
                        Proof of concepts (PoC) serve several purposes. When it
                        comes to the IoT solution, a primary aim of the PoC is
                        to substantiate that an IoT solution can deliver on the
                        vision. The intent is to avoid skepticism on the part of
                        client about the capabilities that can be realized and
                        to detect situations over-promising on the capabilities
                        of IoT before any significant investment occurs. There
                        are four major components of an IoT solution to consider
                        in a PoC.
                      </p>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="research__list">
                      <div className="research__item">
                        <div className="research__number">
                          <span>25%</span>
                        </div>
                        <div className="research__info">
                          <h4 className="research__title">Azure IoT Hub</h4>
                          <p>
                            Top Considerations: existing hardware OS,
                            connectivity methods, protocols, geographic
                            concentration, and power sources.
                          </p>
                        </div>
                      </div>

                      <div className="research__item">
                        <div className="research__number">
                          <span>50%</span>
                        </div>
                        <div className="research__info">
                          <h4 className="research__title">Azure IoT Edge</h4>
                          <p>
                            Top Considerations: device data types, messaging
                            rates, and procedures fro remote firmware/software
                            updates.
                          </p>
                        </div>
                      </div>

                      <div className="research__item">
                        <div className="research__number">
                          <span>75%</span>
                        </div>
                        <div className="research__info">
                          <h4 className="research__title">
                            Azure Digital Twins
                          </h4>
                          <p>
                            Top Considerations: near-real-time processing,
                            latency requirements, machine learning applications,
                            and non-IoT data sources
                          </p>
                        </div>
                      </div>

                      <div className="research__item">
                        <div className="research__number">
                          <span>100%</span>
                        </div>
                        <div className="research__info">
                          <h4 className="research__title">Azure IoT Central</h4>
                          <p>
                            Top Considerations: visualizations for role-based
                            persons, auomated worlflows operational and
                            organizational structure, and relationship with
                            end-users
                          </p>
                        </div>
                      </div>
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
