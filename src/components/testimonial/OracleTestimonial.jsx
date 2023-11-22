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
                <h3 className="sec-title-6 title-anim">Why Oracle NetSuite?</h3>
                <p>
                  Run your business in the cloud with confidence. Empower people
                  across your SMB to be more collaborative, more productive, and
                  more impactful using Oracle NetSuite to run your business
                  operations.
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
                          More Collaboration
                        </h4>
                        <p>
                          Improve teamwork and respond faster from almost
                          anywhere by seamlessly connecting your people,
                          business processes, and customers.
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
                          More Productivity
                        </h4>
                        <p>
                          Streamline workflow and get more done with automated
                          business processes and actionable insights delivered
                          inside the productivity tools you use every day.
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
                        <h4 className="testimonial__feedback-4">More Impact</h4>
                        <p>
                          Optimize the customer journey and create a competitive
                          advantage with a personalized, engaging experience at
                          every touchpoint, from frontline to fulfillment.
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
                {/* <div className="testimonial__btn-4">
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
                </div> */}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyTestimonial;
