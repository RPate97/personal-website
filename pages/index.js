import Head from 'next/head'
import { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { NavBar } from '../components/NavBar.js';
import { styles } from '../styles/styles.js';
import { Footer } from '../components/footer';
import { Portfolio } from '../components/portfolio/portfolio';
import { Resume } from '../components/resume/resume';
import { Values } from '../components/values/values';
import { Intro } from '../components/intro/intro';
 
export default function Home() {
  const introTrigger = useRef(null);
  const portfolioTrigger = useRef(null);
  const valuesTrigger = useRef(null);
  const resumeTrigger = useRef(null);
  const navRef = useRef(null);  

  const introIntersection = useIntersection(introTrigger, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  const portfolioIntersection = useIntersection(portfolioTrigger, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  });

  const valuesIntersection = useIntersection(valuesTrigger, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  const resumeIntersection = useIntersection(resumeTrigger, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(
    () => {
      console.log("use effect");
      if (introIntersection && introIntersection.isIntersecting) {
        console.log("setting intro section");
        navRef.current.setSection(0);
      } else if (portfolioIntersection && portfolioIntersection.isIntersecting) {
        console.log("setting portfolio section");
        navRef.current.setSection(1);
      } else if (valuesIntersection && valuesIntersection.isIntersecting) {
        console.log("setting values section");
        navRef.current.setSection(2);
      } else if (resumeIntersection && resumeIntersection.isIntersecting) {
        console.log("setting resume section");
        navRef.current.setSection(3);
      }
    },
    [ introIntersection, portfolioIntersection, valuesIntersection, resumeIntersection ],
  );


  return (
    <div>
      <Head>
        <title>Ryan Pate</title>
        <meta name="description" content="Personal website and portfolio of Ryan Pate." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <NavBar page={0} ref={navRef} />
        <Intro innerRef={introTrigger} />
        <Portfolio innerRef={portfolioTrigger} />
        <Values innerRef={valuesTrigger} />
        <Resume innerRef={resumeTrigger} />
        <Footer />          
      </main>
    </div>
  )
}
