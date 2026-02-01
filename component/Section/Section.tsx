"use client";

import { FC, ReactNode } from "react";
import classes from "./Section.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
  /** Use "large" for extra vertical padding between major sections */
  padding?: "default" | "large" | "none";
};

export const Section: FC<Props> = ({
  children,
  className = "",
  padding = "default",
}) => {
  const paddingClass =
    padding === "large" ? classes.sectionLarge : padding === "none" ? "" : classes.section;
  return (
    <section className={`${paddingClass} ${className}`.trim()}>
      {children}
    </section>
  );
};
