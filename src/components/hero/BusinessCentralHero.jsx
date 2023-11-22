import Image from "next/image";
import Shape1 from "../../../public/assets/imgs/home-7/shape-1.png";
import Shape2 from "../../../public/assets/imgs/home-7/shape-2.png";
import Shape3 from "../../../public/assets/imgs/home-7/shape-3.png";

const SolutionHero = () => {
  return (
    <>
      <section className="hero__area-7">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__title-wrap-7">
                <h1 className="hero__title-7">
                  Microsoft Dynamics 365{" "}
                  {/* <Image
                    priority
                    width={135}
                    style={{ height: "auto" }}
                    src={Shape1}
                    alt="shape"
                  />{" "} */}
                  Business Central{" "}
                  {/* <Image
                    priority
                    width={125}
                    style={{ height: "auto" }}
                    src={Shape2}
                    alt="shape"
                  /> */}
                </h1>
                <h4 style={{marginTop:"30px"}}>
                Give Yourself a Break from All the Applications and Drive Your Business through One Solution for All - Dynamics 365 Business Central
                </h4>
              </div>
              <div className="hero__text-7">
                <h2 className="about">solution</h2>
                <p>
                Empower people across your SMB to be more collaborative, productive, and impactful using Microsoft Dynamics 365 Business Central to run your business operations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          width={320}
          style={{ height: "auto" }}
          src={Shape3}
          alt="shape"
          className="shape-1"
        />
      </section>
    </>
  );
};

export default SolutionHero;
