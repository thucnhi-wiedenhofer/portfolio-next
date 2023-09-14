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
      offset: 200, // offset (in px) from the original trigger point
      delay: 400, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out",
    });
  });
  return (
    <Container className={inter.className}>
      <Component {...pageProps} />
    </Container>
  );
}
