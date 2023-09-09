import React from "react";
import GalleryCard from "@/components/GalleryCard/GalleryCard";
import styles from "@/styles/projets.module.css";
import projects from "./../../data/projects";

export default function index({ props }) {
  console.log(props);
  return (
    <>
      <section className={styles.banner} data-aos="fade-right">
        <h1 className={styles.title}>Projets</h1>
      </section>

      <section id="projects" className={styles.container}>
        <div className={styles.row}></div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const data = await import(`./../../data/projects.js`);
  const array = data.projects;

  return {
    props: {
      array,
    },
  };
}
