import { Text } from "@/component/Text";
import { componentSizes, htmlTag } from "@/types";

import { Benifits } from "@/component/Benifits";
import { Product } from "@/component/Product";
import { Service } from "@/component/Service";
import Image from "next/image";
import classes from "./HomeSection.module.scss";

export const HomeSection = () => {
  return (
    <>
      <div className="container">
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
