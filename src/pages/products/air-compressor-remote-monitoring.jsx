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
        <title>Air Compressor Remote Monitoring | KAISPE</title>
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
                      style={{fontSize: "3.5rem"}}
                    >
                      Air Compressor Remote Monitoring
                    </h2>
                    <h3
                      className="team__member-role-7 animation__char_come"
                      ref={charAnim2}
                    >
                      KAISPE Industrial Air Compressor Remote Monitoring
                      solution helps industries keep the compressors up and
                      running with minimum downtime.
                    </h3>
                    <p>
                      Traditional Air Compressor Remote Monitoring and
                      maintenance methods can lead to higher downtime of air
                      compressors. These assets need to work round the clock to
                      generate desirable production volumes. A solution
                      leveraging the power of IoT, cloud and data analytics will
                      be very helpful to avoid manual maintenance and improve
                      the bottom line.
                    </p>
                    <p>
                      KAISPE Industrial Air Compressor Remote Monitoring
                      provides key telemetry information to customers about air
                      pressure, temperature, CFM, motor power, oil level and a
                      number of other relevant telemetry for specific air
                      compressor types using Microsoft Azure IoT.
                    </p>
                  </div>

                  <div className="btn_wrapper">
                    <Link
                      href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/kaispellc.kaispe_aircomprm_081620190081"
                      className="wc-btn-primary btn-hover btn-item"
                      target="_blank"
                      style={{ backgroundColor: "#FFD800", color: "#000" }}

                    >
                      <span></span>Azure <br/> Marketplace
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
