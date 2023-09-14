import React from "react";
import styles from "@/styles/contact.module.css";
//import ContactForm from "@/components/ContactForm/ContactForm";
import Image from "next/image";
import Aside from "@/components/Aside/Aside";
import photo from "./../public/images/tnw_small_2.jpg";

export default function Contact() {
  return (
    <>
      <section id="banner" data-aos="fade-right">
        <div className={styles.container}>
          <h1 className={styles.title}>Contactez-moi</h1>
          <div className={styles.contact} data-aos="fade-up">
            <Image
              src={photo}
              alt="thuc-nhi Wiedenhofer"
              width="250"
              height="250"
              className={styles.photo}
            />

            <p className={styles.intro}>
              Vous avez un projet ? <br /> Je suis à votre disposition pour
              toutes demandes de devis ou de renseignements complémentaires sur
              mes services. <br />
              Je serais ravie de pouvoir collaborer avec vous.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className={styles.container} data-aos="fade-down">
        <div className={styles.contact}>
          <Aside />
        </div>
      </section>
    </>
  );
}
