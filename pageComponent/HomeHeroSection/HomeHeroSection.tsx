import { Space } from "@/component/Space";
import { Text } from "@/component/Text";
import { componentSizes, htmlTag } from "@/types";

import { GetfreeConsultancy } from "@/component/GetfreeConsultancy";
import { ScrollReveal } from "@/component/ScrollReveal";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import classes from "./HomeHeroSection.module.scss";

export const HomeHeroSection = () => {
  return (
    <>
      <div className="container">
        <ScrollReveal direction="top">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="pt-10 sm:pt-36 text-center">
              <Text tag={htmlTag.h1}>
                Latest Telecom hardware & robust Service solutions
              </Text>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>

        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <Text className="text-center pt-6 " size={componentSizes.large}>
              We offer Voice and Data Connectivity products and services to
              various business verticals – oil & Gas / Defense / Media /Maritime
              / Government & Humanitarian Agencies.
            </Text>
          </div>
          <div className="col-lg-3"></div>
        </div>
        </ScrollReveal>

        <Space size={componentSizes.large} />

        {/* <ScrollReveal direction="bottom"> */}
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className={classes.picture}>
              <div className={classes.splineContainer}>
                <Spline scene="https://prod.spline.design/jN1JmdBfGBRTtV6o/scene.splinecode" />
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
        {/* </ScrollReveal> */}

        {/* <ScrollReveal direction="left"> */}
        <div className={classes.pictures}>
          <div className={classes.splineContainers}>
            <Spline scene="https://prod.spline.design/swb86ZzdnFIhmGbw/scene.splinecode" />
          </div>
        </div>
        {/* </ScrollReveal> */}

        <ScrollReveal direction="right">
        <div className={classes.service}>
          <div className="row">
            <div className="col-lg-4">
              <div className={classes.image}>
                <Image
                  src="/Homebgcloud.png"
                  alt="Galaxy Telecom Logo"
                  width={811}
                  height={728}
                  unoptimized
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className={classes.content}>
                <GetfreeConsultancy />
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
        </ScrollReveal>

        <ScrollReveal direction="bottom">
        <div className={classes.vision}>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <Text tag={htmlTag.h4}>Our Vision</Text>
              <Text tag={htmlTag.h2}>
                We can enhance your{" "}
                <span className={classes.productivity}>productivity</span>
              </Text>
              <Text tag={htmlTag.h2}>
                & secure the{" "}
                <span className={classes.future}>
                  future of your telecom operation
                </span>
              </Text>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
        </ScrollReveal>
      </div>

      <ScrollReveal direction="top">
      <div className={classes.MembershipAccreditation}>
        <div className="container">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-6">
                  <Text tag={htmlTag.h1}>Membership & Accreditation</Text>
                </div>
                <div className="col-lg-6">
                  <Text tag={htmlTag.h5}>
                    Recognized by leading industry bodies for maintaining the
                    highest standards of excellence.
                  </Text>
                </div>
              </div>

              <div className="mt-16"></div>

              <div className="row">
                <div className="col-lg-3">
                  <div className={classes.membershipDetail}>
                    <Text
                      tag={htmlTag.h3}
                      className={classes.registeredCompanyName}
                    >
                      Dun & Bradstreet
                    </Text>
                    <Text className={classes.registeredCompany}>
                      Registered Company
                    </Text>
                    <Text className={classes.companyIds}>561427868</Text>

                    <div className={classes.images}>
                      <Image
                        src="/membership1.png"
                        alt="membership"
                        width={184}
                        height={32}
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className={classes.membershipDetail}>
                    <Text
                      tag={htmlTag.h3}
                      className={classes.registeredCompanyName}
                    >
                      Ethixbase360
                    </Text>

                    <Text className={classes.registeredCompany}>
                      Registered Company
                    </Text>
                    <Text className={classes.companyIds}>TC 4194-7948</Text>
                    <div className={classes.images}>
                      <Image
                        src="/membership2.png"
                        alt="membership"
                        width={143}
                        height={48}
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className={classes.membershipDetail}>
                    <Text
                      tag={htmlTag.h3}
                      className={classes.registeredCompanyName}
                    >
                      NCAGE Code
                    </Text>
                    <Text className={classes.registeredCompany}>
                      Registered Company
                    </Text>
                    <Text className={classes.companyIds}>2GELW</Text>
                    <div className={classes.images}>
                      <Image
                        src="/membership3.png"
                        alt="membership"
                        width={77}
                        height={32}
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className={classes.membershipDetails}>
                    <Text
                      tag={htmlTag.h3}
                      className={classes.registeredCompanyName}
                    >
                      TDRA
                    </Text>
                    <Text className={classes.registeredCompany}>
                      Registered Company
                    </Text>
                    <Text className={classes.companyIds}>DA25608/24</Text>
                    <div className={classes.images}>
                      <Image
                        src="/membership4.png"
                        alt="membership"
                        width={64}
                        height={49}
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </>
  );
};
