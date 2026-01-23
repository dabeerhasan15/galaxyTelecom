import { Text } from "@/component/Text";
import { htmlTag } from "@/types";


export const Home = () => {

  return (
    <div className="container">
        
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="pt-36 text-center  font-normal text-[80px] leading-[110%] text-center capitalize">
              <Text tag={htmlTag.h1}>Latest Telecom hardware & robust Service solutions</Text>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>

        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="pt-6 font-outfit font-light text-[24px] text-center capitalize text-[#696969]">We offer Voice and Data Connectivity products and services to various business verticals – oil & Gas / Defense / Media /Maritime / Government & Humanitarian Agencies.</div>
            </div>
          <div className="col-lg-3"></div>
        </div>

      </div>
  );
};
