import { useEffect, useRef } from "react";
import Link from "next/link.js";
import Award from "../../../public/assets/imgs/about/award.png";
import Image from "next/image.js";
import animationWordCome from "@/lib/utils/animationWordCome";

const AboutHero = () => {
  const wordAnim = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
  }, []);
  return (
    <>
      <section className="hero__about">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__about-content">
                <h3 className="hero-title animation__word_come" ref={wordAnim}>
                  Looking for experts for the right implementation of MS D365
                  Commerce with guidance? KAISPE is your way to GO.
                </h3>
                <div className="hero__about-info">
                  <div className="hero__about-btn">
                    <div className="btn_wrapper">
                      <Link
                        href="/service"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> Trends & <br />
                        technology
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="hero__about-text title-anim">
                    <p>
                      At our company, we prioritize your business objectives in
                      our approach to implementing Dynamics 365 for Retail. Our
                      aim is to equip your organization with the tools and
                      skills necessary to successfully adopt and make the most
                      of new systems and capabilities. Our proven project
                      delivery methodology ensures that we maintain high-quality
                      standards, minimize risks, and optimize efficiency. It
                      enables you to maximize the value of our vertical
                      solutions and expertise.
                    </p>
                  </div>
                  {/* <div className="hero__about-award">
                    <Image
                      priority
                      width={126}
                      height={82}
                      src={Award}
                      alt="Best Studio Award"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row hero__about-row">
            <div className="col-xxl-12">
              <div className="hero__about-video">
                <video loop muted autoPlay playsInline>
                  <source src="assets/video/video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default AboutHero;
