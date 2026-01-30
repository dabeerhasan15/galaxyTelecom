import { GetfreeConsultancy } from "@/component/GetfreeConsultancy";
import { HeroSection } from "@/component/HeroSection";
import { Space } from "@/component/Space";
import { componentSizes } from "@/types";
import Image from "next/image";
import classes from "./AboutUs.module.scss";

export const AboutUs = () => {

  return (
    <>
        <HeroSection tag="About" title="Galaxy Telecom" description="A specialized company providing Telecom hardware and Service solutions in the MENA region. Through a combination of our products and services, we can enhance your productivity and secure the future of your telecom operation." />


    <div className="container">
      <div className={classes.service}>
      <div className="row">
        <div className="col-lg-4">
          <div className={classes.image}>
            <Image
              src="/about11.png"
              alt="Galaxy Telecom Logo"
              width={433}
              height={810}
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div className={classes.content}>
            <GetfreeConsultancy/>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
      </div>
    </div>

    <div className={classes.about}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className={classes.image}>
            <Image
                src="/aboutcard1.png"
                alt="Galaxy Telecom Logo"
                width={648}
                height={619}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className={classes.content}>
              <div className={classes.tag}>what we do</div>
              <Space size={componentSizes.large}/>
              <Space size={componentSizes.large}/>
              <div className={classes.heading}>Aligning process with strategy</div>
              <Space/>
              <Space/>
              <div className={classes.context}>We offer Voice and Data Connectivity products and services to various business verticals – oil & Gas / Defense / Media / Maritime / Government & Humanitarian Agencies.  Taking advantage of the rich experience of its team members, Galaxy Telecom is a distinguished and recognized leader in the Telecommunications industry.</div>
            </div>
          </div>
        </div>
      </div>

      <Space size={componentSizes.large}/>
      <Space size={componentSizes.large}/>
      <Space size={componentSizes.large}/>


      <div className="container">
        <div className="row">
          
          <div className="col-lg-7">
            <div className={classes.contents}>
              <div className={classes.tag}>Our beliefdo</div>
              <Space size={componentSizes.large}/>
              <Space size={componentSizes.large}/>
              <div className={classes.heading}>Values & Code of Ethis</div>
              <Space/>
              <Space/>
              <div className={classes.context}>Ethical behavior has less to do with what may be required by law, and more to do with adherence to established standards of right and wrong that prescribe what a person or group ought to do in each situation. In other words, doing what is right because it is the right thing to do. Galaxy Telecom’s goal is not solely to comply with the laws that affect our business, but to abide by the highest level of ethical conduct in our business affairs. We place the utmost importance upon our reputation for honesty, integrity, and high standards.</div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className={classes.images}>
            <Image
                src="/aboutcard2.png"
                alt="Galaxy Telecom Logo"
                width={648}
                height={619}
              />
            </div>
          </div>
        </div>
      </div>

      <Space size={componentSizes.large}/>
      <Space size={componentSizes.large}/>
      <Space size={componentSizes.large}/>

      <Space size={componentSizes.large}/>
      <Space size={componentSizes.large}/>
      <Space size={componentSizes.large}/><Space size={componentSizes.large}/>
      <Space size={componentSizes.large}/>
      <Space size={componentSizes.large}/>
    </div>

    

    </>
  );
};
