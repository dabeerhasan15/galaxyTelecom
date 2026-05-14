"use client";
import { ScrollReveal } from "@/component/ScrollReveal";
import { Text } from "@/component/Text";
import { componentSizes } from "@/types";

import { useContactModal } from "@/context/ContactModalContext";
import Image from "next/image";
import classes from "./Home.module.scss";

export const Home = () => {
  const { openContactModal } = useContactModal();

  return (
    <>
      {/* <HomeHeroSection /> */}

      <div className="container">
        <div className={classes.whatWeOffer}>
          <ScrollReveal direction="left">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <Image
                className={classes.image}
                src="/weOffer1.png"
                alt="membership"
                width={544}
                height={437}
                unoptimized
              />
            </div>
            <div className="col-lg-1"></div>
            <div className={`col-lg-5 ${classes.centerColumn}`}>
              <div className={classes.textDetail}>
                <div className={classes.weOffer}>What we offer</div>

                <Text size={componentSizes.medium} className="mt-7 mb-12">
                  We offer Voice and Data Connectivity products and services to
                  various business verticals – oil & Gas / Defense / Media /
                  Maritime / Government & Humanitarian Agencies.
                </Text>
                <button
                  onClick={openContactModal}
                  className={classes.learnmore}
                >
                  <Text size={componentSizes.medium}>Learn More </Text>
                  <svg
                    width="26"
                    height="19"
                    viewBox="0 0 26 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.5H25M25 9.5L16.5 1M25 9.5L16.5 18"
                      stroke="#0A0908"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
          <div className="row ">
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <Image
                className={classes.images}
                src="/weOffer2.png"
                alt="membership"
                width={544}
                height={437}
                unoptimized
              />
            </div>
            <div className="col-lg-1"></div>
            <div className={`col-lg-5 ${classes.centerColumn}`}>
              <div className={classes.textDetail}>
                <div className={classes.weOffer}>Our Position In Industry</div>

                <Text size={componentSizes.medium} className="mt-7 mb-12">
                  Taking advantage of the rich experience of its team members,
                  Galaxy Telecom is a distinguished and recognized leader in the
                  Telecommunications industry.
                </Text>
                <button
                  onClick={openContactModal}
                  className={classes.learnmore}
                >
                  <Text size={componentSizes.medium}>Learn More </Text>
                  <svg
                    width="26"
                    height="19"
                    viewBox="0 0 26 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.5H25M25 9.5L16.5 1M25 9.5L16.5 18"
                      stroke="#0A0908"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
          </ScrollReveal>
        </div>
      </div>

      {/* <HomeSection /> */}
    </>
  );
};
