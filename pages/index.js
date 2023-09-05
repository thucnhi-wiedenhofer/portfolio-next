/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import arrow from "./../public/images/icons/arrow-icon.svg";
import project_1 from "./../public/images/services_1.png";
import project_2 from "./../public/images/kasa_app.png";

export default function Home() {
  return (
    <>
      <section id="banner" data-aos="fade-right">
        <div className={styles.banner}>
          <div className={styles.title}>
            <h1>
              <span className={styles.first}>Développeuse</span>{" "}
              <span className={styles.second}>Web</span>
            </h1>
          </div>
          <div className={styles.content}>
            <p>
              Développeuse d'applications web, <br />
              J'aimerais travailler pour votre prochain projet
            </p>
            <ul>
              <li className={styles.navItem}>
                <Link className={styles.btnSlide} href="/projects">
                  <span>Voir mon portfolio</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="services" className={styles.container}>
        <article className={styles.services}>
          <div className={styles.imgFluid} data-aos="fade-up">
            <Image
              src={project_1}
              alt="site web responsives"
              width="1920"
              height="1080"
            />
          </div>

          <div className={styles.description}>
            <div className={styles.header}>
              <h2>Création de sites web responsives</h2>
            </div>
            <p>
              Je crée des sites web dynamiques compatibles à tous supports: PC,
              tablette et mobile.
              <br />
              Avec une intégration repectueuse des standards du web pour un
              référencement optimal.
            </p>
            <ul className={styles.action}>
              <li>
                <Link className={styles.btnOutline} href="/projects">
                  En savoir plus
                </Link>
              </li>
            </ul>
          </div>
        </article>
        <article className={styles.services}>
          <div className={styles.imgFluid} data-aos="fade-up">
            <Image
              src={project_2}
              alt="mobile app"
              width="1920"
              height="1080"
            />
          </div>

          <div className={styles.description}>
            <div className={styles.header}>
              <h2>Développement d'application spécialité front-end</h2>
            </div>
            <p>
              Je conçois et modélise des applications avec Javascript et React.
              <br /> Cela comprend la conception de wireframes, l'intégration de
              maquettes, ainsi que les tests et les débuggages.
            </p>
            <ul className={styles.action}>
              <li>
                <Link className={styles.btnOutline} href="/projects">
                  En savoir plus
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
}
