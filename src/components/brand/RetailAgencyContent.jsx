import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Brand1 from "../../../public/assets/imgs/brand/1.png";
import Brand2 from "../../../public/assets/imgs/brand/2.png";
import Brand3 from "../../../public/assets/imgs/brand/3.png";
import Brand4 from "../../../public/assets/imgs/brand/4.png";
import Brand5 from "../../../public/assets/imgs/brand/5.png";
import Brand6 from "../../../public/assets/imgs/brand/6.png";
import Image from "next/image";
import ServiceDetail from "../../../public/assets/imgs/thumb/service-detail.png";
import Shape6 from "../../../public/assets/imgs/icon/shape-6.png";

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyBrand = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom");
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
          gsap.to(".fade_bottom", {
            scrollTrigger: {
              trigger: ".fade_bottom",
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
      <section className="brand__area" style={{marginTop:"-50px"}}>
        <div className="container g-0 line pt-140 pb-130">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10  mx-auto">
              <div className="service__detail-img">
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
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2
                  className="sec-sub-title title-anim"
                  style={{ marginTop: "-20px", textAlign: "center" }}
                >
                  KAISPE accelerates the delivery of value and confidence to our
                  customers by leveraging Microsoft Cloud for
                  Retail capabilities. KAISPE extends the robust capabilities of
                  Microsoft Cloud for Retail, by managing retail data, applying
                  query capabilities and machine learning, and delivering
                  automation and efficiency. We are dedicated to better serving
                  customers by providing more integrated solutions, reducing
                  risk across the ecosystem, identifying opportunities, and
                  decreasing time to market. KAISPE can build-upon, extend, and
                  enable the value of the Microsoft Cloud for Retail platform to
                  address the most pressing challenges retailers are facing
                  today and deliver a complete retail cloud-based solution.
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10  mx-auto">
              <div className="service__detail-img">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyBrand;
