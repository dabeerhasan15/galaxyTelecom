"use client";

import { componentSizes, htmlTag } from "@/types";
import Image from "next/image";
import { memo } from "react";
import { Space } from "../Space";
import { Text } from "../Text";
import classes from "./Benifits.module.scss";


const UnmemoBenifits = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className={classes.Benefits}>
          <Text tag={htmlTag.h4}>Benefits of choosing Us</Text>
          <div className={classes.provideTechnical}>We provide technical support on a ‍24x7 basis for our customers.</div>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>

      <Space size={componentSizes.large}/>
      <Space size={componentSizes.large}/>
      <Space size={componentSizes.large}/>
      <Space size={componentSizes.large}/>
      <Space size={componentSizes.small}/>

      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-6">
              <div className={classes.upperleft}>
                <Image
                src="/Logo.png"
                alt="Galaxy Telecom Logo"
                width={80}
                height={80}
              />
                <Space size={componentSizes.small}/>
                <Space size={componentSizes.small}/>
                <Space size={componentSizes.small}/>
                <div className={classes.heading}>24 Hour Support</div>
                <Space size={componentSizes.small}/>
                <Text size={componentSizes.regular}>We provide a complete turnkey solution to our clients from network design, hardware selection, installation, commissioning & training. A complete end-to-end resolution is provided to run a seamless network.</Text>
              </div>
            </div>
            <div className="col-lg-6"><div className={classes.upperleft}>
                <Image
                src="/Logo.png"
                alt="Galaxy Telecom Logo"
                width={80}
                height={80}
              />
                <Space size={componentSizes.small}/>
                <Space size={componentSizes.small}/>
                <Space size={componentSizes.small}/>
                <div className={classes.heading}>24 Hour Support</div>
                <Space size={componentSizes.small}/>
                <Text size={componentSizes.regular}>We provide a complete turnkey solution to our clients from network design, hardware selection, installation, commissioning & training. A complete end-to-end resolution is provided to run a seamless network.</Text>
              </div></div>
            <div className="col-lg-6">
              <div className={classes.upperleft}>
                <Image
                src="/Logo.png"
                alt="Galaxy Telecom Logo"
                width={80}
                height={80}
              />
                <Space size={componentSizes.small}/>
                <Space size={componentSizes.small}/>
                <Space size={componentSizes.small}/>
                <div className={classes.heading}>24 Hour Support</div>
                <Space size={componentSizes.small}/>
                <Text size={componentSizes.regular}>We provide a complete turnkey solution to our clients from network design, hardware selection, installation, commissioning & training. A complete end-to-end resolution is provided to run a seamless network.</Text>
              </div></div>
            <div className="col-lg-6"><div className={classes.upperleft}>
                <Image
                src="/Logo.png"
                alt="Galaxy Telecom Logo"
                width={80}
                height={80}
              />
                <Space size={componentSizes.small}/>
                <Space size={componentSizes.small}/>
                <Space size={componentSizes.small}/>
                <div className={classes.heading}>24 Hour Support</div>
                <Space size={componentSizes.small}/>
                <Text size={componentSizes.regular}>We provide a complete turnkey solution to our clients from network design, hardware selection, installation, commissioning & training. A complete end-to-end resolution is provided to run a seamless network.</Text>
              </div>
              </div>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
  
};

export const Benifits = memo(UnmemoBenifits);
