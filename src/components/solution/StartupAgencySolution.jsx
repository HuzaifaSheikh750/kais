const StartupAgencySolution = () => {
  return (
    <>
      <section className="solution__area-4">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 offset-xxl-7 col-xl-5 offset-xl-7 col-lg-6 offset-lg-6 col-md-6 offset-md-6">
              <div className="solution__content">
                {/* <h2 className="sec-subtile-6">Approch</h2> */}
                <h3 className="sec-title-6 title-anim">
                  What is Microsoft Dynamics 365 Business Central?
                </h3>
                
                <p style={{color:"white"}}>
                  Microsoft D365 Business Central is a cloud-based ERP system
                  for small and mid-sized businesses. It helps manage finances,
                  production, shipping, projects, and services. The system
                  includes Relationship Management for tracking pre-sales
                  operations and accessing data from any location. Payroll and
                  banking are linked, enabling quick responses to client
                  requests.
                </p>
                
                <ul className="solution__list title-anim">
                  <li>Project management</li>
                  <li>Organization Management</li>
                  <li>Reporting and Analysis</li>
                  <li>Supply cChain Management</li>
                  <li>Sales and Service Management</li>
                  <li>Finanacial Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencySolution;
