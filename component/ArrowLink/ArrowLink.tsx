"use client";

import { componentSizes } from "@/types";
import Link from "next/link";
import { FC } from "react";
import { Text } from "@/component/Text";
import classes from "./ArrowLink.module.scss";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const ArrowLink: FC<Props> = ({ href, children, className = "" }) => (
  <Link href={href} className={`${classes.arrowLink} ${className}`.trim()}>
    <Text size={componentSizes.medium}>{children}</Text>
    <svg
      width="26"
      height="19"
      viewBox="0 0 26 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M1 9.5H25M25 9.5L16.5 1M25 9.5L16.5 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Link>
);
