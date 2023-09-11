import React from "react";
import Link from "next/link";
import styles from "@/styles/projet.module.css";
import Slider from "@/components/Slider/Slider";
import { projects } from "./../../data/projects";

export default function Url({ project }) {
  return (
    <>
      <section className={styles.container} data-aos="fade-down">
        <h1 className={styles.title}>{project.name}</h1>
        <Slider project={project} />
        <div className={styles.content}>
          <div className={styles.tag}>
            <span className={styles.badge}>{project.tag_1}</span>
            <span className={styles.badge}>{project.tag_2}</span>
            <span className={styles.badge}>{project.tag_3}</span>
          </div>
          <p className={styles.description}>
            {project.presentation}
            <br />
            {project.description}
          </p>
          <ul className={styles.action}>
            <li>
              <Link
                className={styles.btnOutline}
                href={project.link}
                target="_blank"
              >
                Visiter le site
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async ({ params: { url } }) => {
  const project = projects.find((item) => item.url === url);

  return {
    props: {
      project,
    },
  };
};

export async function getStaticPaths() {
  const paths = projects.map((item) => ({
    params: {
      url: item.url,
    },
  }));

  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
