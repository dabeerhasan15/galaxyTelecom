import { Benifits } from "@/component/Benifits";
import { FeatureCard } from "@/component/FeatureCard";
import { GetfreeConsultancy } from "@/component/GetfreeConsultancy";
import { MembershipCard } from "@/component/MembershipCard";
import { OfferBlock } from "@/component/OfferBlock";
import { Product } from "@/component/Product";
import { Section } from "@/component/Section";
import { Service } from "@/component/Service";
import { Text } from "@/component/Text";
import { images } from "@/config";
import { componentSizes, htmlTag } from "@/types";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import classes from "./Home.module.scss";

const MEMBERSHIP_DATA = [
  {
    title: "Dun & Bradstreet",
    companyId: "561427868",
    imageSrc: images.membership.dunBradstreet,
    imageAlt: "Dun & Bradstreet",
    imageWidth: 184,
    imageHeight: 32,
  },
  {
    title: "Ethixbase360",
    companyId: "TC 4194-7948",
    imageSrc: images.membership.ethixbase360,
    imageAlt: "Ethixbase360",
    imageWidth: 143,
    imageHeight: 48,
  },
  {
    title: "NCAGE Code",
    companyId: "2GELW",
    imageSrc: images.membership.ncage,
    imageAlt: "NCAGE Code",
    imageWidth: 77,
    imageHeight: 32,
  },
  {
    title: "TDRA",
    companyId: "DA25608/24",
    imageSrc: images.membership.tdra,
    imageAlt: "TDRA",
    imageWidth: 64,
    imageHeight: 49,
    last: true,
  },
];

const FEATURE_CARDS = [
  {
    title: "Availability",
    description:
      "We always stock a wide selection of the most popular products in the market.",
  },
  {
    title: "Price Guarantee",
    description:
      "With our network of national and international partners we can always offer competitive prices",
  },
  {
    title: "Professionalism",
    description:
      "A team of professionals and market experts will help you in your product purchases.",
  },
  {
    title: "Genuine Products",
    description:
      "We deal only in genuine products & The products we bring to market always have an official guarantee.",
  },
];

export const Home = () => {
  return (
    <>
      <div className="container">
        <section className={classes.hero}>
          <div className="row">
            <div className="col-lg-2" />
            <div className="col-lg-8">
              <div className="pt-36 text-center">
                <Text tag={htmlTag.h1}>
                  Latest Telecom hardware & robust Service solutions
                </Text>
              </div>
            </div>
            <div className="col-lg-2" />
          </div>

          <div className="row">
            <div className="col-lg-3" />
            <div className="col-lg-6">
              <Text className="text-center pt-6" size={componentSizes.large}>
                We offer Voice and Data Connectivity products and services to
                various business verticals – oil & Gas / Defense / Media /
                Maritime / Government & Humanitarian Agencies.
              </Text>
            </div>
            <div className="col-lg-3" />
          </div>

          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className={classes.picture}>
                <div className={classes.splineContainer}>
                  <Spline scene="https://prod.spline.design/jN1JmdBfGBRTtV6o/scene.splinecode" />
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
        </section>

        <div
          className={classes.service}
          style={{ backgroundImage: `url(${images.home.background})` }}
        >
          <div className="row">
            <div className="col-lg-4">
              <div className={classes.image}>
                <Image
                  src={images.home.bgCloud}
                  alt="Galaxy Telecom"
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
            <div className="col-lg-1" />
          </div>
        </div>

        <Section className={classes.visionSection} padding="none">
          <div className="row">
            <div className="col-lg-1" />
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
            <div className="col-lg-1" />
          </div>
        </Section>
      </div>

      <div className={classes.membershipAccreditation}>
        <div className="container">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className={`row ${classes.membershipHeader}`}>
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

              <div className="row">
                {MEMBERSHIP_DATA.map((item) => (
                  <div key={item.title} className="col-lg-3">
                    <MembershipCard
                      title={item.title}
                      companyId={item.companyId}
                      imageSrc={item.imageSrc}
                      imageAlt={item.imageAlt}
                      imageWidth={item.imageWidth}
                      imageHeight={item.imageHeight}
                      last={item.last}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
        </div>
      </div>

      <div className="container">
        <Section className={classes.whatWeOffer} padding="none">
          <OfferBlock
            imageSrc={images.offer.whatWeOffer}
            imageAlt="What we offer"
            imageWidth={544}
            imageHeight={437}
            title="What we offer"
            description="We offer Voice and Data Connectivity products and services to various business verticals – oil & Gas / Defense / Media / Maritime / Government & Humanitarian Agencies."
            variant="first"
          />
          <OfferBlock
            imageSrc={images.offer.positionInIndustry}
            imageAlt="Our position in industry"
            imageWidth={544}
            imageHeight={437}
            title="Our Position In Industry"
            description="Taking advantage of the rich experience of its team members, Galaxy Telecom is a distinguished and recognized leader in the Telecommunications industry."
            variant="second"
          />
        </Section>

        <Section className={classes.ethics} padding="none">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-4">
              <Text tag={htmlTag.h4}>Our Brief</Text>
              <div className={classes.valueofcode}>
                Value of code and ethics
              </div>
            </div>
            <div className="col-lg-6">
              <Text size="medium">
                Ethical behaviour has less to do with what may be required by
                law, and more to do with adherence to established standards of
                right and wrong that prescribe what a person or group ought to
                do in each situation. In other words, doing what is right
                because it is the right thing to do.
              </Text>
            </div>
            <div className="col-lg-1" />
          </div>

          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <Image
                src={images.ethics.bg}
                alt="Ethics"
                width={1328}
                height={537}
              />
            </div>
            <div className="col-lg-1" />
          </div>

          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className={classes.ethicsContent}>
                <span className={classes.black}>
                  Galaxy Telecom&apos;s goal
                </span>{" "}
                <span className={classes.grey}>is not solely to</span> comply
                with the laws that affect our business, but to abide by the
                highest level of ethical conduct in our business affairs. We
                place the utmost importance upon our reputation for honesty,
                integrity, and high standards.
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
        </Section>

        <Section className={classes.services} padding="none">
          <div className="row">
            <Service />
          </div>
        </Section>

        <Section className={classes.benefitsSection} padding="none">
          <Benifits />
        </Section>

        <Section className={classes.benefitsSection} padding="none">
          <Product />
        </Section>

        <Section padding="none">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-7">
                  <div className="row">
                    {FEATURE_CARDS.map((card) => (
                      <div key={card.title} className="col-lg-6">
                        <FeatureCard
                          iconSrc={images.logo}
                          iconAlt="Galaxy Telecom"
                          title={card.title}
                          description={card.description}
                        />
                      </div>
                    ))}
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
                        src={images.home.feature}
                        alt="Features"
                        width={452}
                        height={446}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
        </Section>
      </div>
    </>
  );
};
