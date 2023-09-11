import React from "react";
import styles from "./../GalleryCard/GalleryCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function GalleryCard({ project }) {
  return (
    <>
      <article className={project.style} data-aos="fade-down">
        <Image
          src={`/images/${project.image_1}`}
          alt={`projet${project.id}`}
          width="1920"
          height="1080"
        />
        <Link href={`/projects/${project.url}`}>
          <div className="overlay">
            <div className={styles.description}>
              <h2 className={styles.title}>{project.name}</h2>
              <ul className={styles.btnOutline}>
                <li>Voir</li>
              </ul>
            </div>
          </div>
        </Link>
      </article>
    </>
  );
}
