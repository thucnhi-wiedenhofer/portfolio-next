import React from "react";
import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Container({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Thuc-Nhi Wiedenhofer" />
        <meta
          name="description"
          content="Passionnée par le développement web, je crée des sites web et des applications web. "
        />
        <meta
          property="og:title"
          content="Thuc-Nhi Wiedenhofer - Développeur d'application web spécialité Front End Javascript React"
        />
        <meta property="og:type" content="web developer website" />
        <meta
          property="og:url"
          content="https://portfolio-next-thucnhi-wiedenhofer.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://tnw-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservices.e7a238ba.png&w=1920&q=75"
        />
        <meta
          property="og:description"
          content=" Passionnée par le développement web, j'aimerais travailler sur votre projet de création de site web ou d'application web."
        />
        <title>Thuc Nhi Wiedenhofer Portfolio</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
