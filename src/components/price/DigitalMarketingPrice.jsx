import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link.js";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingPrice = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });
        let pricing_timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".price__table",
            start: "top center",
          },
        });

        gsap.set(".animation_from_bottom", { yPercent: 50 });

        pricing_timeline.to(".animation_from_bottom", {
          yPercent: 0,
          duration: 2,
          ease: "power4.out",
        });

        gsap.set(".animation_from_top", { yPercent: -50, opacity: 0 });
        pricing_timeline.to(
          ".animation_from_top",
          {
            yPercent: 0,
            duration: 2,
            opacity: 1,
            ease: "power4.out",
          },
          "-=2"
        );
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="price__area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="sec-title-wrapper">
                {/* <h2 className="sec-sub-title title-anim">Pricing Table</h2> */}
                <h3 className="sec-title title-anim mx-auto text-center">
                  What is Microsoft Dynamics 365 Customer Engagement
                </h3>
                <p className="mx-auto text-center">
                  Microsoft D365 CE - the cloud-based CRM system that
                  revolutionizes the way businesses and companies interact with
                  their customers. Say goodbye to outdated sales processes and
                  hello to a seamless customer experience. With Dynamics 365
                  Customer Engagement, you can manage your sales, marketing, and
                  customer service activities all in one place. Given the 5
                  major components of the solution, it's like having a personal
                  assistant that takes care of everything for you.
                </p>
              </div>
            </div>
{/* 
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="price__table">
                <div className="price__item animation_from_bottom">
                  <div className="price__icon">
                    <span>
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>
                  </div>
                  <div className="price__info">
                    <h3 className="price__title" style={{fontSize:"23px"}}>Microsoft Dynamics 365 Sales</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="price__table">
                <div className="price__item animation_from_bottom">
                  <div className="price__icon">
                    <span>
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>
                  </div>
                  <div className="price__info">
                    <h3 className="price__title" style={{fontSize:"23px"}}>Microsoft Dynamics 365 Marketing</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="price__table">
                <div className="price__item animation_from_bottom">
                  <div className="price__icon">
                    <span>
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>
                  </div>
                  <div className="price__info">
                    <h3 className="price__title" style={{fontSize:"23px"}}>Microsoft Dynamics 365 Customer Service</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="price__table">
                <div className="price__item animation_from_bottom">
                  <div className="price__icon">
                    <span>
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>
                  </div>
                  <div className="price__info">
                    <h3 className="price__title" style={{fontSize:"23px"}}>Microsoft Dynamics 365 Project Operations</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 ">
              <div className="price__table">
                <div className="price__item animation_from_bottom">
                  <div className="price__icon">
                    <span>
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>
                  </div>
                  <div className="price__info">
                    <h3 className="price__title" style={{fontSize:"23px"}}>Microsoft Dynamics 365 Field Service</h3>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingPrice;
