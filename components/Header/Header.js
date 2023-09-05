import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./../../public/images/logo_1.png";
import styles from "./../Header/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div>
          <Link href="/">
            <Image src={Logo} alt="logo" width="200" height="67" />
          </Link>
        </div>
        <div>
          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <Link className={styles.link} aria-current="page" href="/">
                Accueil
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
        </div>
      </nav>
    </header>
  );
}
