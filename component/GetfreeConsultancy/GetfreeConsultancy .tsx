"use client";

import { useContactModal } from "@/context/ContactModalContext";
import Image from "next/image";
import { memo } from "react";
import classes from "./GetfreeConsultancy.module.scss";

const UnmemoGetfreeConsultancy = () => {
  const { openContactModal } = useContactModal();

  return (
    <div className="container">
      <div className="row">
        <div className={classes.freeConsultancy}>
          <div className={classes.content}>
            <div className={classes.heading}>
              Get free Consultancy <br /> with our experts!
            </div>

            <button onClick={openContactModal} className={classes.tag}>
              Learn More
            </button>
          </div>

          <div className={classes.image}>
            <div className={classes.imageWrapper}>
              <Image
                src="/consultants.png"
                alt="Galaxy Telecom Logo"
                width={279}
                height={266}
                className={classes.img}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const GetfreeConsultancy = memo(UnmemoGetfreeConsultancy);
