import Image from "next/image";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.decorRight}>
        <Image src="/footer-right.svg" alt="footer" width={126} height={319} />
      </div>

      <div className={styles.decorLeft}>
        <Image src="/footer-left.svg" alt="footer" width={494} height={707} />
      </div>

      <div className={styles.outer}>
        <div className={styles.content}>
          {/* Large Brand Text */}
          <div className={styles.brand}>GalaxyTelecom</div>
        </div>
      </div>
    </footer>
  );
};

/* Footer */
