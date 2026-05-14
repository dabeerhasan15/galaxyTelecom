"use client";
import { useContactModal } from "@/context/ContactModalContext";
import { componentSizes } from "@/types";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Space } from "../Space";
import classes from "./Footer.module.scss";

export const Footer = () => {
  const { openContactModal } = useContactModal();
  const footerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [footerRevealed, setFooterRevealed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  const staticFooterLayout = reducedMotion || isMobileViewport;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const sync = () => setIsMobileViewport(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    if (staticFooterLayout) return;
    const el = footerRef.current;
    if (!el) return;

    const measure = () => {
      const h = Math.ceil(Math.max(el.offsetHeight, el.scrollHeight));
      if (h > 0) {
        setFooterHeight((prev) => (prev !== h ? h : prev));
      }
    };

    measure();
    requestAnimationFrame(() => {
      measure();
      requestAnimationFrame(measure);
    });

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [staticFooterLayout]);

  useEffect(() => {
    if (staticFooterLayout) return;

    const updateReveal = () => {
      const el = footerRef.current;
      const fh = el
        ? Math.ceil(Math.max(el.offsetHeight, el.scrollHeight))
        : footerHeight;
      const doc = document.documentElement;
      const scrollBottom = window.scrollY + window.innerHeight;
      const threshold = Math.max(200, fh * 0.55);
      const nearDocumentEnd = scrollBottom >= doc.scrollHeight - threshold;

      setFooterRevealed(nearDocumentEnd);
    };

    updateReveal();
    window.addEventListener("scroll", updateReveal, { passive: true });
    window.addEventListener("resize", updateReveal);
    return () => {
      window.removeEventListener("scroll", updateReveal);
      window.removeEventListener("resize", updateReveal);
    };
  }, [staticFooterLayout, footerHeight]);

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const mouse = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    const spacing = 18;
    let particles: {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
    }[] = [];

    const rebuildParticles = () => {
      const cols = Math.floor(canvas.width / spacing);
      const rows = Math.floor(canvas.height / spacing);
      particles = [];
      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          particles.push({
            baseX: x * spacing,
            baseY: y * spacing,
            x: x * spacing,
            y: y * spacing,
          });
        }
      }
    };
    rebuildParticles();

    let time = 0;
    let rafId = 0;
    let cancelled = false;

    const animate = () => {
      if (cancelled) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const repelRadius = 120;

        const wave =
          Math.sin((p.baseX + time) * 0.02) * 12 +
          Math.cos((p.baseY + time) * 0.02) * 12;

        let targetX = p.baseX;
        let targetY = p.baseY + wave;

        if (dist < repelRadius) {
          const angle = Math.atan2(dy, dx);

          targetX -= Math.cos(angle) * (repelRadius - dist);
          targetY -= Math.sin(angle) * (repelRadius - dist);
        }

        p.x += (targetX - p.x) * 0.08;
        p.y += (targetY - p.y) * 0.08;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = "#777676";
        ctx.fill();
      });

      time += 0.8;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    const onResize = () => {
      resize();
      rebuildParticles();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, [reducedMotion]);

  const stickyClasses = staticFooterLayout
    ? ""
    : `${classes.footerSticky} ${footerRevealed ? classes.footerStickyOpen : ""}`;

  return (
    <>
      {!staticFooterLayout && (
        <div
          className={classes.footerRevealSpacer}
          style={{ height: footerHeight }}
          aria-hidden
        />
      )}
      <footer
        ref={footerRef}
        className={`${classes.footer} ${stickyClasses}`.trim()}
      >
      <canvas ref={canvasRef} className={classes.waveCanvas} aria-hidden />
      {/* <div className={classes.decorRight}>
        <Image src="/footer-right.svg" alt="footer" width={126} height={319} />
      </div>

      <div className={classes.decorLeft}>
        <Image src="/footer-left.svg" alt="footer" width={494} height={707} />
      </div> */}

      <div className={classes.outer}>
        <div className={classes.content}>
          <div className="container">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-3">
                <div className={classes.text}>Subscribe to the newsletter</div>
                <Space />
                <input
                  type="email"
                  placeholder="E-mail"
                  className={classes.input}
                />
                <Space size={componentSizes.regular} />
                <div className={classes.signup}>Sign up</div>
                <Space size={componentSizes.regular} />
              </div>
              <div className="col-lg-3"></div>
              <div className="col-lg-1">
                <div className={classes.navigation}>
                  <div className={classes.fields}>Navigation</div>
                  <Link href="/" className={classes.field}>
                    Home
                  </Link>
                  <Link href="/aboutUs" className={classes.field}>
                    About Us
                  </Link>
                  <Link href="/services" className={classes.field}>
                    Service
                  </Link>
                  <Link href="/product" className={classes.field}>
                    Products
                  </Link>
                  <button onClick={openContactModal} className={classes.field}>
                    Contact Us
                  </button>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-2">
                <div>
                  We are accessible around the clock to assist you with product
                  purchases or offer technical support.
                </div>
                <Space size={componentSizes.large} />
                <div className={classes.flex}>
                  More about us{" "}
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="6" height="6" rx="3" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
            <Space size={componentSizes.regular} />

            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-5">
                <div className={classes.contactUs}>
                  <div>
                    <div className={classes.contact}>Contact Us</div>
                    <Space />
                    <div>
                      <a href="tel:+97142780986" className={classes.number}>
                        +971-4-2780986
                      </a>
                    </div>

                    <div>
                      <a
                        href="mailto:info@galaxy-telecom.com"
                        className={classes.number}
                      >
                        info@galaxy-telecom.com
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className={classes.contact}>P.O. Box</div>
                    <Space />
                    <div>74302</div>
                  </div>

                  <div>
                    <div className={classes.contact}>Location</div>
                    <Space />
                    <div className={classes.number}>
                      {" "}
                      Office: 407-1, B Block, HQ Building,
                    </div>
                    <div className={classes.number}>
                      Dubai Silicon Oasis, Dubai - UAE.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6"></div>
            </div>

            <div className={classes.termandservice}>
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-6">
                  <div className={classes.terms}>
                    <div className={classes.support}>
                      © 2025 | Galaxy Telecom
                    </div>
                    <div className={classes.privacy}>
                      <div>Privacy Policy</div>
                      <div>Cookie Policy</div>
                      <div>Term of Service</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5"></div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className={classes.brand}>Galaxy Telecom</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.outers}>
        <div className={classes.content}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className={classes.text}>Subscribe to the newsletter</div>
                <Space />
                <input
                  type="email"
                  placeholder="E-mail"
                  className={classes.input}
                />
                <Space size={componentSizes.regular} />
                <div className={classes.signup}>Sign up</div>
              </div>

              <div className="col-lg-2">
                <div className={classes.contactinfo}>
                  <div>
                    We are accessible around the clock to assist you with
                    product purchases or offer technical support.
                  </div>
                  <div className={classes.moreaboutus}>
                    More about us{" "}
                    <svg
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="6" height="6" rx="3" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className={classes.contactuson}>
                <div className="col-lg-5">
                  <div className={classes.contactUs}>
                    <div>
                      <div className={classes.contact}>Contact Us</div>
                      <Space />
                      <div>
                        <a href="tel:+97142780986" className={classes.number}>
                          +971-4-2780986
                        </a>
                      </div>

                      <div>
                        <a
                          href="mailto:info@galaxy-telecom.com"
                          className={classes.number}
                        >
                          info@galaxy-telecom.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className={classes.contactUs}>
                    <div>
                      <div className={classes.contact}>P.O. Box</div>
                      <Space />
                      <div className={classes.number}>74302</div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className={classes.contactUs}>
                    <div>
                      <div className={classes.contact}>Location</div>
                      <Space />
                      <div className={classes.number}>
                        {" "}
                        Office: 407-1, B Block, HQ Building,
                      </div>
                      <div className={classes.number}>
                        Dubai Silicon Oasis, Dubai - UAE.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.navigations}>Navigation</div>
            <div className={classes.flexs}>
              <div className={classes.navigation}>
                <Link href="/" className={classes.field}>
                  Home
                </Link>
                <Link href="/aboutUs" className={classes.field}>
                  About Us
                </Link>
                <Link href="/services" className={classes.field}>
                  Service
                </Link>
              </div>

              <div className={classes.navigation}>
                <Link href="/product" className={classes.field}>
                  Products
                </Link>
                <button onClick={openContactModal} className={classes.field}>
                  Contact Us
                </button>
              </div>
            </div>

            <div className={classes.termandservices}>
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-6">
                  <div className={classes.terms}>
                    <div className={classes.privacy}>
                      <div>Privacy Policy</div>
                      <div>Cookie Policy</div>
                      <div>Term of Service</div>
                    </div>
                  </div>

                  <div className={classes.supports}>
                    © 2025 | Galaxy Telecom
                  </div>
                </div>
                <div className="col-lg-5"></div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className={classes.brands}>Galaxy Telecom</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};
