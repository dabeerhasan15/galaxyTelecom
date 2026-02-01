"use client";

import { componentSizes } from "@/types";
import Image from "next/image";
import { FC, memo } from "react";
import { Text } from "@/component/Text";
import { ArrowLink } from "@/component/ArrowLink";
import classes from "./OfferBlock.module.scss";

type Props = {
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  description: string;
  learnMoreHref?: string;
  /** First block has top border, second has different padding */
  variant?: "first" | "second";
};

const OfferBlockInner: FC<Props> = ({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  title,
  description,
  learnMoreHref = "/",
  variant = "first",
}) => (
  <div className="row">
    <div className="col-lg-1" />
    <div className="col-lg-4">
      <div
        className={
          variant === "first" ? classes.imageFirst : classes.imageSecond
        }
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
    </div>
    <div className="col-lg-1" />
    <div className={`col-lg-5 ${classes.centerColumn}`}>
      <div className={classes.textDetail}>
        <div className={classes.title}>{title}</div>
        <Text size={componentSizes.medium} className={classes.description}>
          {description}
        </Text>
        <ArrowLink href={learnMoreHref}>Learn More</ArrowLink>
      </div>
    </div>
    <div className="col-lg-1" />
  </div>
);

export const OfferBlock = memo(OfferBlockInner);
