"use client";
import { Space } from "@/component/Space";
import { Text } from "@/component/Text";
import { componentSizes, htmlTag } from "@/types";

import { Benifits } from "@/component/Benifits";
import { GetfreeConsultancy } from "@/component/GetfreeConsultancy";
import { Product } from "@/component/Product";
import { Service } from "@/component/Service";
import { useContactModal } from "@/context/ContactModalContext";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import classes from "./Home.module.scss";

export const Home = () => {
  const { openContactModal } = useContactModal();

  return (
    <>
      <div className="container">
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

        <Space size={componentSizes.large} />

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

        <div className={classes.pictures}>
          <div className={classes.splineContainers}>
            <Spline scene="https://prod.spline.design/swb86ZzdnFIhmGbw/scene.splinecode" />
          </div>
        </div>

        <div className={classes.service}>
          <div className="row">
            <div className="col-lg-4">
              <div className={classes.image}>
                <Image
                  src="/Homebgcloud.png"
                  alt="Galaxy Telecom Logo"
                  width={811}
                  height={728}
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
      </div>

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

      <div className="container">
        <div className={classes.whatWeOffer}>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <Image
                className={classes.image}
                src="/weOffer1.png"
                alt="membership"
                width={544}
                height={437}
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

          <div className="row ">
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <Image
                className={classes.images}
                src="/weOffer2.png"
                alt="membership"
                width={544}
                height={437}
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
        </div>

        {/* Values & code of Ethics */}
        <div className={classes.Ethics}>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <Text tag={htmlTag.h4}>Our Brief</Text>
              <div className={classes.valueofcode}>
                Value of code and ethics
              </div>
            </div>
            <div className="col-lg-6">
              <Text size={componentSizes.medium}>
                Ethical behaviour has less to do with what may be required by
                law, and more to do with adherence to established standards of
                right and wrong that prescribe what a person or group ought to
                do in each situation. In other words, doing what is right
                because it is the right thing to do.
              </Text>
            </div>
            <div className="col-lg-1"></div>
          </div>

          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <Image
                src="/Ethicsbg.png"
                alt="ethiucs"
                width={1328}
                height={537}
              />
            </div>
            <div className="col-lg-1"></div>
          </div>

          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <div className={classes.ethicsContent}>
                <span className={classes.black}>Galaxy Telecom’s goal</span>{" "}
                <span className={classes.grey}>is not solely to</span> comply
                with the laws that affect our business, but to abide by the
                highest level of ethical conduct in our business affairs. We
                place the utmost importance upon our reputation for honesty,
                integrity, and high standards.
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>

        {/* our service */}

        <div className={classes.services}>
          <Service />
        </div>

        <div className={classes.Benefits}>
          <Benifits />
        </div>

        <div className={classes.products}>
          <Product />
        </div>

        {/* Feature */}
        <div className={classes.featureSection}>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-7">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className={classes.card}>
                        <Image
                          src="/available.png"
                          alt="Galaxy Telecom Logo"
                          width={64}
                          height={64}
                          className="mb-6"
                        />
                        <div className={classes.heading}>Availability</div>
                        <Text size={componentSizes.regular} className="mt-2">
                          We always stock a wide selection of the most popular
                          products in the market.
                        </Text>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className={classes.card}>
                        <Image
                          src="/price.png"
                          alt="Galaxy Telecom Logo"
                          width={64}
                          height={64}
                          className="mb-6"
                        />
                        <div className={classes.heading}>Price Guarantee</div>
                        <Text size={componentSizes.regular} className="mt-2">
                          With our network of national and international
                          partners we can always offer competitive prices
                        </Text>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className={classes.card}>
                        <Image
                          src="/Professionalism.png"
                          alt="Galaxy Telecom Logo"
                          width={64}
                          height={64}
                          className="mb-6"
                        />
                        <div className={classes.heading}>Professionalism</div>
                        <Text size={componentSizes.regular} className="mt-2">
                          A team of professionals and market experts will help
                          you in your product purchases.
                        </Text>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className={classes.card}>
                        <Image
                          src="/product.png"
                          alt="Galaxy Telecom Logo"
                          width={64}
                          height={64}
                          className="mb-6"
                        />
                        <div className={classes.heading}>Genuine Products</div>

                        <Text size={componentSizes.regular} className="mt-2">
                          We deal only in genuine products & The products we
                          bring to market always have an official guarantee.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className={classes.featureSection}>
                    <div className={classes.featureText}>
                      <Text tag={htmlTag.h4}>Features</Text>
                      <div className={classes.text}>
                        We are accessible around the clock to assist you with
                        product purchases or offer technical support.
                      </div>
                    </div>
                    <div className={classes.image}>
                      <Image
                        src="/feature.png"
                        alt="membership"
                        width={452}
                        height={446}
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
    </>
  );
};
