import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";

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
                  Modules and Capabilities of <br />
                  Power Platform
                </h3>
                <p>
                  The Low-code Platform spans Office 365, Azure, Dynamics 365,
                  and standalone applications.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xx-12">
              <div className="service__list-3">
                <div className="service__item-3 service_animation">
                  <h3 className="service__title-3">Power Apps</h3>
                  <div className="">
                    <p>
                      MS Power Apps is the toolset for low-code app development.
                      There are three styles of applications; canvas,
                      model-driven, and portals. Power Apps canvas applications
                      can also be embedded into SharePoint, Teams, Power BI, and
                      model-driven applications. Portals enable builders to
                      build low-code, responsive websites which allow external
                      users to interact with the data.
                    </p>
                  </div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="service__title-3">Power Automate</h3>
                  <div className="">
                    <p>
                      MS Power Automate provides workflow automation that
                      orchestrates across services using connectors. Automation
                      can be triggered to run when events occur in other systems
                      and services or are scheduled to run at a specific time.
                      Users can start instant flows on demand from within the
                      mobile app on the go or from the context of selected items
                      in other apps.
                    </p>
                  </div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="service__title-3">Power BI</h3>
                  <div className="">
                    <p>
                      Power BI offers capabilities to help you discover and
                      explore insights from your data, including automated
                      machine learning for predictive modeling, new AI
                      visualizations with decomposition trees for detailed root
                      cause analysis drilldowns, and easier ways for everyone to
                      interact with their data using the new Q&A visualization.
                    </p>
                  </div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="service__title-3">Power Virtual Agents</h3>
                  <div className="">
                    <p>
                      MS Power Virtual Agents empowers teams to create powerful
                      bots using a guide easily. It is a no-code platform with a
                      graphical interface without the need for data scientists
                      or developers. It eliminates the gap between the subject
                      matter experts and the development teams building the bots
                      and the long latency between teams recognizing an issue
                      and updating the bot to address it.
                    </p>
                  </div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="service__title-3">Dataverse</h3>
                  <div className="">
                    <p>
                      Dataverse is a mature data platform to manage data used by
                      business applications. Dataverse provides built-in
                      capabilities for business rules, workflows, calculation
                      and rollup fields, and more. Dataverse secures data using
                      a configurable security model that offers hierarchical,
                      row-level, and field-level security and auditing
                      capabilities.
                    </p>
                  </div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="service__title-3">AI Builder</h3>
                  <div className="">
                    <p>
                      AI Builder is a platform capability that easily adds AI to
                      Power Automate, Power Apps, and Dynamics 1st Party Apps.
                      This enables makers to automate tasks and predict outcomes
                      without involving data scientists.
                    </p>
                  </div>
                </div>

                <div className="service3__img-wrap">
                  <div className="service3__img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingService;
