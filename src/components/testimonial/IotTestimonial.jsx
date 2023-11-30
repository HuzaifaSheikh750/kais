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
      <section className="testimonial__area-4 " style={{ marginTop: "100px" }}>
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
                <h3 className="sec-title-6 title-anim">
                  Microsoft Azure IoT provides a wide variety of options to
                  fulfill industrial IoT requirements:
                </h3>
                {/* <p>
                  Implement Dynamics 365 F&O and save time to focus on other
                  business operations.
                </p> */}
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
                        <h4 className="testimonial__feedback-1" style={{marginBottom:"10px"}} >
                          Azure IoT Hub
                        </h4>
                        <p style={{textAlign:"justify"}}>
                          Azure IoT Hub This is a fully managed service that
                          allows secure and reliable communications between
                          millions of IoT devices and back-end solutions. Azure
                          IoT Hub Device Provisioning is a helper service for
                          the Azure IoT Hub that requires zero interference and
                          just-in-time provisioning, enabling users to access
                          and control millions of devices in a scalable and
                          secure manner.
                        </p>
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
                        <h4 className="testimonial__feedback-1" style={{marginBottom:"10px"}}>
                          Azure IoT Edge
                        </h4>
                        <p  style={{textAlign:"justify"}}>
                          If you need to analyze data on devices, i.e. on the
                          go, Azure IoT Edge makes it possible. It helps by
                          shifting your workload to the edge, and allowing you
                          to experience reduced inactivity, and offering you the
                          option to do work offline. In short, it delivers
                          intelligence locally by running Azure Services,
                          Artificial Intelligence (AI) and custom logic no
                          matter where you are.
                        </p>
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
                        <h4 className="testimonial__feedback-1" style={{marginBottom:"10px"}}>
                          Azure Digital Twins
                        </h4>
                        <p style={{textAlign:"justify"}}>
                          Azure Digital Twins Azure Digital Twins is a unique
                          platform that allows the users, their partners and
                          customers to create a complete digital model of any
                          physical environment, and include places, people and
                          things, as well as their relation and processes that
                          keep them connected. It helps organizations to create
                          a spatial intelligence graph that shows all
                          connections virtually, giving businesses an idea of
                          how they can improve their relations and create
                          contextually aware solutions.
                        </p>
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
                        <h4 className="testimonial__feedback-1" style={{marginBottom:"10px"}}>
                          Azure IoT Central
                        </h4>
                        <p style={{textAlign:"justify"}}>
                          Is a software that works as a service, making it easy
                          to connect, observe and manage IoT assets. It
                          simplifies the extensive setup of IoT solutions,
                          reducing the management burden, operational costs as
                          well as overheads of a typical IoT project. Therefore,
                          even if you have minimal IoT experience, Azure IoT
                          Central allows you to pursue speed over customization.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
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
