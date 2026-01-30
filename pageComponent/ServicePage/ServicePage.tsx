import { Benifits } from "@/component/Benifits";
import { Card } from "@/component/Card";
import { GetfreeConsultancy } from "@/component/GetfreeConsultancy";
import { HeroSection } from "@/component/HeroSection";
import { Space } from "@/component/Space";
import { componentSizes } from "@/types";
import Image from "next/image";
import classes from "./ServicePage.module.scss";

export const ServicePage = () => {

  return (
    <>
    <HeroSection tag="Our Services" description="by providing a complete solution from Hardware to service deliverable. Creating solutions that deliver highly secure & ultra-reliable communications to accelerate the emergence of digital transformations." title="We help develop network infrastructure"/>

    <div className="container">
      <div className={classes.service}>
      <div className="row">
        <div className="col-lg-5 ">
          <div className={classes.image}>
            <Image
              src="/service1.png"
              alt="Galaxy Telecom Logo"
              width={485}
              height={432}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className={classes.content}>
            <GetfreeConsultancy/>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className={classes.serviceText}>
          <div className={classes.text}>
            What we provide
          </div>
          <div className={classes.heading}>Our Services in different domains</div>
        </div>
      </div>
    </div>

    <Space size={componentSizes.medium}/>
    <Space size={componentSizes.medium}/>
    <Space size={componentSizes.medium}/>
    <Space size={componentSizes.medium}/>

    <div className="container">
      <div className="row">
        <div className="col-lg-4"><Card description="Galaxy Telecom with its strong global network offers a complete satellite network solution inclusive of space segment and ground equipment. " image="/servicecard1.png" title="Satellite Network service"/></div>
        <div className="col-lg-4"><Card description="Galaxy Telecom provides a broad range of IOT solutions. We will help you build and optimize your IoT network efficiently." image="/servicecard2.png" title="IOT (Internet of Things) Solutions"/></div>
        <div className="col-lg-4"><Card description="Galaxy Telecom helps Telecom Operators to design and implement a robust cellular backhaul solution combining Satellite & Fiber connectivity." image="/servicecard3.png" title="Cellular Backhaul Solution"/></div>
      </div>
    </div>

    <div className={classes.serviceDetails}><Benifits/></div>
    </>
  );
};
