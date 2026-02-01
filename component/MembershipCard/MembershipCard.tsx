"use client";

import { htmlTag } from "@/types";
import Image from "next/image";
import { FC, memo } from "react";
import { Text } from "@/component/Text";
import classes from "./MembershipCard.module.scss";

type Props = {
  title: string;
  companyId: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  /** Set true for the last item in a row (no right border) */
  last?: boolean;
};

const MembershipCardInner: FC<Props> = ({
  title,
  companyId,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  last = false,
}) => (
  <div className={`${classes.card} ${last ? classes.cardLast : ""}`.trim()}>
    <Text tag={htmlTag.h3}>{title}</Text>
    <Text className={classes.registeredCompany}>Registered Company</Text>
    <Text className={classes.companyId}>{companyId}</Text>
    <div className={classes.imageWrapper}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
    </div>
  </div>
);

export const MembershipCard = memo(MembershipCardInner);
