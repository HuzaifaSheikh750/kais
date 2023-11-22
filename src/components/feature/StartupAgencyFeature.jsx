import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Feature41 from "../../../public/assets/imgs/feature/4/1.png";
import Feature42 from "../../../public/assets/imgs/feature/4/2.png";
import Feature43 from "../../../public/assets/imgs/feature/4/3.png";
import Feature from "../../../public/assets/imgs/feature/4/feature.jpg";
import Icon1 from "../../../public/assets/imgs/feature/4/icon-1.png";
import Icon2 from "../../../public/assets/imgs/feature/4/icon-2.png";
import Image from "next/image";
import Link from "next/link";

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
      <section className="feature__area-6" style={{ marginBottom: "100px" }}>
        <div className="container line_4">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
              <div className="feature__content-left">
                {/* <h2 className="sec-subtile-6">Features</h2> */}
                <h3 className="sec-title-6 title-anim">
                  Organize Your Business and Keep All Operations on the Tip of
                  Your Fingers
                </h3>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
              <div className="feature__content-right">
                {/* <h4 className="feature__title-6">Creativity</h4> */}
                <p>
                  Enhance Growth and Efficiency through Interconnected Business
                  Processes by Dynamics 365 business central. Streamline
                  processes, gain valuable insights, boost productivity, and
                  ensure security and compliance at every hour of work.
                </p>
                <Link
                  href="/contact"
                  class="btn btn-primary"
                  style={{ display: "inline-block", margin: "0 auto" }}
                >
                  Get Consultancy now!
                
                </Link>

                <Image
                  priority
                  width={130}
                  height={97}
                  className="feature__img-1"
                  src={Feature41}
                  alt="Icon"
                />
                <Image
                  priority
                  width={99}
                  height={131}
                  className="feature__img-2"
                  src={Feature42}
                  alt="Icon"
                />
                <Image
                  priority
                  width={38}
                  height={38}
                  className="feature__img-3"
                  src={Feature43}
                  alt="Icon"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="feature__content">
                <Image
                  priority
                  width={630}
                  style={{ height: "auto" }}
                  src={Feature}
                  alt="Features Image"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="feature__content-btm">
                <h3 className="sec-title-5 title-anim">
                  Are you ready to experience the highest graph of growth? Get
                  in touch for smooth implementation of Microsoft Dynamics 365
                  Business Central by the experts of KAISPE.
                </h3>
               

                
                {/* <div className="feature__content-item fade_bottom_4">
                  <Image
                    priority
                    width={50}
                    height={50}
                    src={Icon1}
                    alt="Features Image"
                  />
                  <h5>
                    Unique Header & <br /> Sidebar
                  </h5>
                  <p>Unique digital header widget metaverse wearables</p>
                </div> */}
                {/* <div className="feature__content-item fade_bottom_4">
                  <Image
                    priority
                    width={50}
                    height={50}
                    src={Icon2}
                    alt="Features Image"
                  />
                  <h5>
                    5+ Navigation <br /> Bars
                  </h5>
                  <p>Content focused grid designs unique social element</p>
                </div> */}
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyFeature;
