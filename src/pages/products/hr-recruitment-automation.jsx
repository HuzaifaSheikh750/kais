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
        <title>Hr Recruitment Automation | KAISPE</title>
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
                      HR Recruitment Automation
                    </h2>
                    <h3
                      className="team__member-role-7 animation__char_come"
                      ref={charAnim2}
                    >
                    </h3>
                    <p>
                      Say technology will play a larger role in their hiring
                      process this year—and we can expect that 100% of
                      recruitment departments will rely on automation to
                      streamline hiring processes sooner rather than later.
                      Explore KAISPE HR Recruitment Automation solution.
                    </p>
                    <p>
                      KAISPE HR Recruitment Automation solution helps customers
                      gain productivity by automating the end-to-end process
                      from receiving candidate profiles to shortlisting,
                      scheduling interviews, and finalizing the candidate
                      selection. Our solution greatly reduces the manual
                      repetitive effort the (HR Recruitment Automation) HR
                      department put on human resource hiring. This helps them
                      to focus on other key HR functions like employee
                      engagements, compensation management, training, and
                      development, etc.
                    </p>
                  </div>

                  <div className="btn_wrapper">
                    <Link
                      href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispe1627555526352.ksphrrec?tab=Overview"
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
