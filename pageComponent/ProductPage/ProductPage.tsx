import { GetfreeConsultancy } from "@/component/GetfreeConsultancy";
import { HeroSection } from "@/component/HeroSection";
import { Product } from "@/component/Product";
import Image from "next/image";
import classes from "./ProductPage.module.scss";

export const ProductPage = () => {

  return (
    <>


    <HeroSection tag="Our Product" title="Experience in Telecom & I.T.industry" description="by providing a complete solution from Hardware to service deliverable. Creating solutions that deliver highly secure & ultra-reliable communications to accelerate the emergence of digital transformations."/>
    <div className="container">
      <div className={classes.product}>
      <div className="row">
        <div className="col-lg-5 ">
          <div className={classes.image}>
            <Image
              src="/products.png"
              alt="Galaxy Telecom Logo"
              width={734}
              height={728}
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

    
    <div className={classes.productDetails}><Product/></div>
    </>
  );
};
