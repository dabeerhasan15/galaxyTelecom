"use client";

import { images } from "@/config";
import { componentSizes, htmlTag } from "@/types";
import Image from "next/image";
import { memo } from "react";
import { Text } from "../Text";
import classes from "./Benifits.module.scss";

const BENEFIT_ITEMS = [
  {
    title: "24 Hour Support",
    description:
      "We provide technical support on a 24x7 basis for our customers. Our dedicated team is always available to resolve any issues and keep your network running smoothly.",
  },
  {
    title: "Turnkey Solutions",
    description:
      "We provide a complete turnkey solution to our clients from network design, hardware selection, installation, commissioning & training. A complete end-to-end resolution is provided to run a seamless network.",
  },
  {
    title: "Expert Installation & Commissioning",
    description:
      "Our certified engineers handle installation and commissioning with precision. We ensure your infrastructure is set up correctly and tested for optimal performance.",
  },
  {
    title: "Training & Ongoing Support",
    description:
      "We equip your team with the knowledge to operate and maintain your network. Combined with our ongoing support, you get a reliable partnership for the long term.",
  },
];

const UnmemoBenifits = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2" />
        <div className="col-lg-8">
          <div className={classes.Benefits}>
            <Text tag={htmlTag.h4}>Benefits of choosing Us</Text>
            <div className={classes.provideTechnical}>
              We provide technical support on a 24x7 basis for our customers.
            </div>
          </div>
        </div>
        <div className="col-lg-2" />
      </div>

      <div className={classes.benefitCards}>
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className="row">
              {BENEFIT_ITEMS.map((item, index) => (
                <div key={index} className="col-lg-6">
                  <div className={classes.benefitCard}>
                    <Image
                      src={images.logo}
                      alt="Galaxy Telecom"
                      width={80}
                      height={80}
                    />
                    <div className={classes.heading}>{item.title}</div>
                    <Text size={componentSizes.regular}>
                      {item.description}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-2" />
        </div>
      </div>
    </div>
  );
};

export const Benifits = memo(UnmemoBenifits);
