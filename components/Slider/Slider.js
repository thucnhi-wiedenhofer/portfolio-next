import React from "react";
import styles from "./Slider.module.css";
import Image from "next/image";

export default function Slider({ project }) {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <Image
          src={`/images/${project.image_1}`}
          alt={`slide1 du projet${project.name}`}
          width="1920"
          height="1080"
        />
        <Image
          src={`/images/${project.image_2}`}
          alt={`slide2 du projet${project.name}`}
          width="1920"
          height="1080"
        />
        <Image
          src={`/images/${project.image_3}`}
          alt={`slide3 du projet${project.name}`}
          width="1920"
          height="1080"
        />
        <Image
          src={`/images/${project.image_1}`}
          alt={`slide1 du projet${project.name}`}
          width="1920"
          height="1080"
        />
      </div>
    </div>
  );
}
