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
        <title>AutoRecruit | KAISPE</title>
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
                      AutoRecruit
                    </h2>
                    <h3
                      className="team__member-role-7 animation__char_come"
                      ref={charAnim2}
                    >
                      Smart Recruitment, Hire Fast with AutoRecruit
                    </h3>
                    <p>
                      From identifying talent to mapping behavioral assessments
                      for candidates, AutoRecruit is your one-stop solution for
                      hiring. Experience the future of talent acquisition today
                      with AutoRecruit.
                    </p>
                    <p>
                      Automation has revolutionized every other industry and
                      sector including human resource department. Artificial
                      Intelligence apps in HR are increasingly being used for
                      recruitment. Many businesses are using this new generation
                      of AI-driven recruiting tools.
                    </p>
                  </div>

                  <div className="btn_wrapper">
                    <Link
                      href="https://ar.kaispe.com/"
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
