import React, { useEffect, useState, useRef } from 'react';
import { PropTypes } from 'prop-types';
import { styles } from '../../styles/styles.js'
import { useIntersection } from 'react-use';
import { gsap, Power4 } from "gsap";

// import { CSSTransition, TransitionGroup } from 'react-transition-group'

export const RightLeftTextImage = (props) => {

    const [ tween, setTween ] = useState();
    const [ leftTween, setLeftTween ] = useState();
    const trigger = useRef(null);
    const textReference = useRef(null);
    const picReference = useRef(null);

    const intersection = useIntersection(trigger, {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    });

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
            <img src={props.image} alt="Italian Trulli" style={styles.portfolio.item.rightLeft.left} ref={picReference} />      
            <div ref={textReference} style={styles.portfolio.item.rightLeft.right}>
                <h1 style={styles.title}>{props.title}</h1>
                <p1>{props.text}</p1>              
            </div>
        </div>
    )
};

RightLeftTextImage.PropTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}