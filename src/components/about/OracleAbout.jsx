import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "@/plugins";
import Link from "next/link.js";
import About31 from "../../../public/assets/imgs/about/3/1.jpg";
import Image from "next/image.js";

gsap.registerPlugin(ScrollSmoother);

const DigitalMarketingAbout = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="about__area-3" style={{ marginBottom: "100px" }}>
        <div className="container pt-140 pb-110">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="about__img-3">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={About31}
                  alt="About Thumbnail"
                  data-speed="auto"
                  className="smootherReset768"
                />
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                {/* <h2 className="sec-sub-title title-anim">Who We Are</h2> */}
                <h3 className="sec title-anim" style={{ color: "white" }}>
                  Implementation, Customization, and Rescues - Get it all under
                  the Corporation of KAISPE for Oracle NetSuite
                </h3>
              </div>
              <div className="sec-text-wrapper">
                <div className="sec-text text-anim">
                  <p>
                    KAISPE specializes in guiding businesses toward Oracle
                    NetSuite success. Our expert consultants offer end-to-end
                    services tailored to your unique needs. From understanding
                    your business needs to implement the right suite scripts for
                    your company, we have all covered. Over half of all NetSuite
                    customers come to us after experiencing a failed
                    implementation, which is why we take a comprehensive and
                    agile approach to ensure your success. With a deep
                    understanding of NetSuite implementation, we work closely
                    with a custom plan for Oracle net suite development that
                    aligns with your goals and integrates seamlessly with your
                    IT infrastructure. Choose KAISPE for a tailored solution
                    that streamlines your processes and accelerates growth.
                  </p>
                  <div className="btn_wrapper">
                    <Link
                      className="wc-btn-light btn-hover btn-item"
                      href="/about"
                    >
                      <span></span> Explore Us{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
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

export default DigitalMarketingAbout;
