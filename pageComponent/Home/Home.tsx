import { Space } from "@/component/Space";
import { Text } from "@/component/Text";
import { componentSizes, htmlTag } from "@/types";

import classes from "./Home.module.scss";

export const Home = () => {

  return (
<>
<div className="container">
        
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="pt-36 text-center">
              <Text tag={htmlTag.h1}>Latest Telecom hardware & robust Service solutions</Text>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>

        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <Text className="text-center pt-6 " size={componentSizes.large}>We offer Voice and Data Connectivity products and services to various business verticals – oil & Gas / Defense / Media /Maritime / Government & Humanitarian Agencies.</Text>
            </div>
          <div className="col-lg-3"></div>
        </div>

        <Space size={componentSizes.large}/>

        <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10"><div className={classes.picture}>picture here </div> </div>
            <div className="col-lg-1"></div>
        </div>

        <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <Text tag={htmlTag.h4}>Our Vision</Text>
              <Text tag={htmlTag.h2}>We can enhance your <span className={classes.productivity}>productivity</span></Text>
              <Text tag={htmlTag.h2}>& secure the <span className={classes.future}>future of your telecom operation</span></Text>
            </div>
            <div className="col-lg-1"></div>
        </div>

        <Space size={componentSizes.large}/>
        <Space size={componentSizes.large}/>
        <Space size={componentSizes.large}/>
        <Space size={componentSizes.large}/>
        <Space size={componentSizes.large}/>
        <Space size={componentSizes.large}/>
        <Space size={componentSizes.large}/>
        <Space size={componentSizes.large}/>
        <Space size={componentSizes.large}/>
        <Space size={componentSizes.large}/>


      </div>

<div className={classes.MembershipAccreditation}>
<div className="container">
  <div className="row">
    <div className="col-lg-1"></div>
    <div className="col-lg-10">
      <div className="row">
        <div className="col-lg-6"><Text tag={htmlTag.h1}>Membership & Accreditation</Text></div>
        <div className="col-lg-6"><Text tag={htmlTag.h5}>Recognized by leading industry bodies for maintaining the highest standards of excellence.</Text></div>
      </div>

      <Space />
      <Space />
      <Space />
      <Space />

      <div className="row">
        <div className="col-lg-3">
          <div className={classes.membershipDetail}>
            <Text>Dun & Bradstreet</Text>
            <Text>Registered Company</Text>
            <Text>561427868</Text>
            <img src="./membership1.png" alt="membership" />
          </div>
        </div>
        <div className="col-lg-3">233</div>
        <div className="col-lg-3">2</div>
        <div className="col-lg-3">2</div>
        
      </div>
    </div>
    <div className="col-lg-1"></div>
    </div>
</div>
</div>
</>
  );
};
