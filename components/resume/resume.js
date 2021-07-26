import { useState, useRef, useEffect } from 'react';
import { useIntersection } from 'react-use';
import { styles } from 'styles/styles';
import * as Scroll from 'react-scroll';
import { gsap, Sine } from "gsap";
const Element = Scroll.Element;

export const Resume = ({ innerRef }) => {
    const [ tween, setTween ] = useState(); // animation tween
    const resumeRef = useRef(null); // tween reference

    // trigger on intersection 
    const intersection = useIntersection(innerRef, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    });

    // tween effect
    useEffect(
        () => {
            if (intersection && intersection.isIntersecting) {
                setTween(
                    gsap.to([resumeRef.current], {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        ease: Sine.easeOut,
                        duration: 0.2,
                    })
                );
            } else if (tween && tween.paused) {
                tween.reverse();
            }
        },
        [ intersection ],
    );

    return (
        <Element name="resumeSection">
            <div style={styles.resume} ref={innerRef}>
                <h1 style={styles.sectionTitle}>Resume</h1>
                <img src="resume.png" alt="resume" style={styles.resume.image} ref={resumeRef} />     
                <a href='/resume.pdf' style={styles.resume.downloadLink} download>Download as PDF</a>                
            </div>
        </Element>
    )
}
