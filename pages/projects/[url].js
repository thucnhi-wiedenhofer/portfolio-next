import React from "react";
import Link from "next/link";
import styles from "@/styles/projet.module.css";
import Slider from "@/components/Slider/Slider";

export default function Url({ project }) {
  console.log(project);
  return (
    <>
      <section className={styles.container} data-aos="fade-down">
        
      </section>
    </>
  );
}

export async function getStaticProps(context){
  const slug = context.params.url;
  const data = await import('/data/projects.js');
const listProjects = data.projects.find(list => list.name === slug)
  
  return {
    props: {
      project: listProjects.data
    },
  };
};


export async function getStaticPaths() {
  const projects = await import('/data/projects.js')
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