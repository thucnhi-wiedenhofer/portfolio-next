import "@/styles/globals.css";
import "@/styles/normalize.css";
import { Inter } from "next/font/google";
import Container from "../components/Container";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 200, 
      delay: 50, 
      duration: 600, 
      easing: "ease-in-out",
    });
  });
  return (
    <Container className={inter.className}>
      <Component {...pageProps} />
    </Container>
  );
}
