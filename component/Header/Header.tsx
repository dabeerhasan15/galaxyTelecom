"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  const [active, setActive] = useState("Home");

  const linkClass = (name: string) =>
    `${styles.link} ${active === name ? styles.active : ""}`;

  return (
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
              <a
                href="/"
                onClick={() => setActive("Home")}
                className={linkClass("Home")}
              >
                Home
              </a>
              <a
                href="/aboutUs"
                onClick={() => setActive("About")}
                className={linkClass("About")}
              >
                About Us
              </a>
              <a
                href="/services"
                onClick={() => setActive("Services")}
                className={linkClass("Services")}
              >
                Services
              </a>
              <a
                href="/product"
                onClick={() => setActive("Product")}
                className={linkClass("Product")}
              >
                Product
              </a>
            </nav>

            <div className={styles.buttonContainer}>
              <button className={styles.contactButton}>Contact Us</button>
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
  );
};
