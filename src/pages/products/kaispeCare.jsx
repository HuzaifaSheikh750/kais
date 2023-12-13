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
        <title>kaispe Care | KAISPE</title>
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
                      Kaispe Care
                    </h2>
                    <h3
                      className="team__member-role-7 animation__char_come"
                      ref={charAnim2}
                    >
                      All Medical Data at Your Fingertips with KAISPE Care
                    </h3>
                    <p>
                      Making Health care accessible by unified and composed data
                      for both patients and doctors through one platform.
                    </p>
                    <p>
                      Empowering healthcare professionals is at the core of
                      KAISPE Care mission. By seamlessly integrating advanced
                      technology with the expertise of medical practitioners, we
                      revolutionize patient care. Our platform offers real-time
                      insights, streamlining workflows, and informed
                      decision-making. Through intuitive interfaces and
                      predictive analytics, KAISPE Care enhances diagnostics and
                      treatment planning. Its more than just a tool; its a
                      supportive companion for healthcare professionals,
                      promoting collaboration and reducing burnout. With KAISPE
                      Care, we bridge the gap between cutting-edge innovation
                      and compassionate care, ultimately leading to healthier
                      lives and a more efficient, connected healthcare
                      ecosystem.
                    </p>
                  </div>

                  <div className="btn_wrapper">
                    <Link
                      href="https://ecare.kaispe.com/"
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
