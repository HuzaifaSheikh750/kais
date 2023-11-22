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
      <section className="team__btm">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper pt-130 pb-140 text-anim">
                <h2 className="sec-title title-anim">
                  What is Oracle NetSuite?
                </h2>
                <p>
                  Oracle NetSuite is a SaaS-based application for business
                  management. The NetSuite platform includes ERP, CRM, PSA, and
                  e-commerce capabilities. It manages core functions, including
                  finance and accounting, inventory, sales orders, and
                  procurement. Customers can also add options, including CRM for
                  sales, service and marketing automation, human resources for
                  personnel records, performance management, payroll,
                  professional services automation to plan and track projects,
                  and omnichannel commerce for online and in-store sales.
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
