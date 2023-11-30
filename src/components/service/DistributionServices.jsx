import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";

import ServiceDetail from "../../../public/assets/imgs/thumb/service-detail.png";
import Shape6 from "../../../public/assets/imgs/icon/shape-6.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingService = () => {
  // const serviceList = useRef();
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     imageAnimation(serviceList.current.children);
  //     let tHero = gsap.context(() => {
  //       let service__items_3 = gsap.utils.toArray(".service_animation");
  //       let service__items_heading = gsap.utils.toArray(
  //         ".service_animation h3"
  //       );
  //       let service__items_content = gsap.utils.toArray(
  //         ".service_animation .service__content-3"
  //       );

  //       service__items_3.forEach((service_item, i) => {
  //         gsap.set([service__items_heading[i], service__items_content[i]], {
  //           x: -30,
  //           opacity: 0,
  //         });

  //         let service3_timeline = gsap.timeline({
  //           scrollTrigger: {
  //             trigger: service_item,
  //             start: "top center+=200",
  //             markers: false,
  //           },
  //         });

  //         service3_timeline.to(service__items_heading[i], {
  //           x: 0,
  //           opacity: 1,
  //           ease: "power2.out",
  //           duration: 1.5,
  //           stagger: {
  //             each: 0.2,
  //           },
  //         });
  //         service3_timeline.to(
  //           service__items_content[i],
  //           {
  //             x: 0,
  //             opacity: 1,
  //             ease: "power2.out",
  //             duration: 1.5,
  //             stagger: {
  //               each: 0.2,
  //             },
  //           },
  //           "-=1"
  //         );
  //       });
  //     });
  //     return () => tHero.revert();
  //   }
  // }, []);

  // const imageAnimation = (data) => {
  //   function followImageCursor(event, serviceImgItem) {
  //     const contentBox = serviceImgItem.getBoundingClientRect();
  //     const dx = event.clientX - contentBox.x;
  //     const dy = event.clientY - contentBox.y;
  //     serviceImgItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
  //   }

  //   for (let i = 0; i < data.length; i++) {
  //     data[i].addEventListener("mousemove", (event) => {
  //       setInterval(followImageCursor(event, data[i]), 1000);
  //     });
  //   }
  // };

  return (
    <>
      <section className="service__area-3 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper pt-130 text-anim">
                <h2 className="sec-sub-title title-anim">Services</h2>
                <h3 className="sec-title title-anim">
                  Distribution <br />
                </h3>
                <p>
                  Building a Resilient Supply Chain enables organizations to
                  adapt to disruptions successfully. It ensures business
                  continuity during distress. It provides the end-to-end
                  visibility of their supply chain to make data-driven decisions
                  as supposed to emotionally-driven decisions on demand and
                  supply in a crisis. Companies can return to normal and ramp up
                  faster due to the agility in planning, sourcing, and
                  distribution processes driven by non-monolithic business
                  solutions and de-risk from future disruptions. With a
                  resilient supply chain, organizations are better equipped to
                  generate positive cash flow by optimizing resources, staying
                  profitable, retaining market share, and remaining competitive.
                </p>
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

export default DigitalMarketingService;
