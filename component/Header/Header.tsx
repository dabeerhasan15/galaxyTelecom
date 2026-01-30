"use client";

import { componentSizes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Space } from "../Space";
import { Text } from "../Text";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const linkClass = (path: string) =>
    `${styles.link} ${isActive(path) ? styles.active : ""}`;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <div className={styles.logoContainer}>
              <div className={styles.logoWrapper}>
                <Image
                  src="/Logo.png"
                  alt="Galaxy Telecom Logo"
                  width={240}
                  height={66}
                  className={styles.logo}
                  priority
                />
              </div>
            </div>

            <div className={styles.navWrapper}>
              <nav className={styles.nav}>
                <Link href="/" className={linkClass("/")}>
                  Home
                </Link>
                <Link href="/aboutUs" className={linkClass("/aboutUs")}>
                  About Us
                </Link>
                <Link href="/services" className={linkClass("/services")}>
                  Services
                </Link>
                <Link href="/product" className={linkClass("/product")}>
                  Product
                </Link>
              </nav>

              <div className={styles.buttonContainer}>
                <button 
                  className={styles.contactButton}
                  onClick={() => setIsContactOpen(true)}
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className={styles.mobileMenu}>
              <button className={styles.mobileMenuButton}>
                <svg
                  className={styles.mobileMenuIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Modal */}
      {isContactOpen && (
        <>
          <div 
            className={styles.overlay}
            onClick={() => setIsContactOpen(false)}
          />
          <div className={styles.contactModal}>
            <button 
              className={styles.closeButton}
              onClick={() => setIsContactOpen(false)}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.9902 6.00638L7.0081 23.9885" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25 23.9874L7.01787 6.00528" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </button>

            

            <div className={styles.modalContent}>
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className={styles.flexgap}>

                  <div className={styles.modalHeader}>
                    <p className={styles.modalSubtitle}>Sales Team</p>
                    <h2 className={styles.modalTitle}>Contact Now</h2>
                    <p className={styles.modalDescription}>
                      Have questions ready to get started? Our sales<br />
                      is here for any query of you.
                    </p>
                  </div>

                  <div className={styles.flexx}>
                    <div className={styles.contactInfo}>
                      <div className={styles.infoItem}>
                        <h4>Contact us</h4>
                        <p>+92-51-8436786</p>
                        <p>info@galaxy-telecom.com</p>
                      </div>

                      <div className={styles.infoItem}>
                        <h4>P.O. Box</h4>
                        <Text>1658</Text>
                      </div>

                      <div className={styles.infoItem}>
                        <h4>Location</h4>
                        <p>Office# 005, Street 53,Gulberg</p>
                        <p>Green, Islamabad, Pakistan</p>
                      </div>
                    </div>

                    <div className={styles.socialLinks}>
                      <a href="#" aria-label="Facebook">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12.0572C22 6.5005 17.5199 2 11.9967 2C6.47342 2 2 6.5005 2 12.0572C2 17.0757 5.65764 21.2398 10.4386 21.9933V14.9701H7.89769V12.0639H10.4386V9.85066C10.4386 7.32795 11.9298 5.93542 14.2167 5.93542C15.3133 5.93542 16.4567 6.13051 16.4567 6.13051V8.60612H15.1929C13.9492 8.60612 13.5614 9.37975 13.5614 10.1803V12.0639H16.3363L15.895 14.9701H13.568V22C18.3424 21.2398 22 17.0824 22 12.0572Z" fill="#1F1F1F"/>
                      </svg>

                      </a>
                      <a href="#" aria-label="Instagram">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C14.7158 2 15.0564 2.01188 16.123 2.06055C17.1874 2.1091 17.9147 2.27818 18.5508 2.52539C19.2082 2.78089 19.7655 3.12292 20.3213 3.67871C20.8771 4.23455 21.2191 4.79187 21.4746 5.44922C21.7218 6.08532 21.8909 6.81257 21.9395 7.87695C21.9881 8.94356 22 9.28418 22 12C22 14.7158 21.9881 15.0564 21.9395 16.123C21.8909 17.1874 21.7218 17.9147 21.4746 18.5508C21.2191 19.2082 20.8771 19.7655 20.3213 20.3213C19.7655 20.8771 19.2082 21.219 18.5508 21.4746C17.9147 21.7218 17.1874 21.8909 16.123 21.9395C15.0564 21.9881 14.7158 22 12 22C9.28418 22 8.94352 21.9881 7.87695 21.9395C6.81257 21.8909 6.08532 21.7218 5.44922 21.4746C4.79188 21.219 4.23451 20.8771 3.67871 20.3213C3.12288 19.7655 2.78093 19.2081 2.52539 18.5508C2.27818 17.9147 2.10914 17.1874 2.06055 16.123C2.01188 15.0564 2 14.7158 2 12C2 9.28414 2.01188 8.94356 2.06055 7.87695C2.10914 6.81257 2.27818 6.08532 2.52539 5.44922C2.78093 4.79187 3.12287 4.23455 3.67871 3.67871C4.23452 3.12291 4.79186 2.78089 5.44922 2.52539C6.08532 2.27818 6.81257 2.1091 7.87695 2.06055C8.94352 2.01188 9.28418 2 12 2ZM11.999 3.79688C9.32889 3.79688 9.01251 3.80736 7.95801 3.85547C6.98347 3.89996 6.45393 4.06231 6.10156 4.19922C5.63484 4.38062 5.30108 4.59733 4.95117 4.94727C4.60126 5.29718 4.38453 5.63088 4.20312 6.09766C4.06625 6.45001 3.90387 6.97951 3.85938 7.9541C3.81126 9.00856 3.80078 9.32503 3.80078 11.9951C3.80078 14.6652 3.81126 14.9817 3.85938 16.0361C3.90388 17.0107 4.06625 17.5402 4.20312 17.8926C4.38453 18.3593 4.60126 18.6931 4.95117 19.043C5.30106 19.3929 5.63485 19.6096 6.10156 19.791C6.45392 19.9279 6.98348 20.0903 7.95801 20.1348C9.01231 20.1829 9.3287 20.1934 11.999 20.1934C14.6693 20.1934 14.9857 20.1829 16.04 20.1348C17.0146 20.0903 17.5441 19.9279 17.8965 19.791C18.3633 19.6096 18.697 19.3929 19.0469 19.043C19.3968 18.6931 19.6135 18.3593 19.7949 17.8926C19.9318 17.5402 20.0942 17.0107 20.1387 16.0361C20.1867 14.9817 20.1973 14.6652 20.1973 11.9951C20.1973 9.32503 20.1867 9.00856 20.1387 7.9541C20.0942 6.97954 19.9318 6.45001 19.7949 6.09766C19.6135 5.63091 19.3968 5.2972 19.0469 4.94727C18.697 4.59735 18.3633 4.38063 17.8965 4.19922C17.5441 4.0623 17.0146 3.89997 16.04 3.85547C14.9856 3.80736 14.6691 3.79688 11.999 3.79688ZM12.002 6.86719C14.8379 6.86719 17.1375 9.16606 17.1377 12.002C17.1377 14.838 14.838 17.1377 12.002 17.1377C9.16608 17.1375 6.86719 14.8379 6.86719 12.002C6.86737 9.16619 9.16619 6.8674 12.002 6.86719ZM12.001 8.67188C10.1603 8.67206 8.66813 10.1642 8.66797 12.0049C8.66797 13.8457 10.1602 15.3387 12.001 15.3389C13.8419 15.3389 15.335 13.8458 15.335 12.0049C15.3348 10.1641 13.8418 8.67188 12.001 8.67188ZM17.5195 5.5625C18.2337 5.5625 18.8133 6.14133 18.8135 6.85547C18.8135 7.56978 18.2338 8.14941 17.5195 8.14941C16.8054 8.1492 16.2266 7.56965 16.2266 6.85547C16.2268 6.14146 16.8055 5.56271 17.5195 5.5625Z" fill="#1F1F1F"/>
                      </svg>

                      </a>
                      <a href="#" aria-label="Twitter">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7299 3H20.7834L14.1124 10.6246L21.9604 21H15.8154L11.0025 14.7074L5.49548 21H2.4401L9.57549 12.8446L2.04688 3H8.34779L12.6982 8.75169L17.7299 3ZM16.6582 19.1723H18.3502L7.42841 4.73169H5.61271L16.6582 19.1723Z" fill="#1F1F1F"/>
                      </svg>

                      </a>
                    </div>
                  </div>
                  </div>

                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-7">
                  <form className={styles.contactForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Full Name *</label>
                    <Space size={componentSizes.medium}/>
                    <input type="text" placeholder="Enter First Name" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Last Name*</label>
                    <Space size={componentSizes.medium}/>
                    <input type="text" placeholder="Enter Last Name" />
                  </div>
                </div>

                <div className={styles.formRow}> 
                  <div className={styles.formGroup}>
                    <label>Phone Number *</label>
                    <Space size={componentSizes.medium}/>
                    <input type="text" placeholder="Enter Phone Number" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email *</label>
                    <Space size={componentSizes.medium}/>
                    <input type="email" placeholder="Enter Email" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Message*</label>
                  <Space size={componentSizes.medium}/>
                  <textarea 
                    placeholder="Enter Message"
                    rows={4}
                  />
                </div>
                <Space size={componentSizes.medium}/>
                <Space size={componentSizes.medium}/>
                <button type="submit" className={styles.submitButton}>
                  Submit
                </button>
                </form>
              </div>
              </div>
            </div>
        
            </div>
          </div>
        </>
      )}
    </>
  );
};