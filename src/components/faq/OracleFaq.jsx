import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import { Accordion } from "react-bootstrap";
import Link from "next/link.js";
import imgsBg41 from "../../../public/assets/imgs/bg/4/1.png";
import imgsBg42 from "../../../public/assets/imgs/bg/4/2.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const StartupAgencyFaq = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_3", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_3");
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
          gsap.to(".fade_bottom_3", {
            scrollTrigger: {
              trigger: ".fade_bottom_3",
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
      <section className="faq__area-4 pt-150 pb-150" style={{marginBottom:"100px"}}>
        <div className="container g-0">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-6">
              <div className="faq__sec-title text-anim">
                <h2 className="sec-subtile-6">Expertise</h2>
                <h3 className="sec-title-6 title-anim">
                Why Choose KAISPE for Oracle Net Suite implementation and consulting?
                </h3>
                {/* <p>Grow brands through bold, strategic creative</p>
                <Link className="btn-view" href="/about">
                  Know More <i className="fa-solid fa-arrow-right"></i>
                </Link> */}
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6">
              <div className="faq__list-4">
                <Accordion
                  defaultActiveKey="0"
                  className="accordion"
                  id="accordionExample"
                >
                  <Accordion.Item
                    eventKey="0"
                    className="accordion-item fade_bottom_3"
                  >
                    <Accordion.Header
                      className="accordion-header"
                      id="headingOne"
                    >
                      Experience
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>
                      KAISPE has extensive experience in Oracle NetSuite implementation and consulting, having worked with businesses of all sizes and across a range of industries. With their extensive platform knowledge, our team of experts and professionals can help you get the most out of your NetSuite investment.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item
                    eventKey="1"
                    className="accordion-item fade_bottom_3"
                  >
                    <Accordion.Header
                      className="accordion-header"
                      id="headingTwo"
                    >
                      Comprehensive Services: 
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>
                      KAISPE offers a range of services to support your NetSuite implementation, including project management, customization, data migration, training, and ongoing support. This indicates that we can offer complete assistance for your NetSuite project, from initial planning to post-implementation maintenance and support.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item
                    eventKey="2"
                    className="accordion-item fade_bottom_3"
                  >
                    <Accordion.Header
                      className="accordion-header"
                      id="headingThree"
                    >
                      Tailored Solutions
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>
                      Our consultants at KAISPE understand that every business is unique, and thats why we take a tailored approach to our NetSuite implementations. In order to provide solutions that are unique to our clients demands, we work together with them to fully comprehend their processes and individual needs.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item
                    eventKey="3"
                    className="accordion-item fade_bottom_3"
                  >
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFour"
                    >
                      Results-driven Approach
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>
                      At KAISPE, we are focused on delivering results for our clients. Our pro team is committed to helping you achieve your business goals through your NetSuite implementation, whether thats improving efficiency, reducing costs, or driving growth.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item
                    eventKey="3"
                    className="accordion-item fade_bottom_3"
                  >
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFour"
                    >
                      Strong Customer Service
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>
                      Our customer support team is dedicated to giving our clients the best possible service. The team responds to inquiries, provides guidance, and addresses any issues that may arise during NetSuite implementation.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
          <Image
            priority
            width={94}
            height={62}
            className="faq__img6-1"
            src={imgsBg41}
            alt="Shape"
          />
          <Image
            priority
            width={134}
            height={178}
            className="faq__img6-2"
            src={imgsBg42}
            alt="Shape"
          />
        </div>
      </section>
    </>
  );
};

export default StartupAgencyFaq;
