import React from "react";
import styles from "@/styles/contact.module.css";
import ContactForm from "@/components/ContactForm/ContactForm";
import Aside from "@/components/Aside/Aside";

export default function Contact() {
  return (
    <>
      <section id="banner" data-aos="fade-right">
        <div className={styles.container}>
          <h1 className={styles.title}>Contactez-moi</h1>
          <p className={styles.intro}>
            Vous avez un projet ? <br /> Je suis à votre disposition pour toutes
            demandes de devis ou de renseignements complémentaires sur mes
            services. <br />
            Je serais ravie de pouvoir collaborer avec vous.
          </p>
        </div>
      </section>
      <section id="contact" className={styles.container} data-aos="fade-down">
        <div className={styles.contact}>
          <ContactForm />
          <Aside />
        </div>
      </section>
    </>
  );
}
