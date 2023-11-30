import Head from "next/head";
import { useEffect, useRef } from "react";
import { Power1, gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import StartupAgencyHero from "@/components/hero/StartupAgencyHero";
import Link from "next/link";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";
import StartupAgencyService from "@/components/service/StartupAgencyService";
import CommerceAbout from "@/components/about//CommerceAbout";
import ServiceSection from "@/components/cta/ServiceSection";

gsap.registerPlugin(ScrollTrigger);

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
        <RootLayout header="header3" footer="footer3">
          <StartupAgencyHero />

          <CommerceAbout />

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
                        Microsoft Dynamics 365 Commerce
                      </h3>
                      <p>
                        D365 e-commerce is a powerful business application. It
                        offers a comprehensive omnichannel solution, integrating
                        back-office, in-store, and digital experiences.
                        Microsoft D365 Commerce is able to create personalized
                        customer engagement, boost employee productivity,
                        streamline operations, and drive better business
                        results. With Dynamics 365 Commerce, retailers can
                        provide a seamless shopping experience to their
                        customers, no matter where they are, and stay ahead of
                        the curve in this rapidly evolving digital landscape.
                      </p>
                    </div>
                    {/* <ul className="research__tools">
                      <li>
                        <a href="#">Google</a>
                      </li>
                      <li>
                        <a href="#">pinterest</a>
                      </li>
                      <li>
                        <a href="#">Instagram</a>
                      </li>
                    </ul> */}
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="research__list">
                      <div className="research__item">
                        <div className="research__number">
                          <span>60%</span>
                        </div>
                        <div className="research__info">
                          <h4 className="research__title">Marketing</h4>
                          <p>
                            Your marketing strategy optimizing performances
                            doesn’t have to be a guessing game.
                          </p>
                        </div>
                      </div>

                      <div className="research__item">
                        <div className="research__number">
                          <span>95%</span>
                        </div>
                        <div className="research__info">
                          <h4 className="research__title">Commerce</h4>
                          <p>
                            Your marketing strategy optimizing performances
                            doesn’t have to be a guessing game.
                          </p>
                        </div>
                      </div>

                      <div className="research__item">
                        <div className="research__number">
                          <span>70%</span>
                        </div>
                        <div className="research__info">
                          <h4 className="research__title">Sales</h4>
                          <p>
                            Your marketing strategy optimizing performances
                            doesn’t have to be a guessing game.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <StartupAgencyService />


         <ServiceSection/>
         
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
