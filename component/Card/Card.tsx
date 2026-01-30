"use client";

import { componentSizes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC, memo } from "react";
import { Space } from "../Space";
import { Text } from "../Text";
import classes from "./Card.module.scss";

type Props = {
  image:string;
  title:string;
  description:string;
};


const Unmemocard : FC<Props> = ({ image, title, description }) => {
  return(
      <div  className={classes.card}>
        <div className={classes.image}>
        <Image
                src={image}
                alt="Galaxy Telecom Logo"
                width={432}
                height={220}
              />
        </div>

        <Space size={componentSizes.medium}/>
        <Space size={componentSizes.medium}/>
        <div className={classes.heading}>{title}</div>
        <Space size={componentSizes.medium}/>
        <div className={classes.content}>{description}</div>
        <Space size={componentSizes.regular}/>
        <Space size={componentSizes.regular}/>
        <Link href={'/'} className={classes.learnmore}>
          <Text size={componentSizes.medium}>Learn More </Text>
          <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9.5H25M25 9.5L16.5 1M25 9.5L16.5 18" stroke="#0A0908" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Link>
      </div>
  )
  
};

export const Card = memo(Unmemocard);
