import { useEffect, useRef } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import Team11 from "../../../public/assets/imgs/team/1.jpg";
import Team12 from "../../../public/assets/imgs/team/2.jpg";
import Team13 from "../../../public/assets/imgs/team/3.jpg";
import Team14 from "../../../public/assets/imgs/team/4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link.js";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";

const Team1 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  if (typeof window !== "undefined") {
    document.addEventListener("mousemove", mousemoveHandler);
  }
  function mousemoveHandler(e) {
    let team_cursor = document.getElementById("team_cursor");
    const target = e.target;
    let tHero = gsap.context(() => {
      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });
      let t2 = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });

      // Team Page Team Cursor
      if (target.closest(".team__slider")) {
        tl.to(
          team_cursor,
          {
            opacity: 1,
            ease: "power4.out",
          },
          "-=0.3"
        );
      } else {
        t2.to(
          team_cursor,
          {
            opacity: 0,
            ease: "power4.out",
          },
          "-=0.3"
        );
      }
    });
    return () => tHero.revert();
  }
  return (
    <>
      <section className="team__area-6">
        <div className="container line pt-120">
          <span className="line-3"></span>

          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 offset-xxl-2 offset-xl-3">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  Custom Development
                </h2>
                <h4>
                  Extend the functionality of your business applications with
                  custom development services to further improve the ROI
                </h4><br/>
                <p>
                  The decision to upgrade your current application version can
                  be a difficult choice. KAISPE can help you leverage the
                  upgrade benefits. We can show you how upgrades deliver
                  improved functionality and other important features that you
                  shouldn’t ignore, at least not long term.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container line pt-150">
          <div className="line-3"></div>
        </div>

        <div className="team__join-btn">
          <div className="btn_wrapper">
            <Link href="/contact" className="wc-btn-primary btn-item btn-hover">
              <span></span> Join our <br />
              talented team
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
      <section className="team__btm">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper pt-130 pb-140 text-anim">
                <h2 className="sec-title title-anim">
                  Your digital products & services ensured by our talented team
                </h2>
                <p>
                  A hybrid team with hybrid culture. More than 20 people,
                  including designers, engineers, creatives, thinkers, creative
                  table and media experts always looking from a new perspective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team1;
