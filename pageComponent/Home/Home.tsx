import { Space } from "@/component/Space";
import { Text } from "@/component/Text";
import { componentSizes, htmlTag } from "@/types";

import Image from "next/image";
import Link from "next/link";
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
            <Text tag={htmlTag.h3}>Dun & Bradstreet</Text>
            <Space size={componentSizes.regular}/>
            <Space/>
            <Text className={classes.registeredCompany}>Registered Company</Text>
            <Space size={componentSizes.small}/>
            <Text className={classes.companyIds}>561427868</Text>
            <Space size={componentSizes.regular}/>
            <Space size={componentSizes.regular}/>
            <Space size={componentSizes.regular}/>
            <div className={classes.images}><Image src="/membership1.png" alt="membership" width={184} height={32} /></div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className={classes.membershipDetail}>
            <Text tag={htmlTag.h3}>Ethixbase360</Text>
            <Space size={componentSizes.regular}/>
            <Space/>
            <Text className={classes.registeredCompany}>Registered Company</Text>
            <Space size={componentSizes.small}/>
            <Text className={classes.companyIds}>TC 4194-7948</Text>
            <Space size={componentSizes.regular}/>
            <Space size={componentSizes.regular}/>
            <Space size={componentSizes.regular}/>
            <div className={classes.images}><Image src="/membership2.png" alt="membership" width={143} height={48}  /></div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className={classes.membershipDetail}>
            <Text tag={htmlTag.h3}>NCAGE Code</Text>
            <Space size={componentSizes.regular}/>
            <Space/>
            <Text className={classes.registeredCompany}>Registered Company</Text>
            <Space size={componentSizes.small}/>
            <Text className={classes.companyIds}>2GELW</Text>
            <Space size={componentSizes.regular}/>
            <Space size={componentSizes.regular}/>
            <Space size={componentSizes.regular}/>
            <div className={classes.images}><Image src="/membership3.png" alt="membership"  width={77} height={32} /></div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className={classes.membershipDetails}>
            <Text tag={htmlTag.h3}>TDRA</Text>
            <Space size={componentSizes.regular}/>
            <Space/>
            <Text className={classes.registeredCompany}>Registered Company</Text>
            <Space size={componentSizes.small}/>
            <Text className={classes.companyIds}>DA25608/24</Text>
            <Space size={componentSizes.regular}/>
            <Space size={componentSizes.regular}/>
            <Space size={componentSizes.regular}/>
            <div className={classes.images}><Image  src="/membership4.png" alt="membership"  width={64} height={49} /></div>
          </div>
        </div>
        
      </div>
    </div>
    <div className="col-lg-1"></div>
    </div>
</div>
</div>

<div className="container">
  <div className={classes.whatWeOffer}>
  <div className="row">
    <div className="col-lg-1"></div>
    <div className="col-lg-4">
    <Image  src="/weOffer1.png" alt="membership"  width={544} height={437} />
    </div> 
    <div className="col-lg-1">
    </div>
    <div className={`col-lg-5 ${classes.centerColumn}`}>
      <div className={classes.textDetail}>
        <div className={classes.weOffer}>What we offer</div>
        <Space size={componentSizes.small}/>
        <Space size={componentSizes.large}/>
        <Text size={componentSizes.medium}>We offer Voice and Data Connectivity products and services to various business verticals – oil & Gas / Defense / Media / Maritime / Government & Humanitarian Agencies.</Text>
        <Space size={componentSizes.small}/>
        <Space size={componentSizes.large}/>
        <Space size={componentSizes.large}/>
        <Link href={'/'} className={classes.learnmore}>
          <Text size={componentSizes.medium}>Learn More </Text>
          <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9.5H25M25 9.5L16.5 1M25 9.5L16.5 18" stroke="#0A0908" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
    <div className="col-lg-1"></div>
  </div>

  <div className="row ">
    <div className="col-lg-1"></div>
    <div className="col-lg-4">
    <Image  src="/weOffer2.png" alt="membership"  width={544} height={437} />
    </div> 
    <div className="col-lg-1">
    </div>
    <div className={`col-lg-5 ${classes.centerColumn}`}>
      <div className={classes.textDetail}>
        <div className={classes.weOffer}>Our Position In Industry</div>
        <Space size={componentSizes.small}/>
        <Space size={componentSizes.large}/>
        <Text size={componentSizes.medium}>Taking advantage of the rich experience of its team members, Galaxy Telecom is a distinguished and recognized leader in the Telecommunications industry.</Text>
        <Space size={componentSizes.small}/>
        <Space size={componentSizes.large}/>
        <Space size={componentSizes.large}/>
        <Link href={'/'} className={classes.learnmore}>
          <Text size={componentSizes.medium}>Learn More </Text>
          <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9.5H25M25 9.5L16.5 1M25 9.5L16.5 18" stroke="#0A0908" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
    <div className="col-lg-1"></div>
  </div>
  </div>
  {/* Values & code of Ethics */}

  <div className={classes.Ethics}>
    <div className="row">
      <div className="col-lg-1"></div>
      <div className="col-lg-10">Value of code and ethics </div>
      <div className="col-lg-1"></div>
    </div>
  </div>
</div>

</>
  );
};
