"use client";

import { componentSizes } from "@/types";
import { memo } from "react";
import { Space } from "../Space";
import classes from "./Product.module.scss";


const UnmemoProduct = () => {
  return(
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-3">
          <div className={classes.ourProducts}>Our Products</div>
        </div>
        <div className="col-lg-6">
          <div className={classes.productDetail}>We have vast experience in Telecom & I.T. industry products and offers a wide selection of devices and accessories at wholesale prices</div>
        </div>
        <div className="col-lg-1"></div>
      </div>

      <Space size={componentSizes.large}/>
      <Space size={componentSizes.small}/>

      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <div className={classes.products}>
            <div className="row">
              <div className="col-lg-1">
                <div className={classes.sequence}>01</div>
              </div>
              <div className="col-lg-5">
                <div className={classes.heading}>Public Switching <span className={classes.tag}>Equipment</span></div>
              </div>
              <div className="col-lg-6">
                <div className={classes.description}>
                  Galaxy Telecom delivers robust public switching solutions designed for high-availability voice and data networks. Our systems ensure seamless routing, exceptional call quality, and carrier-grade reliability for government and enterprise environments.
                </div>
              </div>
            </div>
          </div>

          <div className={classes.products}>
            <div className="row">
              <div className="col-lg-1">
                <div className={classes.sequence}>02</div>
              </div>
              <div className="col-lg-5">
                <div className={classes.heading}>Transmission <span className={classes.tag}>Equipment</span></div>
              </div>
              <div className="col-lg-6">
                <div className={classes.description}>
                We provide advanced transmission technologies that guarantee secure, high-capacity connectivity across regions. From fibre-backhaul integrations to satellite-based delivery, our solutions keep your network performing at peak efficiency.
                </div>
              </div>
            </div>
          </div>

          <div className={classes.products}>
            <div className="row">
              <div className="col-lg-1">
                <div className={classes.sequence}>03</div>
              </div>
              <div className="col-lg-5">
                <div className={classes.heading}>⁠Customer Premises (CPE) </div>
              </div>
              <div className="col-lg-6">
                <div className={classes.description}>
                Our CPE portfolio includes professional-grade modems, routers, and terminals engineered for fast deployment and stable performance. Galaxy Telecom ensures every premises is equipped with secure, scalable, and future-ready connectivity hardware.
                </div>
              </div>
            </div>
          </div>

          <div className={classes.productlast}>
            <div className="row">
              <div className="col-lg-1">
                <div className={classes.sequence}>04</div>
              </div>
              <div className="col-lg-5">
                <div className={classes.heading}>⁠Satellite Phone <span className={classes.tag}>Equipment</span></div>
              </div>
              <div className="col-lg-6">
                <div className={classes.description}>
                Stay connected anywhere on the planet with our range of reliable satellite phones backed by global coverage. Ideal for remote operations, emergency response, and field teams who need uninterrupted voice and data access.
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="col-lg-1"></div>
      </div>


    </div>
    </>
    
  )
  
};

export const Product = memo(UnmemoProduct);
