import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Portfilio21 from "../../../public/assets/imgs/portfolio/2/1.jpg";
import Portfilio22 from "../../../public/assets/imgs/portfolio/2/2.jpg";
import Portfilio23 from "../../../public/assets/imgs/portfolio/2/3.jpg";
import Portfilio24 from "../../../public/assets/imgs/portfolio/2/4.jpg";
import Portfilio25 from "../../../public/assets/imgs/portfolio/2/5.jpg";
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
      <section className="portfolio__area-2" style={{marginBottom:"100px"}}>
        <div className="container g-0  pt-100 pb-140" >
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper text-anim">
                <div>
                  <h2 className="title-anim sec-title-6">
                    Why choose KAISPE as Dynamics 365 Finance and Operations
                    implementation partner
                  </h2>
                </div>
                <p className="" style={{ fontSize: "20px" }}>
                  As a leading Microsoft Dynamics 365 implementation partner,
                  KAISPE has a strong reputation for delivering successful
                  solutions that meet the unique needs of its clients. Here are
                  some reasons why you may want to consider KAISPE as your
                  implementation partner for Dynamics 365 Finance and
                  Operations:
                </p>
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
                    <h2 className="sec-title">
                      {" "}
                      <Link href="/portfolio-details">
                        Expertise: <span></span>
                      </Link>
                    </h2>
                    <p>
                      KAISPE has a team of experienced consultants with in-depth
                      knowledge of Microsoft Dynamics 365 Finance and Operations
                      and its associated modules. They have implemented
                      solutions for a wider range of businesses, from startups
                      and mid-sized to large enterprises and across various
                      industries.
                    </p>
                    <div className="btn-common-wrap">
                      <Link href="/portfolio-details" className="btn-common">
                        View details <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio22}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      <Link href="/portfolio-details">
                        Customer <span>Focus</span>
                      </Link>
                    </h2>
                    <p>
                      Our D365 experts take a customer-focused approach to
                      implementation, working closely with clients to understand
                      their business requirements and tailor the solution to
                      their specific needs. They prioritize communication and
                      transparency throughout the implementation process to
                      ensure that their clients are always informed and in
                      control.
                    </p>
                    <div className="btn-common-wrap">
                      <Link href="/portfolio-details" className="btn-common">
                        View details <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio23}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      {" "}
                      <Link href="/portfolio-details">
                        Project
                        <span>Management</span>
                      </Link>
                    </h2>
                    <p>
                      KAISPE has a structured approach to project management,
                      with a focus on setting clear goals and timelines,
                      managing risks, and ensuring that the project stays on
                      track and within budget. They use industry best practices
                      and proven methodologies to ensure that the project is
                      completed on time and to a high standard.
                    </p>
                    <div className="btn-common-wrap">
                      <Link href="/portfolio-details" className="btn-common">
                        View details <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio24}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      {" "}
                      <Link href="/portfolio-details">
                        Support and
                        <span>Maintenance</span>
                      </Link>
                    </h2>
                    <p>
                      KAISPE offers ongoing support and maintenance services to
                      help their clients keep their Dynamics 365 solutions
                      running smoothly. They are available to help with any
                      issues that may arise and can make updates and changes to
                      the system as needed.
                    </p>
                    <div className="btn-common-wrap">
                      <Link href="/portfolio-details" className="btn-common">
                        View details <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio25}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      {" "}
                      <Link href="/portfolio-details">
                        Technology <span>Expertise</span>
                      </Link>
                    </h2>
                    <p>
                      In addition to Dynamics 365 implementation, KAISPE’s D365
                      pro team also has expertise in other technologies that can
                      complement and extend the capabilities of Dynamics 365,
                      such as Power BI, Power Apps, and Azure.
                    </p>
                    <div className="btn-common-wrap">
                      <Link href="/portfolio-details" className="btn-common">
                        View details <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>

            <div className="swiper-pagination circle-pagination right"></div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DesignStudioProtfolio;
