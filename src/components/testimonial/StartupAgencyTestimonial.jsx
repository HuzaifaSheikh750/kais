import { FreeMode, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial41 from "../../../public/assets/imgs/testimonial/4/1.jpg";
import Testimonial42 from "../../../public/assets/imgs/testimonial/4/2.jpg";
import Testimonial43 from "../../../public/assets/imgs/testimonial/4/3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const StartupAgencyTestimonial = () => {
  return (
    <>
      <section className="testimonial__area-4 ">
        <div className="container g-0 line_4">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="testimonial__sec-title text-anim">
                {/* <h2 className="sec-subtile-6">Testimonials</h2> */}
                <h3 className="sec-title-6 title-anim">
                  Elevate your Financial Performance by Automating Your Finances
                </h3>
                <p>
                  Implement Dynamics 365 F&O and save time to focus on other
                  business operations.
                </p>
              </div>
            </div>
            <div className="testimonial__slider-4">
              <Swiper
                modules={[FreeMode, Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                freeMode={true}
                loop={true}
                speed={2000}
                navigation={{
                  prevEl: ".prev-button",
                  nextEl: ".next-button",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                pagination={{
                  el: ".pagination",
                  type: "fraction",
                }}
                className="swiper testimonial__slider-4"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={Testimonial41}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Enhance Financial Reporting
                        </h4>
                        <p>
                          Microsoft Dynamics 365 Finance provides real-time data
                          insights and reporting capabilities to help businesses
                          make informed decisions based on accurate financial
                          data. The system offers a range of customizable
                          reporting options and dashboards to enable businesses
                          to analyze data and identify trends quickly.
                        </p>
                        {/* <h5 className="testimonial__name-4">
                          Jessica Sherlock
                        </h5>
                        <h6 className="testimonial__role-4">
                          Manager, Oitaka{" "}
                        </h6> */}
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={Testimonial42}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Improve Cash Flow Management
                        </h4>
                        <p>
                          With advanced cash flow management features, Microsoft
                          Dynamics 365 Finance allows businesses to forecast
                          cash flow, track cash balances, and manage cash
                          transactions with ease. This helps businesses to
                          manage their finances better, make informed investment
                          decisions, and avoid cash flow disruptions.
                        </p>
                        {/* <h5 className="testimonial__name-4">Sharoon Kavin</h5>
                        <h6 className="testimonial__role-4">CEO, Sharoon</h6> */}
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={Testimonial43}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Optimize Resource Management
                        </h4>
                        <p>
                          The Resource Management module helps businesses manage
                          their resources more effectively, from personnel to
                          equipment and materials. By optimizing resource
                          allocation and scheduling, businesses can improve
                          productivity, reduce costs, and enhance their bottom
                          line.
                        </p>
                        {/* <h5 className="testimonial__name-4">Sharly Mehroon</h5>
                        <h6 className="testimonial__role-4">
                          Manager, Kavitan
                        </h6> */}
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={Testimonial41}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Increase Collaboration and Productivity
                        </h4>
                        <p>
                          Microsoft Dynamics 365 Finance offers a range of
                          collaborative tools and features, including shared
                          workspaces and document management, to streamline
                          business processes and improve productivity. This
                          allows teams to work more efficiently, share
                          information more easily, and make better decisions.
                        </p>
                        {/* <h5 className="testimonial__name-4">
                          Jessica Sherlock
                        </h5>
                        <h6 className="testimonial__role-4">
                          Manager, Oitaka{" "}
                        </h6> */}
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={Testimonial42}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">Clean Code</h4>
                        <p>
                          I am very glod happy with this theme, the website
                          loads much faster than any other theme I have used so
                          far clean code and responsive layout.
                        </p>
                        <h5 className="testimonial__name-4">Sharoon Kavin</h5>
                        <h6 className="testimonial__role-4">CEO, Sharoon</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={Testimonial43}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Instant Support
                        </h4>
                        <p>
                          In the next time I hire Axtra as they helping
                          innovators and brands through cultural insight,
                          strategiccal vision, and innovation and look too
                          beyond.
                        </p>
                        <h5 className="testimonial__name-4">Sharly Mehroon</h5>
                        <h6 className="testimonial__role-4">
                          Manager, Kavitan
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide> */}
                </div>
                <div className="testimonial__btn-4">
                  <div
                    style={{ cursor: "pointer" }}
                    className="next-button swipper-btn"
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    className="prev-button swipper-btn"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                  <div className="pagination testimonial__pagination-4">
                    <div className="pag"></div>
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

export default StartupAgencyTestimonial;
