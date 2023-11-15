import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/1.jpg";
import Service12 from "../../../public/assets/imgs/service/2.jpg";
import Service13 from "../../../public/assets/imgs/service/3.jpg";
import Service14 from "../../../public/assets/imgs/service/4.jpg";
import Service15 from "../../../public/assets/imgs/service/5.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Service1 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          gsap.to(".service__list-6", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".service__list-6",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
            },
          });

          gsap.to(".service__image-wrap", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".mid-content",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
              markers: false,
            },
          });

          let service_images = gsap.utils.toArray(".service__image");
          let service_imagess = gsap.utils.toArray(".service__image img");
          let service_items = gsap.utils.toArray(".service__item-6");

          if (service_items) {
            service_items.forEach((image, i) => {
              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: image,
                  scrub: 1,
                  start: "top top-=600",
                  markers: false,
                },
              });
              tl.to(service_images[i], {
                zIndex: "1",
              });
              tl.to(
                service_imagess[i],
                {
                  opacity: 0,
                  duration: 1,
                  scale: 1.2,
                  ease: "power4.out",
                },
                "-=1"
              );
            });
          }

          let navItems = gsap.utils.toArray(".service__list-6 li a");
          if (navItems) {
            navItems.forEach((nav) => {
              nav.addEventListener("click", (e) => {
                e.preventDefault();
                const ids = nav.getAttribute("href");
                gsap.to(window, {
                  duration: 0.5,
                  scrollTo: ids,
                  ease: "power4.out",
                });
              });
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-6">
        <div className="container">
          <div className="row inherit-row">
            <div className="col-xxl-12">
              <div className="content-wrapper">
                <div className="left-content">
                  <ul className="service__list-6">
                    <li>
                      <a href="#service_1">
                        Integration <br />
                        
                      </a>
                    </li>
                    <li>
                      <a href="#service_2">
                        Upgrade <br />
                        
                      </a>
                    </li>
                    <li>
                      <a href="#service_3">
                        Custom  <br />
                        Development
                      </a>
                    </li>
                    <li>
                      <a href="#service_4">
                        Application Health <br /> Check
                      </a>
                    </li>
                    <li>
                      <a href="#service_5">
                        Integration <br />
                        
                      </a>
                    </li>
                    <li>
                      <a href="#service_6">
                        Support <br /> 
                      </a>
                    </li>
                    <li>
                      <a href="#service_7">
                        Mobile/Web App <br />
                        Development 
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mid-content">
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service11}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service12}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service13}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service14}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service15}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service14}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service14}
                      alt="Service Image"
                    />
                  </div>
                </div>

                <div className="right-content">
                  <div className="service__items-6">

                    <div
                      className="service__item-6 has__service_animation"
                      id="service_1"
                      data-secid="1"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service11}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Implementation
                        </h2>
                        <p>
                        Successful organizations equip their people with the right technology to do 
                        more! As a leading expert in software technologies, KAISPE is helping out 
                        companies leverage the latest advancements to maximize their investments 
                        in technology.
                        </p>
                        <ul>
                          <li>+ API Development</li>
                          <li>+ WordPress</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                          <li>+ JavaScript</li>
                          <li>+ Fluter Framework</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/services/implementation"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_2"
                      data-secid="2"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service12}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page" >
                        <h2 className="service__title-6">
                          Upgrade
                        </h2>
                        <p>
                        The decision to upgrade your current application version can be a difficult 
                        choice. KAISPE can help you leverage the upgrade benefits. We can show you 
                        how upgrades deliver improved functionality and other important features 
                        that you shouldn’t ignore, at least not long term.
                        </p>
                        <ul>
                          <li>+ API Development</li>
                          <li>+ WordPress</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                          <li>+ JavaScript</li>
                          <li>+ Fluter Framework</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/services/upgrade"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_3"
                      data-secid="3"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service13}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Custom Development
                        </h2>
                        <p>
                        The decision to upgrade your current application version can be a difficult choice. 
                        KAISPE can help you leverage the upgrade benefits. We can show you how upgrades 
                        deliver improved functionality and other important features that you shouldn’t 
                        ignore, at least not long term.
                        </p>
                        <ul>
                          <li>+ API Development</li>
                          <li>+ WordPress</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                          <li>+ JavaScript</li>
                          <li>+ Fluter Framework</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/services/custom-development"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_4"
                      data-secid="4"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Application Health Check
                        </h2>
                        <p>
                        In-depth analysis of your existing environment and generate a comprehensive 
                        report to identify the performance bottlenecks along with recommendations 
                        on how to resolve them.
                        </p>
                        <ul>
                          <li>+ API Development</li>
                          <li>+ WordPress</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                          <li>+ JavaScript</li>
                          <li>+ Fluter Framework</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/services/application-health-check"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_5"
                      data-secid="5"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service15}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Integration
                        </h2>
                        <p>
                        With businesses moving toward digitization, KAISPE can help your business 
                        connect legacy, modern, and complex business applications more easily and 
                        quickly by providing integrations using standard and custom connectors.
                        </p>
                        <ul>
                          <li>+ API Development</li>
                          <li>+ WordPress</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                          <li>+ JavaScript</li>
                          <li>+ Fluter Framework</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/services/integration"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_6"
                      data-secid="6"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Support
                        </h2>
                        <p>
                        We have the resources at your fingertips when you need them. You can also stay up to 
                        date, either way, leveling up is just one click away. Our KAISPE support team is ready 
                        to calculate the cost according to the software and its underlying infrastructure, 
                        the extent of support and maintenance required, and the preferred pricing model.
                        </p>
                        <ul>
                          <li>+ API Development</li>
                          <li>+ WordPress</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                          <li>+ JavaScript</li>
                          <li>+ Fluter Framework</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/services/support"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_7"
                      data-secid="7"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Mobile/Web App Development
                        </h2>
                        <p>
                        With more than a decade-long experience, we help customers design and build high 
                        quality modern digital apps, enabling seamless user experiences across all modern 
                        platforms and devices.
                        </p>
                        <ul>
                          <li>+ API Development</li>
                          <li>+ WordPress</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                          <li>+ JavaScript</li>
                          <li>+ Fluter Framework</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/services/mobile-web-development"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
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

export default Service1;
