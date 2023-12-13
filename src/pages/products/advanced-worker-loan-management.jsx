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
        <title>Advanced Worker Loan Management App | KAISPE</title>
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
                      Worker Loan Management
                    </h2>
                    <h3
                      className="team__member-role-7 animation__char_come"
                      ref={charAnim2}
                    >
                      Empower your Employees for requesting Cash vs. Non-Cash
                      loans directly from Microsoft Dynamics 365 F&O.
                    </h3>
                    <p>
                      KAISPE Advance Worker Loan Management allows Microsoft
                      Dynamics 365 F&O customers to empower their employees to
                      apply for cash vs. non-cash loans, review the Loan
                      Management requests raised by other employees using a
                      powerful integrated solution. Workers can pay the loans as
                      part of payroll processing using a flexible payment
                      schedules and any taxation can also be applied to loan
                      benefits.
                    </p>
                    
                    {/* <p>
                      A complete solution to simplify your payroll and HR
                      procedures is provided by Dynamics 365 with FlexPayroll
                      for Payroll & HR. FlexPayroll is a highly flexible and
                      configurable solution that can be tailored to your company
                      specific needs
                    </p> */}
                  </div>

                  <div className="btn_wrapper">
                    <Link
                      href="https://appsource.microsoft.com/en-us/product/dynamics-365-for-operations/kaispe1627555526352.kspwlm?tab=Overview"
                      className="wc-btn-primary btn-hover btn-item"
                      target="_blank"
                      style={{ backgroundColor: "#FFD800", color: "#000" }}
                    >
                      <span></span>Microsoft <br/> AppSource
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
