import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import { useEffect, useRef } from "react";
import TeamDetailsPic from "../../../public/assets/imgs/team/detail.jpg";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";
import Link from "next/link";

const TeamDetails = () => {
  const charAnim = useRef();
  const charAnim2 = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    animationCharCome(charAnim2.current);
  }, []);

  return (
    <div>
      <Head>
        <title>Purchase Requisition App | KAISPE</title>
        <meta name="description" content="Team Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <section className="team__detail" style={{ marginBottom: "100px" }}>
            <div className="container line pb-140">
              <div className="line-3"></div>
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 offset-lg-0 offset-md-2">
                  <div className="team__member-img">
                    <Image
                      priority
                      style={{ width: "100%", height: "102%" }}
                      src={TeamDetailsPic}
                      alt="Team Member Picture"
                      data-speed="0.5"
                    />
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                  <div className="sec-title-wrapper pt-120">
                    <h2
                      className="team__member-name-7 animation__char_come"
                      ref={charAnim}
                    >
                      Purchase Requisition
                    </h2>
                    <h3
                      className="team__member-role-7 animation__char_come"
                      ref={charAnim2}
                    >
                      Transform your Procurement Process with Purchase
                      Requisition App
                    </h3>
                    <p>
                      Simplify purchasing, reduce costs, and improve control
                      with our easy-to-use solution. With our app, customers can
                      easily raise, review, and manage purchase requisitions
                      from a single location, all while on the go.
                    </p>
                    <p>
                      Many organizations rely on ERP software to manage their
                      employee purchase requisition processes. However, these
                      systems can often be complicated to use and overwhelming
                      for end-users due to their extensive feature sets.
                      KAISPE Purchase Requisition App is designed to simplify
                      this process, offering a user-friendly and intuitive
                      cloud-based solution. With our app, customers can easily
                      raise, review, and manage purchase requisitions from a
                      single location, all while on the go
                    </p>
                  </div>

                  <div className="btn_wrapper">
                    <Link
                      href="https://prapp.kaispe.com/"
                      className="wc-btn-primary btn-hover btn-item"
                      style={{ backgroundColor: "#FFD800", color: "#000" }}

                    >
                      <span></span>Learn More{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default TeamDetails;
