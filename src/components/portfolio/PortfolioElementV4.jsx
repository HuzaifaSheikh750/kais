import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Portfilio31 from "../../../public/assets/imgs/portfolio/3/1.jpg";
import Portfilio32 from "../../../public/assets/imgs/portfolio/3/2.jpg";
import Portfilio33 from "../../../public/assets/imgs/portfolio/3/3.jpg";
import Portfilio34 from "../../../public/assets/imgs/portfolio/3/4.jpg";

import iot from "../../../public/assets/imgs/solution/iot.png";
import businessCentral from "../../../public/assets/imgs/solution//businessCentral.png";
import oracle from "../../../public/assets/imgs/solution/oracle.png";
import comm from "../../../public/assets/imgs/solution/comm.png";
import finance from "../../../public/assets/imgs/solution/finance.png";
import chain from "../../../public/assets/imgs/solution/chain.png";
import customerEngagement from "../../../public/assets/imgs/solution//customerEngagement.png";
import power from "../../../public/assets/imgs/solution/power.png"


import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useRef } from "react";
import animationCharCome from "@/lib/utils/animationCharCome";

const PortfolioElementV4 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="portfolio__area-3 portfolio-v4">
        <div className="container pt-100 pb-150">
          <div className="row pb-150">
            <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Our <br />
                  Solutions
                </h2>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
              <div className="blog__text">
                <p>
                  Crafting new bright brands, unique visual systems and digital
                  experience focused on a wide range of original collabs.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">
                  SOlutions
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12 portfolio__slider-3">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effectfade="true"
                loop={true}
                speed={1500}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: ".pp-prev",
                  nextEl: ".pp-next",
                }}
                pagination={{ el: ".swiper-pagination", type: "fraction" }}
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href="/solutions/microsoft-dynamics-365-finance">
                        <h3 className="portfolio__title-3">
                        Microsoft <span>Dynamics</span> 365 Finance
                        </h3>
                        
                        <Image
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={finance}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href="/solutions/microsoft-dynamics-365-supply-chain">
                        <h3 className="portfolio__title-3" style={{fontSize:"140px"}}>
                        Microsoft <span>Dynamics 365</span>  Supply Chain
                        </h3>
                          
                        <Image
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={chain}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href="/solutions/microsoft-dynamics-365-commerce">
                        <h3 className="portfolio__title-3" style={{fontSize:"145px"}}>
                        Microsoft <span>Dynamics </span>365 Commerce
                        </h3>
                      
                        <Image
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={comm}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href="/solutions/microsoft-dynamics-365-business-central">
                        <h3 className="portfolio__title-3" style={{fontSize:"130px"}}>
                        Microsoft <span> Dynamics </span> 365 Business Central
                        </h3>        

                        <Image
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={businessCentral}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href="/solutions/microsoft-dynamics-customer-engagement">
                        <h3 className="portfolio__title-3" style={{fontSize:"130px"}}>
                        Microsoft <span>Dynamics Customer</span> Engagement
                        </h3>
                        <Image
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={customerEngagement}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href="/solutions/microsoft-power-platform">
                        <h3 className="portfolio__title-3">
                        Microsoft <span>Power</span> Platform
                        </h3>
                        <Image
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={power}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href="/solutions/microsoft-azure-iot">
                        <h3 className="portfolio__title-3">
                        Microsoft <span>Azure</span> IOT
                        </h3>
                        <Image
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={iot}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href="/solutions/oracle-netsuite">
                        <h3 className="portfolio__title-3">
                        Oracle <span>NetSuite</span>
                        </h3>
                        <Image
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={oracle}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                </div>

                <div className="swiper-pagination"></div>

                <div className="swiper-btn">
                  <div style={{ cursor: "pointer" }} className="pp-prev">
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                  </div>
                  <div style={{ cursor: "pointer" }} className="pp-next">
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioElementV4;
