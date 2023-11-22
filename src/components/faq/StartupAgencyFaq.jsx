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
                Key Features and Functionalities of Microsoft Dynamics 365 Finance
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
                      Human Resources: 
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>
                      Microsoft Dynamics 365 HR is a comprehensive HR management solution that streamlines HR processes such as hiring, onboarding, payroll, benefits management, performance management, and employee engagement.
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
                      Product Information: 
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>
                      Microsoft D365 Product Information Management helps businesses manage and centralize their product data, enabling them to create, update, and publish product information across all channels.
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
                      General Ledger Functionality: 
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>
                      Microsoft Dynamics 365 General Ledger Functionality provides tools for managing a company's financial transactions, including journal entries, account reconciliations, and financial reporting.
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
                      Accounts Receivable: 
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>
                      With Microsoft Dynamics 365 Accounts Receivable, businesses can manage and automate their invoicing processes, track customer payments, and streamline collections.
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
                      Accounts Payable: 
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      <p>
                      Microsoft Dynamics 365 Accounts Payable helps businesses manage vendor invoices, automate payment processing, and track vendor payments.
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
