import { useEffect, useRef } from "react";
import TeamDetails from "../../../public/assets/imgs/team/detail.jpg";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";

const TeamDetails1 = () => {
  const charAnim = useRef();
  const charAnim2 = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    animationCharCome(charAnim2.current);
  }, []);
  return (
    <>
      <section className="team__detail" style={{marginBottom:"100px"}}>
        <div className="container line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="sec-title-wrapper pt-120">
                <h2
                  className="team__member-name-7 animation__char_come"
                  ref={charAnim}
                >
                  QUALITY
                </h2>
                <h3
                  className="team__member-role-7 animation__char_come"
                  ref={charAnim2}
                >
                  We excel at what we do
                </h3>
                <p>
                  KAISPE puts quality first as a core value. Our focus is to
                  provide the client a high standard of quality products that
                  works well and does the job done right away that’s how we help
                  your business to stand out from the rest. We have established
                  a reputation in the market by making sure of client
                  satisfaction, increased profitability, and overall growth of a
                  business.
                </p>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="sec-title-wrapper pt-120">
                <h2
                  className="team__member-name-7 animation__char_come"
                  ref={charAnim}
                >
                  RESPONSIBILITY
                </h2>
                <h3
                  className="team__member-role-7 animation__char_come"
                  ref={charAnim2}
                >
                  Your security, our responsibility!
                </h3>
                <p>
                  We take the responsibility that the decisions we make are made
                  in accordance with professional standards, KAISPE has
                  established trustworthy partnerships as a result of being
                  responsible for the decisions and commitments we make to our
                  clients and employees.
                </p>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="sec-title-wrapper pt-120">
                <h2
                  className="team__member-name-7 animation__char_come"
                  ref={charAnim}
                >
                  LOYALTY
                </h2>
                <h3
                  className="team__member-role-7 animation__char_come"
                  ref={charAnim2}
                >
                  Loyalty is our key to success
                </h3>
                <p>
                  We believe in brand loyalty; we keep our consumers pleased
                  which is the key to our success. We treat all of our clients
                  with the same respect. The way KAISPE operates focuses not
                  only on client loyalty, but also on employee loyalty, which we
                  have earned over the years by providing respect, monetary
                  benefits, and a healthy culture.
                </p>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="sec-title-wrapper pt-120">
                <h2
                  className="team__member-name-7 animation__char_come"
                  ref={charAnim}
                >
                  COMMITMENT
                </h2>
                <h3
                  className="team__member-role-7 animation__char_come"
                  ref={charAnim2}
                >
                  We are responsible for what we commit
                </h3>
                <p>
                  Each member of our team is highly committed to building a
                  successful relationship with clients by making sure to
                  complete the project to the highest possible standard. Our
                  team members are so dedicated to their work that even when
                  it’s crunch time to reach a deadline, they are always willing
                  to go above and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetails1;
