import Link from "next/link";

const CreativeAgencyCTA = () => {
  return (
    <>
      <section className="cta__area cta__area-7 pt-130" style={{marginBottom:"100px"}}>
        <div className="container pb-110">
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content">
                {/* <p className="cta__sub-title">Work with us</p> */}
                <h2 className="cta__title title-anim">
                Why Choose Microsoft Dynamics 365 for Retail
                </h2>
                <div className="btn_wrapper">
                  <Link
                    href="https://info.microsoft.com/rs/157-GQE-382/images/EN-GB-Whitepaper%20-%20Why%20choose%20Dynamics%20365%20for%20Retail.pdf"
                    target="_blank"
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span>Download{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeAgencyCTA;
