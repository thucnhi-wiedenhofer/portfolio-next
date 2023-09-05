import { PrismaClient } from "@prisma/client";
import React from "react";
import Link from "next/link";
import styles from "@/styles/projet.module.css";
import Slider from "@/components/Slider/Slider";

export default function Url({ project }) {
  return (
    <>
      <section className={styles.container} data-aos="fade-down">
        <h1 className={styles.title}>{project[0].name}</h1>
        <Slider project={project[0]} />
        <div className={styles.content}>
          <div className={styles.tag}>
            <span className={styles.badge}>{project[0].tag_1}</span>
            <span className={styles.badge}>{project[0].tag_2}</span>
            <span className={styles.badge}>{project[0].tag_3}</span>
          </div>
          <p className={styles.description}>
            {project[0].presentation}
            <br />
            {project[0].description}
          </p>
          <ul className={styles.action}>
            <li>
              <Link
                className={styles.btnOutline}
                href={project[0].link}
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
  const prisma = new PrismaClient();
  const project = await prisma.projects.findMany({
    where: {
      url: {
        contains: url,
      },
    },
  });

  return {
    props: {
      project,
    },
  };
};

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const projects = await prisma.projects.findMany();

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
