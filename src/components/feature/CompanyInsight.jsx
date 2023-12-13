import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Feature41 from "../../../public/assets/imgs/feature/4/1.png";
import Feature42 from "../../../public/assets/imgs/feature/4/2.png";
import Feature43 from "../../../public/assets/imgs/feature/4/3.png";
import Feature from "../../../public/assets/imgs/feature/4/feature.jpg";
import Icon1 from "../../../public/assets/imgs/feature/4/icon-1.png";
import Icon2 from "../../../public/assets/imgs/feature/4/icon-2.png";
// import Portfilio21 from "../../../public/assets/imgs/portfolio/2/partner.png";
import iotGrowth from "../../../public/assets/imgs/portfolio/2/iotGrowth.png";

import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const StartupAgencyFeature = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_4", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_4");
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
          gsap.to(".fade_bottom_4", {
            scrollTrigger: {
              trigger: ".fade_bottom_4",
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
      <section className="feature__area-6" style={{ backgroundColor: "white" }}>
        <div className="container line_4">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10">
              <div className="feature__content-left">
                {/* <h2 className="sec-subtile-6">Features</h2> */}
                <h3 className="sec-title-6 title-anim">
                  Engineering and
                  <br /> Design.
                </h3>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="feature__content-btm">
                <div className="feature__content-item fade_bottom_4">
                  <p>
                    We have an experienced and reliable team of engineers and
                    designers who have hands-on experience of implementing
                    business applications, and how it can suit any specific
                    business. Our excellent engineers work alongside the
                    operations and data analytics team to provide end-solutions
                    to customers using the most reliable and efficient platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="feature__content">
                <Image
                  priority
                  width={630}
                  style={{ height: "auto", width: "80%" }}
                  src={iotGrowth}
                  alt="Features Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature__area-6" style={{ backgroundColor: "white" }}>
        <div className="container line_4">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row" style={{ marginTop: "100px"}}>
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10">
              <div className="feature__content-left">
                {/* <h3 className="sec-title-6 title-anim">
                  Engineering and
                  <br /> Design.
                </h3> */}
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="feature__content">
                <Image
                  priority
                  width={630}
                  style={{ height: "auto", width: "80%" }}
                  src={iotGrowth}
                  alt="Features Image"
                />
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="feature__content-btm">
                <div className="feature__content-item fade_bottom_4">
                  <h3 className="sec-title-6 title-anim">
                    Business
                    <br /> Operations.
                  </h3>
                  <p>
                    The operations team is the backbone of any business, making
                    the magic happen. A KAISPE, we do exactly that by creating a
                    streamlined plan for your business to reduce costs and
                    inefficiencies. Our service team is composed of a number of
                    seasoned business operations executives who have come from
                    big names, like Microsoft, DuPont and Tyler Technologies to
                    offer you a more remarkable and tailored solution. They know
                    how to work and implement complex technologies that will
                    create value for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature__area-6" style={{ backgroundColor: "white",  marginBottom:"200px" }}>
        <div className="container line_4">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10">
              <div className="feature__content-left">
                {/* <h2 className="sec-subtile-6">Features</h2> */}
                <h3 className="sec-title-6 title-anim">
                  Data
                  <br /> Analytics.
                </h3>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="feature__content-btm">
                <div className="feature__content-item fade_bottom_4">
                  <p>
                    If not, you will come across it more often now that you live
                    in the 21st century. Your data is key to unlock your
                    competitive edge, and at KAISPE, we understand its
                    importance. Businesses usually generate volumes of data with
                    any transaction that they process. With Microsoft ad Oracle
                    platforms, we help you uncovering new and in-depth business
                    insights from that data, so that you arrive at more
                    profitable decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="feature__content">
                <Image
                  priority
                  width={630}
                  style={{ height: "auto", width: "80%" }}
                  src={iotGrowth}
                  alt="Features Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyFeature;
