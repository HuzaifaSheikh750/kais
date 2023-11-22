import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import FeatureIcon1 from "../../../public/assets/imgs/feature/icon/1.png";
import FeatureIcon2 from "../../../public/assets/imgs/feature/icon/2.png";
import FeatureIcon3 from "../../../public/assets/imgs/feature/icon/3.png";
import FeatureIcon4 from "../../../public/assets/imgs/feature/icon/4.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DesignStudioFeature = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      setTimeout(() => {
        let tHero = gsap.context(() => {
          let animation__feature2 = gsap.utils.toArray(
            ".animation__feature2 .feature__item"
          );
          if (device_width < 1023) {
            animation__feature2.forEach((item, i) => {
              gsap.set(item, { opacity: 0, y: 60 });
              let featured2Timeline = gsap.timeline({
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                },
              });
              featured2Timeline.to(item, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power4.out",
              });
            });
          } else {
            gsap.set(".animation__feature2 .feature__item", {
              opacity: 0,
              y: 40,
            });
            gsap.to(".animation__feature2 .feature__item", {
              scrollTrigger: {
                trigger: ".animation__feature2",
                start: "top center+=200",
              },
              opacity: 1,
              y: 0,
              duration: 2,
              ease: "power4.out",
              stagger: 0.3,
            });
          }
        });
        return () => tHero.revert();
      }, 1000);
    }
  }, []);
  return (
    <>
      <section
        className="feature__area-1 pt-130"
        style={{ marginBottom: "100px" }}
      >
        <div className="feature__top">
          <div className="container">
            <div className="row">
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title title-anim">Choose your industry</h2>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                <div className="feature__text text-anim">
                  <p>
                    Microsoft D365 Business Central is a powerful business
                    management solution designed to help agencies and
                    organizations of all sizes streamline their business
                    operations and achieve their goals. With its wide range of
                    features and customization options, Business Central is an
                    excellent choice for companies in a variety of industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feature__btm">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="feature__list animation__feature2">
                  <div className="feature__item">
                    <Image
                      priority
                      width={108}
                      height={108}
                      src={FeatureIcon1}
                      alt="Feature Icon"
                    />
                    <h3 className="feature__title">Manufacturing</h3>
                    <p>
                      automate production, and manage inventory. Its
                      manufacturing module allows real-time production planning,
                      scheduling, and tracking, reducing waste and ensuring
                      timely delivery.
                    </p>
                  </div>
                  <div className="feature__item">
                    <Image
                      priority
                      width={108}
                      height={108}
                      src={FeatureIcon2}
                      alt="Feature Icon"
                    />
                    <h3 className="feature__title">Retail</h3>
                    <p>
                      Business Central helps retailers enhance customer service,
                      streamline inventory management, and increase sales. Its
                      point-of-sale system simplifies transactions, customer
                      data management, and sales trend tracking.
                    </p>
                  </div>
                  <div className="feature__item">
                    <Image
                      priority
                      width={108}
                      height={108}
                      className=""
                      src={FeatureIcon3}
                      alt="Feature Icon"
                    />
                    <h3 className="feature__title">Finance</h3>
                    <p>
                      Business Central's finance module simplifies financial
                      management, including accounts receivable, accounts
                      payable, general ledger, and financial reporting. It
                      offers real-time insights into financial performance for
                      informed decision-making and strategy adjustment.
                    </p>
                  </div>
                  <div className="feature__item">
                    <Image
                      priority
                      width={108}
                      height={108}
                      src={FeatureIcon4}
                      alt="Feature Icon"
                    />
                    <h3 className="feature__title">Service</h3>
                    <p>
                      Business Central's service management features benefit
                      service-based businesses by enabling service request
                      tracking, contract management, and resource scheduling.
                      Its mobile app allows field technicians to access
                      information and update records on the go, enhancing
                      productivity and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignStudioFeature;
