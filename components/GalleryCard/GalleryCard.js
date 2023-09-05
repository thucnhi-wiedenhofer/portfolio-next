import React from "react";
import styles from "./../GalleryCard/GalleryCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function GalleryCard({ project }) {
  return (
    <>
      <article data-aos="fade-down">
        <h1>{project.title}</h1>
      </article>
    </>
  );
}
