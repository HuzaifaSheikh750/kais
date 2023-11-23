import Link from "next/link";
import { useEffect, useRef } from "react";
import VideoFrame from "../../../public/assets/imgs/essential-img/video-frame.png";
import SvgStar from "../../../public/assets/imgs/essential-img/svgstar.png";
import Shape24 from "../../../public/assets/imgs/shape/24.png";
import Image from "next/image";

const ModernAgencySingleImage = () => {
  const hoverImage = useRef();
  const hoverImage2 = useRef();
  const hoverWrap = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hover_8_wrap = hoverWrap.current.children;
      const h8_wrap_len = hover_8_wrap.length;

      if (h8_wrap_len == 1) {
        function showCase8Func(event, hover_8_wrap) {
          const contentBox = hover_8_wrap[0].getBoundingClientRect();
          const dx = event.pageX;
          const dy = event.clientY - contentBox.y;
          hoverImage.current.style.transform = `translate(${dx}px, ${dy}px)`;
        }
        hover_8_wrap[0].addEventListener("mousemove", (event) => {
          setInterval(showCase8Func(event, hover_8_wrap), 1000);
          hoverImage.current.classList.add("active");
        });
        hover_8_wrap[0].addEventListener("mouseout", (event) => {
          hoverImage.current.classList.remove("active");
        });
      }

      if (h8_wrap_len == 2) {
        function showCase8Func(event, hover_8_wrap) {
          const contentBox = hover_8_wrap[0].getBoundingClientRect();
          const dx = event.pageX;
          const dy = event.clientY - contentBox.y;
          hoverImage.current.style.transform = `translate(${dx}px, ${dy}px)`;
        }
        hover_8_wrap[0].addEventListener("mousemove", (event) => {
          setInterval(showCase8Func(event, hover_8_wrap), 1000);
          hoverImage.current.classList.add("active");
        });
        hover_8_wrap[0].addEventListener("mouseout", (event) => {
          hoverImage.current.classList.remove("active");
        });

        function showCase8Func2(event, hover_8_wrap) {
          const contentBox = hover_8_wrap[1].getBoundingClientRect();
          const dx = event.pageX;
          const dy = event.clientY - contentBox.y;
          hoverImage2.current.style.transform = `translate(${dx}px, ${dy}px)`;
        }
        hover_8_wrap[1].addEventListener("mousemove", (event) => {
          setInterval(showCase8Func2(event, hover_8_wrap), 1000);
          hoverImage2.current.classList.add("active");
        });
        hover_8_wrap[1].addEventListener("mouseout", (event) => {
          hoverImage2.current.classList.remove("active");
        });
      }
    }
  }, []);
  return (
    <>
      <div className="single__image-8 cta__area cta__area-7 pt-130 pb-100 text-center sp-x" style={{marginBottom:"100px"}}>
        <div className="col-lg-10 text-center m-auto">
          <div className="singlecontent">
            <div className="hover_8_wrap">
              <h2 className="tech_title fade_bottom_4" ref={hoverWrap} style={{color:"white"}}>
              Are you ready to take your business to new heights? 
              </h2>
              {/* <div
                className="hover_8_img"
                style={{
                  backgroundImage: "url(assets/imgs/portfolio/detail/7.jpg)",
                }}
                ref={hoverImage}
              ></div>
              <div
                className="hover_8_img_2"
                style={{
                  backgroundImage: "url(assets/imgs/portfolio/detail/6.jpg)",
                }}
                ref={hoverImage2}
              ></div> */}
            </div>
            <p className="single_dis pb-110 fade_bottom_4">
            KAISPE, your trusted Microsoft solutions provider, is here to help. Whether you're looking to streamline your workflows, gain valuable insights, or accelerate your development time. KAISPE and Microsoft Power Platform have got you covered. 
              So, what are you waiting for? Take the first step towards success. Contact KAISPE today to see how Microsoft Power Platform can transform your business! 
            </p>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernAgencySingleImage;
