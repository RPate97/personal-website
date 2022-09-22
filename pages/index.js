import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import { useIntersection } from 'react-use';
import { NavBar } from 'components/nav-bar';
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
  const [section, setSection] = useState(0);

  const introIntersection = useIntersection(introTrigger, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  const portfolioIntersection = useIntersection(portfolioTrigger, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });

  const valuesIntersection = useIntersection(valuesTrigger, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });

  const resumeIntersection = useIntersection(resumeTrigger, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(
    () => {
      console.log("trigger")
      if (introIntersection && introIntersection.isIntersecting) {
        setSection(0);
      } else if (portfolioIntersection && portfolioIntersection.isIntersecting) {
        setSection(1);
      } else if (valuesIntersection && valuesIntersection.isIntersecting) {
        setSection(2);
      } else if (resumeIntersection && resumeIntersection.isIntersecting) {
        setSection(3);
      }
    },
    [ introIntersection, portfolioIntersection, valuesIntersection, resumeIntersection, setSection ],
  );


  return (
    <div>
      <Head>
        <title>Ryan Pate</title>
        <meta name="description" content="Personal website and portfolio of Ryan Pate." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <NavBar section={section} setSection={setSection} />
        <Intro innerRef={introTrigger} />
        <Portfolio innerRef={portfolioTrigger} />
        <Values innerRef={valuesTrigger} />
        <Resume innerRef={resumeTrigger} />
        <Footer />          
      </main>
    </div>
  )
}
