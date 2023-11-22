import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/1/1.jpg";
import Service12 from "../../../public/assets/imgs/service/1/2.png";
import Service13 from "../../../public/assets/imgs/service/1/3.png";
import Service14 from "../../../public/assets/imgs/service/1/4.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyService = () => {
  const [activeList, setActiveList] = useState(1);
  const [activeImg, setActiveImg] = useState(1);
  const [activeShape, setActiveShape] = useState(1);

  const serviceList = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let listItem = serviceList.current.children;
      console.log(listItem);
      for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener("mousemove", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveImg(parseInt(service_id));
          setActiveShape(parseInt(service_id));

          if (service_id != 1) {
            setActiveList(0);
          }
        });

        listItem[i].addEventListener("mouseout", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveList(parseInt(service_id));
        });
      }

      let tHero = gsap.context(() => {
        let home1_services = gsap.utils.toArray(".animation_home1_service");
        let service__number = gsap.utils.toArray(
          ".animation_home1_service .service__number span"
        );
        let service__title = gsap.utils.toArray(
          ".animation_home1_service .service__title"
        );
        let service__text = gsap.utils.toArray(
          ".animation_home1_service .service__text p"
        );
        let service__link = gsap.utils.toArray(
          ".animation_home1_service .service__link p"
        );

        home1_services.forEach((service, i) => {
          gsap.set(
            [
              service__number[i],
              service__title[i],
              service__text[i],
              service__link[i],
            ],
            { opacity: 0, x: -50 }
          );

          let home1ServiceTl = gsap.timeline({
            scrollTrigger: {
              trigger: service,
              start: "top center+=300",
              end: "bottom bottom",
              markers: false,
            },
          });

          home1ServiceTl.to(service__number[i], {
            x: 0,
            opacity: 1,
            duration: 1.2,
          });
          home1ServiceTl.to(
            service__title[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
          home1ServiceTl.to(
            service__text[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
          home1ServiceTl.to(
            service__link[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area pt-110 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="sec-title-wrapper wrap">
                <h3 className="sec-title title-anim">
                  Dynamics 365 Customer Engagement Features & Modules
                </h3>
              </div>
            </div>
          </div>

          <div className="service__list-wrapper">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="service__list" ref={serviceList}>
                    <div className="service__item animation_home1_service">
                      <div className="service__number">
                        <span>01</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">Sales</h4>
                      </div>
                      <div className="" style={{ width: "700px" }}>
                        <p style={{ color: "grey" }}>
                          This module, with its AI abilities, helps
                          organizations manage their sales process, from lead
                          generation to opportunity management and closing
                          deals. It includes features such as lead and
                          opportunity tracking, product catalogs, quote
                          management, and sales forecasting.
                        </p>
                      </div>
                    </div>
      

                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>02</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">Customer <br/>Service</h4>
                      </div>
                      <div className="" style={{ width: "700px" }}>
                        <p style={{ color: "grey" }}>
                          It enables organizations to manage customer inquiries
                          and requests through various channels such as phone,
                          email, chat, and social media. It includes features
                          such as knowledge management, case management, and
                          service level agreement (SLA) management.
                        </p>
                      </div>
                     
                    </div>
                
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>03</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">Field Service</h4>
                      </div>
                      <div className="" style={{ width: "700px" }}>
                        <p style={{ color: "grey" }}>
                          It is designed for organizations that provide field
                          services, such as installation, repair, and
                          maintenance. It includes features such as scheduling
                          and dispatching, resource management, work order
                          management, and inventory management.
                        </p>
                      </div>
                    
                    </div>
                 
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>04</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Project Service Automation
                        </h4>
                      </div>
                      <div className="" style={{ width: "700px" }}>
                        <p style={{ color: "grey" }}>
                          It is for organizations that manage projects for their
                          customers, such as consulting firms or construction
                          companies. It includes features such as project
                          planning, resource management, time and expense
                          tracking, and project analytics.
                        </p>
                      </div>
                    
                    </div>
                 
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>05</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">Marketing</h4>
                      </div>
                      <div className="" style={{ width: "700px" }}>
                        <p style={{ color: "grey" }}>
                          The marketing module is for organizations managing
                          their marketing campaigns. From email marketing to
                          social media and events, it includes features such as
                          lead nurturing, segmentation, campaign management, and
                          marketing analytics.
                        </p>
                      </div>
                    
                    </div>
                  
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>06</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">Customer Insights</h4>
                      </div>
                      <div className="" style={{ width: "700px" }}>
                        <p style={{ color: "grey" }}>
                          This module helps organizations gain a better
                          understanding of their customers by combining data
                          from various sources such as Dynamics 365 and external
                          sources. It includes features such as customer
                          profiling, segmentation, and insights generation.
                        </p>
                      </div>
                      
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

export default DigitalAgencyService;
