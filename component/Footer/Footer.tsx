import { componentSizes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Space } from "../Space";
import classes from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.decorRight}>
        <Image src="/footer-right.svg" alt="footer" width={126} height={319} />
      </div>

      <div className={classes.decorLeft}>
        <Image src="/footer-left.svg" alt="footer" width={494} height={707} />
      </div>

      <div className={classes.outer}>
        <div className={classes.content}>
          <div className="container">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-3">
                  <div className={classes.text}>Subscribe to the newsletter</div>
                  <Space/>
                  <input type="email" placeholder="E-mail" className={classes.input} />
                  <Space size={componentSizes.regular}/>
                  <div className={classes.signup}>Sign up</div>
              </div>
              <div className="col-lg-3"></div>
              <div className="col-lg-1">
                <div className={classes.navigation}>
                <div className={classes.fields}>Navigation</div>
                <Link href="/" className={classes.field}>
                  Home
                </Link>
                <Link href="/aboutUs" className={classes.field}>About Us</Link>
                <Link href="/services" className={classes.field}>Service</Link>
                <Link href="/product" className={classes.field}>Products</Link>
                <Link href="/" className={classes.field}>Contact Us</Link>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-2">
                <div>We are accessible around the clock to assist you with product purchases or offer technical support.</div>
                  <Space size={componentSizes.large}/>
                <div className={classes.flex}>More about us <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="6" height="6" rx="3" fill="white"/>
                  </svg>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
            <Space size={componentSizes.regular}/>

            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-5">
                <div className={classes.contactUs}>
                  <div>
                    <div>Contact Us</div>
                    <div>+971-4-2780986</div>
                    <div>info@galaxy-telecom.com</div>
                  </div>
                  <div></div>
                  <div></div>

                </div>
              </div>
              <div className="col-lg-3"></div>
              <div className="col-lg-2">
                <div>
                Languages
                </div>
                <Space/>
                <div className={classes.flex}>
                  <div>En</div>
                  <div>Es</div>
                  <div>Fr</div>
                  <div>De</div>
                  <div>Ru</div> 
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>


            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-6">ww</div>
              <div className="col-lg-2"></div>
              <div className="col-lg-2">sss</div>
              <div className="col-lg-1"></div>
            </div>

            <div className="row">
            <div className={classes.brand}>Galaxy Telecom</div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

/* Footer */
