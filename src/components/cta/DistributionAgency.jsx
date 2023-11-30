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
                How blockchain will transform the modern supply chain
                </h2>
                <div className="btn_wrapper">
                  <Link
                    href="https://www.kaispe.com/wp-content/uploads/2022/05/Build-a-Resilient-Supply-Chain_How-blockchain-will-transform.pdf"
                    target="_blank"
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span>Read More{" "}
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
