import Link from "next/link";
import Thumb41 from "../../../public/assets/imgs/thumb/4/1.png";
import Shape21 from "../../../public/assets/imgs/shape/21.png";
import Shape22 from "../../../public/assets/imgs/shape/22.png";
import Image from "next/image";

const StartupAgencyCTA = () => {
  return (
    <>
      <div className="cta__area-4" style={{marginTop:"-100px"}}>
        <div className="container g-0 line_4 pb-150">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="cta__inner-4">
            <div className="row">
=
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                <div className="cta__content-4">
                  <h2 className="cta__title-4 title-anim" style={{paddingBottom:"50px"}}>
                  About Microsoft Dynamics 365 Supply Chain Management
                  </h2>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="cta__content-4 text-anim" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <Link className="btn-started" target="_blank" href="/solutions/microsoft-dynamics-365-supply-chain">
                    Learn More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <Image
              priority
              width={150}
              style={{ height: "auto" }}
              src={Shape21}
              alt="shape Image"
              className="cta-shape"
            />
            <Image
              priority
              width={60}
              height={38}
              src={Shape22}
              alt="shape Image"
              className="cta-shape-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StartupAgencyCTA;
