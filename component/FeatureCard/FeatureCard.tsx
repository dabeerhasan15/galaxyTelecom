"use client";

import { componentSizes } from "@/types";
import Image from "next/image";
import { FC, memo } from "react";
import { Text } from "@/component/Text";
import classes from "./FeatureCard.module.scss";

type Props = {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
};

const FeatureCardInner: FC<Props> = ({
  iconSrc,
  iconAlt,
  title,
  description,
}) => (
  <div className={classes.card}>
    <Image src={iconSrc} alt={iconAlt} width={64} height={64} />
    <div className={classes.heading}>{title}</div>
    <Text size={componentSizes.regular}>{description}</Text>
  </div>
);

export const FeatureCard = memo(FeatureCardInner);
