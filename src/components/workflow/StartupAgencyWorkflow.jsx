import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Thumb1 from "../../../public/assets/imgs/thumb/1.png";
import Thumb2 from "../../../public/assets/imgs/thumb/2.png";
import Thumb3 from "../../../public/assets/imgs/thumb/3.png";
import Image from "next/image.js";

gsap.registerPlugin(ScrollTrigger);

const StartupAgencyWorkflow = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation_workflow_6 = gsap.utils.toArray(
          ".animation_workflow_6 .workflow__item-4"
        );
        if (animation_workflow_6) {
          if (device_width < 1023) {
            animation_workflow_6.forEach((item, i) => {
              gsap.from(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 0,
                x: -30,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.from(".animation_workflow_6 .workflow__item-4", {
              scrollTrigger: {
                trigger: ".animation_workflow_6",
                start: "top center+=200",
                markers: false,
              },
              opacity: 0,
              x: -30,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="workflow__area-4">
        <div className="container line_4 pt-100 pb-130">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row animation_workflow_6">
            <div className="col-xxl-12">
              <div className="title-wrapper-6 text-anim">
                {/* <h2 className="sec-subtile-6">Processing</h2> */}
                <h3 className="sec-title-6 title-anim">Scorecard Report</h3>
                <p>
                  As part of the Health Check process, our team review and
                  analyze the application with general performance
                  <br /> guiding principles in mind and share a review report
                  with our findings and recommendations. <br />
                  The best practice deviations and general issues are
                  categorized as described below:
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={Thumb1}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">Good Rating</h4>
                <p>
                  Is a GOOD rating and no known issues were found in this area
                  that should raise immediate concern.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={Thumb2}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">Fair Rating</h4>
                <p>
                  Is a FAIR rating and some issues have been found in a specific
                  area that should be additionally assessed and addressed.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={Thumb3}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">Poor Rating</h4>
                <p>
                  s a POOR rating and there are immediate issues that must be
                  addressed in the specific area to maintain stability and to
                  prevent critical situations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyWorkflow;
