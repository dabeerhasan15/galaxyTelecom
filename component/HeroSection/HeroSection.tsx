"use client";

import { ScrollReveal } from "@/component/ScrollReveal";
import { htmlTag } from "@/types";
import { FC, memo } from "react";
import { Text } from "../Text";
import classes from "./HeroSection.module.scss";

type Props = {
  tag:string;
  title:string;
  description:string;
};


const UnmemoHeroSection : FC<Props> = ({ tag, title, description }) => {
  return(
    <ScrollReveal direction="bottom">
    <div className="container">
      <div  className={classes.HeroSection}>
        <div className="row">
          <div className="col-lg-12">
            <div className={classes.tag}>{tag}</div>
          </div>
          <div className="col-lg-12"><Text tag={htmlTag.h1}>{title}</Text></div>
          <div className="col-lg-1"></div>
          <div className="col-lg-10"><div className={classes.text}>{description}</div></div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
    </ScrollReveal>
  )
  
};

export const HeroSection = memo(UnmemoHeroSection);
