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
          <div className="container">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-3">a</div>
              <div className="col-lg-3"></div>
              <div className="col-lg-1">a</div>
              <div className="col-lg-1"></div>
              <div className="col-lg-2">a</div>
              <div className="col-lg-1"></div>
            </div>

            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-5">ww</div>
              <div className="col-lg-3"></div>
              <div className="col-lg-2">ww</div>
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
            <div className={styles.brand}>G</div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

/* Footer */
