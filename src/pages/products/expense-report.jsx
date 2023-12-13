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
        <title>Expense Report App | KAISPE</title>
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
                     Expense Report
                    </h2>
                    <h3
                      className="team__member-role-7 animation__char_come"
                      ref={charAnim2}
                    >
                     Keep Your Expenses Organized
                    </h3>
                    <p>
                    Take Control of Your Expenses with Expense Report App. From chaos to order: the ultimate expense management tool. “The expense management app also provides real-time visibility into expense data, which can help businesses identify trends, monitor spending, and make better-informed decisions.”
                    </p>
                    <p>
                    KAISPE Expense Report app is a software application that helps businesses manage and track their travel and other expenses more efficiently. It is designed to simplify the process of capturing, submitting, and approving expense reports by automating many of the manual tasks involved in expense management.
                    </p>
                  </div>

                  <div className="btn_wrapper">
                  <Link
                    href="https://expenseapp.kaispe.com/"
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
