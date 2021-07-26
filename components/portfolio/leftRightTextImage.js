import React, { useEffect, useState, useRef } from 'react';
import { PropTypes } from 'prop-types';
import { styles } from '../../styles/styles.js';
import { useIntersection } from 'react-use';
import { gsap, Power4 } from "gsap";

export const LeftRightTextImage = (props) => {
    const [ tween, setTween ] = useState(); // tween for right (picture)
    const [ leftTween, setLeftTween ] = useState(); // tween for left (text)
    const trigger = useRef(null); // trigger reference
    const textReference = useRef(null); // text reference
    const picReference = useRef(null); // picture reference

    // trigger on intersection
    const intersection = useIntersection(trigger, {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    });

    // tween effect
    useEffect(
        () => {
            if (intersection && intersection.isIntersecting) {
                setTween(
                    gsap.to([picReference.current], {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        ease: Power4.easeIn,
                        stagger: 0.0,
                        duration: 0.2,
                    })
                );
                setLeftTween(
                    gsap.to([textReference.current], {
                        opacity: 1,
                        x: 0,
                        y: 100,
                        ease: Power4.easeIn,
                        stagger: 0.0,
                        duration: 0.2,
                    })
                );
            } else if (tween && tween.paused) {
                tween.reverse();
                leftTween.reverse();
            }
        },
        [ intersection ],
    );

    return (
        <div style={styles.portfolio.item} ref={trigger}>
            <div ref={textReference} style={styles.portfolio.item.leftRight.left}>
                <h1 style={styles.title}>{props.title}</h1>
                <p1>{props.text}</p1>              
            </div>
            <img src={props.image} alt="Italian Trulli" style={styles.portfolio.item.leftRight.right} ref={picReference} />      
        </div>
    )
};

// require title, text, and image
LeftRightTextImage.PropTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}