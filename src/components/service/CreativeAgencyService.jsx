import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const CreativeAgencyService = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation_services_7 = gsap.utils.toArray(
          ".animation_service_7 .service__item-7"
        );
        gsap.set(animation_services_7, {
          opacity: 0,
          x: -30,
        });

        if (animation_services_7) {
          if (device_width < 1023) {
            animation_services_7.forEach((item, i) => {
              gsap.to(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 1,
                x: -0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.to(".animation_service_7 .service__item-7", {
              scrollTrigger: {
                trigger: ".animation_service_7",
                start: "top center+=200",
                markers: false,
              },
              opacity: 1,
              x: 0,
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
      <section
        className="service__area-2 pt-130"
        style={{ marginBottom: "100px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-6" style={{marginBottom:"70px"}}>
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  Why do you need KAISPE as your partner for implementation?
                </h2>
                
              </div>
            </div>
            <div className="col-xxl-6" style={{marginBottom:"70px"}}>
            <div className="about__mid-7 text-anim">
                <p>
                  Delays are the killer of any business in this outrageous
                  increase of digitization. Save yourself from trouble by
                  keeping a closer look at the insightful data from all your
                  departments. Benefit from automated features of D365 Customer
                  Engagement to achieve operational excellence, generate new
                </p>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="service__items-7 animation_service_7">
                <div className="service__item-7">
                  <Link href="/service-details">
                    <h3 className="service__title-7">
                      Experience and <span>Expertise</span>
                    </h3>
                  </Link>
                  <p>
                    KAISPE has a team of experienced consultants who have
                    implemented Dynamics 365 Customer Engagement solutions for
                    various industries. They have a deep understanding of the
                    platforms features and capabilities and can customize it to
                    meet the unique needs of each business.
                  </p>
                  {/* <ul>
                    <li>+ Logo Design</li>
                    <li>+ Advertisement</li>
                    <li>+ Promotion</li>
                  </ul> */}
                </div>
                <div className="service__item-7">
                  <Link href="/service-details">
                    <h3 className="service__title-7">
                      Comprehensive<span>Solutions</span>{" "}
                    </h3>
                  </Link>
                  <p>
                    We provide end-to-end solutions that cover all aspects of
                    Dynamics 365 Customer Engagement implementation, including
                    consultation, customization, integration, data migration,
                    training, and support.
                  </p>
                  {/* <ul>
                    <li>+ Logo Design</li>
                    <li>+ Advertisement</li>
                    <li>+ Promotion</li>
                  </ul> */}
                </div>
                <div className="service__item-7">
                  <Link href="/service-details">
                    <h3 className="service__title-7">
                      Customer-Centric<span>Approach</span>{" "}
                    </h3>
                  </Link>
                  <p>
                    KAISPE adopts a customer-centric approach in its
                    implementation process, ensuring that the solution meets the
                    specific needs of each business. Our D365 experts work
                    closely with the clients to comprehend their goals,
                    challenges, and pain points and tailor the solution
                    accordingly.
                  </p>
                  {/* <ul>
                    <li>+ Logo Design</li>
                    <li>+ Advertisement</li>
                    <li>+ Promotion</li>
                  </ul> */}
                </div>
                <div className="service__item-7">
                  <Link href="/service-details">
                    <h3 className="service__title-7">
                      Cost-Effective <span> Solutions</span>{" "}
                    </h3>
                  </Link>
                  <p>
                    Our company provides cost-effective Dynamics 365 Customer
                    Engagement implementation solutions that offer value for
                    money. We provide transparent pricing and flexible payment
                    options, making it easy and smooth for businesses to budget
                    and plan for their implementation project.
                  </p>
                  {/* <ul>
                    <li>+ Logo Design</li>
                    <li>+ Advertisement</li>
                    <li>+ Promotion</li>
                  </ul> */}
                </div>
                <div className="service__item-7">
                  <Link href="/service-details">
                    <h3 className="service__title-7">
                      Proven Track<span>Record</span>
                    </h3>
                  </Link>
                  <p>
                    Our team of D365 functional consultants has a proven track
                    record of successfully implementing Dynamics 365 Customer
                    Engagement solutions for various businesses. It includes
                    small and medium-sized enterprises and large corporations.
                    Our company has numerous testimonials and case studies from
                    satisfied clients, which is a testament to our quality of
                    work.
                  </p>
                  {/* <ul>
                    <li>+ Logo Design</li>
                    <li>+ Advertisement</li>
                    <li>+ Promotion</li>
                  </ul> */}
                </div>
                <div className="service__item-7">
                  <Link href="/service-details">
                    <h3 className="service__title-7">
                      Continuous <span>Support</span>{" "}
                    </h3>
                  </Link>
                  <p>
                    KAISPE provides continuous support to its clients even after
                    the implementation project is completed. We offer training,
                    maintenance, and support services to ensure that the
                    solution remains up-to-date and continues to meet the
                    evolving advanced needs of modern business.
                  </p>
                  {/* <ul>
                    <li>+ Logo Design</li>
                    <li>+ Advertisement</li>
                    <li>+ Promotion</li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeAgencyService;
