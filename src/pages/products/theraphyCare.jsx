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
        <title>Theraphy Care | KAISPE</title>
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
                      Theraphy Care
                    </h2>
                    <h3
                      className="team__member-role-7 animation__char_come"
                      ref={charAnim2}
                    >
                      Digitally Transform Your Theraphy Care Practice with Our
                      Modern All-In-One-Solution
                      {/* <span> Axtra</span> */}
                    </h3>
                    <p>
                      Are you tired of the administrative headaches that come
                      with running a speech therapy center? Do you want to
                      improve patient engagement and satisfaction? If so, then
                      our all-in-one, cloud-based solution for speech therapy
                      centers might be just what you need.
                    </p>
                    <p>
                      Welcome to our speech therapy app, designed to
                      revolutionize how speech therapy is delivered to patients.
                      With our app, you can now take control of your healthcare
                      journey. Besides, it gives you access to your medical
                      records, including therapy session recordings, therapist
                      notes, final assessment reports, and other valuable
                      documents, anytime and anywhere on the cloud.
                    </p>
                  </div>

                  <div className="btn_wrapper">
                    <Link
                      href="https://tcare.kaispe.com/"
                      className="wc-btn-secondary btn-hover btn-item"
                      style={{ backgroundColor: "#FFD800", color: "#000" }}

                    >
                      <span></span>Learn More{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>

                  {/* <div className="team__member-work">
                    <h4 className="work-title">Portfolio :</h4>
                    <ul>
                      <li>
                        <a href="#">Behance</a>
                      </li>
                      <li>
                        <a href="#">Dribble</a>
                      </li>
                      <li>
                        <a href="#">Meduim</a>
                      </li>
                    </ul>
                  </div> */}
                  {/* <div className="team__member-social">
                    <h4 className="work-title">Follow :</h4>
                    <ul>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-facebook-f"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-twitter"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-instagram"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-linkedin"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div> */}
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
