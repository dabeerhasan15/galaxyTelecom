"use client";

import { componentSizes } from "@/types";
import Image from "next/image";
import { memo } from "react";
import { Space } from "../Space";
import classes from "./GetfreeConsultancy.module.scss";




const UnmemoGetfreeConsultancy  =  () => {
  return(
    <div className="container">
        <div className="row">
              <div className={classes.freeConsultancy}>
              <div className={classes.content}>
                <div className={classes.heading}>Get free Consultancy <br/> with our experts!</div>
                <Space size={componentSizes.large}/>
                <Space size={componentSizes.medium}/>
                
                <div className={classes.tag}>Learn More</div>
              </div>

              <div className={classes.image}>
                <div className={classes.imageWrapper}>
                  <Image
                    src="/consultants.png"
                    alt="Galaxy Telecom Logo"
                    width={279}
                    height={266}
                    className={classes.img}
                  />
                </div>
              </div>
              </div>
      </div>
    </div>
  )
  
};

export const GetfreeConsultancy  = memo(UnmemoGetfreeConsultancy );
