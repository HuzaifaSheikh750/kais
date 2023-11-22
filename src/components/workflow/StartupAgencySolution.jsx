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
                <h3 className="sec-title-6 title-anim">
                  Elevate your Financial Performance by Automating Your Finances
                </h3>
                <p>
                  Implement Dynamics 365 F&O and save time to focus on other
                  business operations.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={Thumb1}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">
                  Enhance Financial Reporting
                </h4>
                <p>
                  Microsoft Dynamics 365 Finance provides real-time data
                  insights and reporting capabilities to help businesses make
                  informed decisions based on accurate financial data. The
                  system offers a range of customizable reporting options and
                  dashboards to enable businesses to analyze data and identify
                  trends quickly.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={Thumb2}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">
                  Improve Cash Flow Management
                </h4>
                <p>
                  With advanced cash flow management features, Microsoft
                  Dynamics 365 Finance allows businesses to forecast cash flow,
                  track cash balances, and manage cash transactions with ease.
                  This helps businesses to manage their finances better, make
                  informed investment decisions, and avoid cash flow
                  disruptions.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={Thumb3}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">
                  Optimize Resource Management
                </h4>
                <p>
                  The Resource Management module helps businesses manage their
                  resources more effectively, from personnel to equipment and
                  materials. By optimizing resource allocation and scheduling,
                  businesses can improve productivity, reduce costs, and enhance
                  their bottom line.
                </p>
              </div>
            </div>
            {/* <div className="col-xxl-4 col-xl-3 col-lg-3 col-md-6">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={Thumb3}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">
                  Increase Collaboration and Productivity
                </h4>
                <p>
                  Microsoft Dynamics 365 Finance offers a range of collaborative
                  tools and features, including shared workspaces and document
                  management, to streamline business processes and improve
                  productivity. This allows teams to work more efficiently,
                  share information more easily, and make better decisions.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyWorkflow;
