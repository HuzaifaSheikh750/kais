import { Accordion } from "react-bootstrap";
import ThumbFaq from "../../../public/assets/imgs/thumb/faq.jpg";
import Image from "next/image";

const ServiceDetailsFaq = () => {
  return (
    <>
      <section className="faq__area">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbFaq}
                  alt="FAQ Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__content">
                <h2 className=" title-anim">
                Microsoft Dynamics 365 Supply Chain: Benefits
                </h2>
                <p>It helps ensure business continuity by reducing costly downtime and minimizing errors in production. With its intuitive user interface and customizable mobile app, Microsoft Dynamics 365 Supply Chain empowers businesses to make data-driven decisions, streamline their operations, and stay competitive in today's rapidly changing market.</p>

                <div className="faq__list">
                  <Accordion
                    defaultActiveKey="0"
                    className="accordion"
                    id="accordionExample"
                  >
                    <Accordion.Item eventKey="0" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingOne"
                      >
                       1.	Optimize Fulfilment:
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                        •	Deliver shipments cost-effectively and on time with intelligent distributed order and transportation management systems.
<br/>•	Automate, organize, and streamline the ordering and fulfillment process with configurable machine learning-based guidance.<br/>
•	Improve productivity by streamlining inbound and outbound processes with a customizable mobile app.

                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingTwo"
                      >
                       2.	Enhance Supply Chain Visibility:
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                        •	Improve end-to-end visibility of your supply chain and predict both upstream and downstream impacts of disruptions.<br/>
•	Deliver cross-channel inventory visibility with real-time insight into product location and stock levels.<br/>
•	Gain real-time visibility of warehouse operations to manage capacity and consumption of raw materials and finished goods.

                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingThree"
                      >
                       3.	Ensure Business Continuity:
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                        •	Optimize sourcing and fulfillment strategy with a fast and sophisticated supplier qualification process.<br/>
•	Streamline procurement processes with a single application for procure-to-pay, manage contracts, onboard vendors, and monitor delivery performance.<br/>
•	Reduce costly downtime by performing predictive maintenance and enhancing resource scheduling with IoT and mixed reality.

                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFour"
                      >
                        4.	Gain Planning Agility:
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                        •	Improve demand planning with real-time visibility into day-to-day sales and marketing activities.<br/>
•	Consistently deliver products on time by optimizing supply and production planning in near real-time.<br/>
•	Improve merchandise planning by stocking the right product at the right place and time to ensure a delightful customer experience while reducing overstocks and stock-outs.

                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                   
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsFaq;
