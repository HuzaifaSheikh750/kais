import Image from "next/image";
import Shape1 from "../../../public/assets/imgs/home-7/shape-1.png";
import Shape2 from "../../../public/assets/imgs/home-7/shape-2.png";
import Shape3 from "../../../public/assets/imgs/home-7/shape-3.png";

const ServiceV6Hero = () => {
  return (
    <>
      <section className="hero__area-7">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__title-wrap-7">
                <h1 className="hero__title-7">
                  Company{" "}
                  {/* <Image
                    priority
                    width={135}
                    style={{ height: "auto" }}
                    src={Shape1}
                    alt="shape"
                  />{" "} */}
                 
                  <Image
                    priority
                    width={125}
                    style={{ height: "auto" }}
                    src={Shape2}
                    alt="shape"
                  />
                </h1>
                {/* <h4>
                  Expand your business horizon with custom built mobile and web
                  apps
                </h4> */}
              </div>
              {/* <div className="hero__text-7">
                <h2 className="about">service</h2>
                <p>
                  With more than a decade-long experience, we help customers
                  design and build high quality modern digital apps, enabling
                  seamless user experiences across all modern platforms and
                  devices.
                </p>
              </div> */}
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

export default ServiceV6Hero;
