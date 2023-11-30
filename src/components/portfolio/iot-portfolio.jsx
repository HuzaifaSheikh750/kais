import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Portfilio21 from "../../../public/assets/imgs/portfolio/2/1.jpg";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";

const DesignStudioProtfolio = () => {
  return (
    <>
      <section className="portfolio__area-2">
        <div className="container g-0 line pt-100 pb-140">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper text-anim">
                <div>
                  <h2 className="title-anim sec-title-33">
                    What is Microsoft <span>Azure IoT</span>
                  </h2>
                </div>
                {/* <p className="sec-text">
                    Worked with global brands & agency at the intersection of flat
                    design and digital technology.
                    </p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__slider-2">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            spaceBetween={0}
            effect={"fade"}
            slidesPerView={1}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function (i, className) {
                return `
                <button class="${className}">
                  <svg class="circle-progress"><circle class="circle-origin" r="24.5" cx="25" cy="25"></circle></svg><span></span>
                </button>
              `;
              },
            }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio21}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    {/* <h2 className="sec-title">
                      {" "}
                      <Link href="/portfolio-details">
                        What is Microsoft Azure <span>IO</span>
                      </Link>
                    </h2> */}
                    <p>
                      The Internet of Things (IoT) describes the practice of
                      interconnecting the physical world with cloud services
                      through the use of electronic devices, software, and
                      sensors.
                    </p>
                    <p>
                      Microsoft Azure IoT provides a mature platform with which
                      to satisfy and automate many of the customer asset
                      monitoring and maintaining requirements. This greatly
                      reduces time to market and heightens the chances of
                      deploying a successful IoT solution.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>

            {/* <div className="swiper-pagination circle-pagination right"></div> */}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DesignStudioProtfolio;
