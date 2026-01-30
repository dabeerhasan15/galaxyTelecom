"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const linkClass = (path: string) =>
    `${styles.link} ${isActive(path) ? styles.active : ""}`;

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