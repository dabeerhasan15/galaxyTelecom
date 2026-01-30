import { Benifits } from "@/component/Benifits";
import { HeroSection } from "@/component/HeroSection";
import classes from "./ServicePage.module.scss";

export const ServicePage = () => {

  return (
    <>
    <HeroSection tag="Our Services" description="by providing a complete solution from Hardware to service deliverable. Creating solutions that deliver highly secure & ultra-reliable communications to accelerate the emergence of digital transformations." title="We help develop network infrastructure"/>
    <div className={classes.serviceDetails}><Benifits/></div>
    </>
  );
};
