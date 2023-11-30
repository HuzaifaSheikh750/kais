import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Link from "next/link";
import Image from "next/image";
import About11 from "../../../public/assets/imgs/about/1/1.jpg";
import About12 from "../../../public/assets/imgs/about/1/2.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const DigitalAgencyAbout = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="about__area">
        <div className="container line g-0 pt-140 pb-130">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="about__content-wrapper">
                <div className="about__img">
                  <div className="img-anim about__img_left">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={About11}
                      alt="About Image"
                      data-speed="0.3"
                    />
                  </div>
                </div>

                <div className="about__content text-anim">
                  <p>
                    Expansion exposes services organizations to a host of new
                    challenges such as unfamiliar markets, different cost
                    structures and work practices, and new business partners.
                    Governments everywhere are demanding more business
                    accountability and instituting new mechanisms to monitor
                    compliance. Clients want more visibility into service
                    delivery and billing processes. Workforce profiles vary
                    widely across geographies, making it hard to maintain
                    portfolios of key talent. Challenges like these reflect the
                    complexity of global business today and add to the overall
                    risk that services organizations already face.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="about__area">
        <div className="container line g-0 pt-140 pb-130">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="about__content-wrapper">
                <div className="about__content text-anim">
                  <p>
                    From traditional PR and thought leadership campaigns to
                    storytelling and creative social media management we’ve got
                    you covered. Something is not your average order-taking
                    vendor. We are proud to be the go-to partner for some of the
                    world’s biggest agencies and brands because they trust our
                    expertise
                  </p>
                </div>

                <div className="about__img">
                  <div className="img-anim about__img_left">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={About11}
                      alt="About Image"
                      data-speed="0.3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default DigitalAgencyAbout;
