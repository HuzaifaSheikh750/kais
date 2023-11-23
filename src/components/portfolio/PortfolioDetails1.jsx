import Link from "next/link";
import Detail1 from "../../../public/assets/imgs/portfolio/detail/1.jpg";
import Detail2 from "../../../public/assets/imgs/portfolio/detail/2.jpg";
import Detail3 from "../../../public/assets/imgs/portfolio/detail/3.jpg";
import Detail4 from "../../../public/assets/imgs/portfolio/detail/4.jpg";
import Detail5 from "../../../public/assets/imgs/portfolio/detail/5.jpg";
import Detail6 from "../../../public/assets/imgs/portfolio/detail/6.jpg";
import Detail7 from "../../../public/assets/imgs/portfolio/detail/7.jpg";
import DetailShape from "../../../public/assets/imgs/portfolio/detail/shape.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import animationCharCome from "@/lib/utils/animationCharCome";

const PortfolioDetails1 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="portfolio__detail" style={{ marginBottom: "100px" }}>
        <div className="portfolio__detail-content">
          <div className="container g-0 line pt-140">
            <span className="line-3"></span>

            <div className="block-content">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <h2 className="portfolio__detail-title title-anim">
                    No matter the industry, you can now build agile business
                    processes to innovate
                  </h2>
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="portfolio__detail-text">
                    <p>
                      Many businesses find themselves held back by outdated
                      business applications, especially when they fail to keep
                      up with changing technologies and user demand.
                    </p>
                    <p>
                      That's where Microsoft Power Platform comes in. With Power
                      Platform, businesses can unlock the power of agility. They
                      get the power to modernize their processes and automate
                      wherever possible. By streamlining business processes,
                      business users can become more productive and efficient.
                      You can now have more free time for innovation and growth.
                    </p>

                  </div>
                </div>
              </div>
            </div>

            <div className="block-thumb">
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={Detail2}
                alt="Portfolio Image"
                // data-speed="0.5"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetails1;
