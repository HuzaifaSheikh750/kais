import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Service21 from "../../../public/assets/imgs/service/2/1.png";
import Service22 from "../../../public/assets/imgs/service/2/2.png";
import Service23 from "../../../public/assets/imgs/service/2/3.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ServiceElementV3 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation__services2 = gsap.utils.toArray(
          ".animation__service-2 .service__item-2"
        );
        gsap.set(animation__services2, {
          opacity: 0,
          x: -30,
        });

        if (animation__services2) {
          if (device_width < 1023) {
            animation__services2.forEach((item, i) => {
              gsap.to(item, {
                scrollTrigger: {
                  trigger: item,
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
            });
          } else {
            gsap.to(".animation__service-2 .service__item-2", {
              scrollTrigger: {
                trigger: ".animation__service-2",
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
        className="service__area-2 pt-130 pb-110"
        style={{ marginBottom: "100px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="sec-text text-anim">
                <p>
                  Having completed projects with thousands of man hours of
                  effort required, we have devised a specialized approach to
                  complete custom development for different technology
                  platforms.
                </p>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  Our Expertise with Major App Development Technologies
                </h2>
              </div>
            </div>
          </div>

          <div className="row pt-140">
            <div className="col-xxl-12">
              <div className="service__list-2 animation__service-2">
                <div className="service__item-2">
                  <div>
                    <Image
                      priority
                      width={102}
                      height={114}
                      src={Service21}
                      alt="Service Icon"
                    />
                    <h3 className="service__title-2">
                      Development Languages <br />
                      and Toolkits
                    </h3>
                    {/* <p>
                      We help brands stand out through aweful, elegant visual
                      design. Our design mainly philosophy.
                    </p> */}
                    <ul>
                      <li>+ Kotlin</li>
                      <li>+ Javascript</li>
                      <li>+ Dart</li>
                    </ul>
                  </div>
                </div>
                <div className="service__item-2">
                  <div>
                    <Image
                      priority
                      width={107}
                      height={114}
                      src={Service22}
                      alt="Service Icon"
                    />
                    <h3 className="service__title-2 ">
                      Backend Programming <br />
                      Languages
                    </h3>
                    {/* <p>
                      We help brands stand out through aweful, elegant visual
                      design. Our design mainly philosophy.
                    </p> */}
                    <ul>
                      <li>+ .Net Core</li>
                      <li>+ Node js</li>
                      <li>+ Laravel</li>
                    </ul>
                  </div>
                </div>
                <div className="service__item-2">
                  <div>
                    <Image
                      priority
                      width={112}
                      height={114}
                      src={Service23}
                      alt="Service Icon"
                    />
                    <h3 className="service__title-2">
                      Database and <br />
                      Storages
                    </h3>
                    {/* <p>
                      We help brands stand out through aweful, elegant visual
                      design. Our design mainly philosophy.
                    </p> */}
                    <ul>
                      <li>+ MongoDB</li>
                      <li>+ Firebase</li>
                      <li>+ SQL Server</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-140">
            <div className="col-xxl-12">
              <div className="service__list-2 animation__service-2">
                <div className="service__item-2">
                  <div>
                    <Image
                      priority
                      width={102}
                      height={114}
                      src={Service21}
                      alt="Service Icon"
                    />
                    <h3 className="service__title-2">
                      Platform <br />
                    </h3>
                    {/* <p>
                      We help brands stand out through aweful, elegant visual
                      design. Our design mainly philosophy.
                    </p> */}
                    <ul>
                      <li>+ FLutter</li>
                      <li>+ React</li>
                      <li>+ Angular</li>
                    </ul>
                  </div>
                </div>
                <div className="service__item-2">
                  <div>
                    <Image
                      priority
                      width={107}
                      height={114}
                      src={Service22}
                      alt="Service Icon"
                    />
                    <h3 className="service__title-2 ">
                      QA Tools <br />
                    </h3>
                    {/* <p>
                      We help brands stand out through aweful, elegant visual
                      design. Our design mainly philosophy.
                    </p> */}
                    <ul>
                      <li>+ Seleniums</li>
                      <li>+ Cypress</li>
                      <li>+ Jest</li>
                    </ul>
                  </div>
                </div>
                <div className="service__item-2">
                  <div>
                    <Image
                      priority
                      width={112}
                      height={114}
                      src={Service23}
                      alt="Service Icon"
                    />
                    <h3 className="service__title-2">
                      DevOps <br />
                    </h3>
                    {/* <p>
                      We help brands stand out through aweful, elegant visual
                      design. Our design mainly philosophy.
                    </p> */}
                    <ul>
                      <li>+ Docker</li>
                      <li>+ Kubernetes</li>
                      <li>+ Azure DevOps</li>
                    </ul>
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

export default ServiceElementV3;
