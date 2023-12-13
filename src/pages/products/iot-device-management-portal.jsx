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
        <title>Iot Device Management Portal | KAISPE</title>
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
                      IoT Device Management Portal
                    </h2>
                    <h3
                      className="team__member-role-7 animation__char_come"
                      ref={charAnim2}
                    >
                      KAISPE IoT Web Portal is a fully functional portal that
                      helps users manage IoT devices, design telemetry rules,
                      view device notifications, etc. all from a single place.
                    </h3>
                    <p>
                      KAISPE IoT Device Management Portal has been developed for
                      users who want to have a single place to manage IoT
                      devices connected with an IoT platform like Microsoft
                      Azure IoT, define telemetry for a device or group of
                      devices, and design rules for the telemetry data.
                    </p>
                    <p>
                      The portal is highly flexible to get connected with
                      several IoT Device Management platforms. It also has a
                      dashboard that provides KPIs and charts about the device
                      to platform messaging, online vs. offline devices, etc.
                      Users can group relevant devices into device groups,
                      define telemetry, and associate with device groups. They
                      can then design rules on telemetry that the IoT platform
                      can then evaluate for any violations. The portal also
                      provides notifications generated if any rule(s) is
                      violated.
                    </p>
                  </div>

                  <div className="btn_wrapper">
                    <Link
                      href="https://appsource.microsoft.com/en-us/product/web-apps/kaispellc.kaispe_iotwebportal?tab=Overview"
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
