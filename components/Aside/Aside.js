import React from "react";
import Image from "next/image";
import styles from "./../Aside/Aside.module.css";
import mail from "./../../public/images/icons/mail-icon.svg";
import phone from "./../../public/images/icons/phone-icon.svg";
import location from "./../../public/images/icons/location-icon.svg";
import Link from "next/link";

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <div className={styles.details}>
        <span className={styles.icon}>
          <Image src={mail} alt="mail logo" width="18" height="18" />
        </span>
        <span><Link href="mailto: thucnhi.van@gmail.com">thucnhi.van@gmail.com</Link></span>
      </div>
      <div className={styles.details}>
        <span className={styles.icon}>
          <Image src={phone} alt="phone logo" width="18" height="18" />
        </span>
        <span>06.44.06.79.43</span>
      </div>
      <div className={styles.details}>
        <span className={styles.icon}>
          <Image src={location} alt="location logo" width="18" height="18" />
        </span>
        <span>Marseille</span>
      </div>
    </aside>
  );
}
