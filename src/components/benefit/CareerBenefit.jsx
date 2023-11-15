const CareerBenefit = () => {
  return (
    <>
      <section className="career__benefits job__area">
        <div className="container  g-0 pt-140 pb-150">
          <span className="line-3"></span>

          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-7">
              <ul className="career__benefits-list" >
                <li style={{color:"white"}}>
                Power Platform  <br />
                Integration
                </li>
                <li style={{color:"white"}}>
                Azure Logic  <br /> Apps
                </li>
                <li style={{color:"white"}}>
                Custom  <br />
                Service
                </li>
                <li style={{color:"white"}}>
                Excel <br /> Integration
                </li>
                <li style={{color:"white"}}>
                OData <br />
                </li>
                <li style={{color:"white"}}>
                Consume External <br /> Web Services
                </li>
              </ul>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5">
              <div className="sec-title-wrapper">
                {/* <h2 className="sec-title title-anim">
                  Global Perks & Benefits
                </h2> */}
                <p style={{color:"gre"}}>
                For Microsoft applications integration, we consume several different integration patterns based on your specific requirements:
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerBenefit;
