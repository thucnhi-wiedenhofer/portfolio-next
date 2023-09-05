import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import linkedin from "./../../public/images/icons/linkedin-icon.svg";
import github from "./../../public/images/icons/github-icon.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <Link className={styles.link} aria-current="page" href="/">
                Accueil
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.link} aria-current="page" href="/admin">
                Administration
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.btn} href="/projects">
                Projets
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.btnOutline} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <ul className={styles.label}>
            <li>
              <Link
                target="_blank"
                href="https://github.com/thucnhi-wiedenhofer"
              >
                <span className={styles.icon}>
                  <Image
                    src={github}
                    alt="Github logo"
                    width="18"
                    height="18"
                  />
                </span>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/thuc-nhi-wiedenhofer/"
              >
                <span className={styles.icon}>
                  <Image
                    src={linkedin}
                    alt="linkedin logo"
                    width="18"
                    height="18"
                  />
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
