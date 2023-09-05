import React from 'react';
import Head from 'next/head';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Container({ children }) {
  return (
    <>
        <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Passionnée par le développement web, je crée des sites web et des applications web. "
        />
        <meta
          property="og:title"
          content="Thuc-Nhi Wiedenhofer - Développeur d'application web spécialité Front End Javascript React"
        />
        <meta property="og:type" content=" web developer website" />
        <meta property="og:url" content="https://tn-portfolio-next-js.vercel.app/" />
        <meta property="og:image" content="" />
        <meta
          property="og:description"
          content=" Passionnée par le développement web, j'aimerais travailler sur votre projet de création de site web ou d'application web."
        />
        <title>Thuc Nhi Wiedenhofer Portfolio</title>
      </Head>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}
