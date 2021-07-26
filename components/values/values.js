import { useEffect, useState, useRef } from 'react'
import { styles } from '../../styles/styles.js';
import { GridItem } from './gridItem.js';
import { useIntersection } from 'react-use'
import { gsap, Sine } from "gsap"
import * as Scroll from 'react-scroll';
const Element = Scroll.Element;

export const Values = ({ innerRef }) => {
    const [ tween, setTween ] = useState();
    const trigger = useRef(null);
    const refOne = useRef(null);
    const refTwo = useRef(null);
    const refThree = useRef(null);
    const refFour = useRef(null);
    const refFive = useRef(null);
    const refSix = useRef(null);

    const intersection = useIntersection(trigger, {
        root: null,
        rootMargin: '0px',
        threshold: 0.9,
    });

    const data = [
        {
            title: 'Bias Towards Action',
            description: 'Earnest debate will find the right answer eventually, but trial and error gets there first. ' +
                         'When faced with a difficult challenge, bias towards action and learn from your failures. ' +
                         'Build, test, assess, repeat.',
            ref: refOne
        },
        {
            title: 'Work on Unpopular Problems',
            description: 'Why try to solve a problems dozens of others are working on? Those problem will be solved ' +
                         "regardless of your effort. Find the problems others aren't trying to solve and society will " +
                         'reward you.',
            ref: refTwo
        },
        {
            title: 'Sweat the Little Things',
            description: 'Design matters. Details matter. Edge cases matter. Solve the problem first, but then take time to go back ' +
                         'and sweat the little things lest someone who does will replace you.',
            ref: refThree
        },
        {
            title: 'Build Up Others',
            description: "The world is not zero sum. Build up others and good friends and colleagues will return the favor. " +
                         "Surround yourself with likeminded people.",
            ref: refFour
        },
        {
            title: 'Human + Machine > Machine || Human',
            description: "It's tempting to be distracted by the allure of total automation. Make no mistake, complete automation can be invaluable, " +
                         "but often the best solutions are the sum of human and machine.",
            ref: refFive
        },
        {
            title: 'Value Labor',
            description: 'The strongest foundations are those made up of fairly treated and well compensated labor. ' +
                         'The best businesses are those built on strong foundations (e.g AirBNB, Dutch Bros, Costco, Ford, etc). ' +
                         'A poor foundation is a weakness and should be exploited by competitors to the maximum possible degree.',
            ref: refSix
        }
    ];

    useEffect(
        () => {
            if (intersection && intersection.isIntersecting) {
                setTween(
                    gsap.to([refOne.current, refTwo.current, refThree.current, refFour.current, refFive.current, refSix.current], {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        ease: Sine.easeOut,
                        stagger: 0.05,
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
        <Element name="valuesSection">
            <div ref={innerRef}> 
                <h1 style={styles.sectionTitle}>Values</h1>
                <div style={styles.values.grid} ref={trigger}>
                    {
                        data.map((e, i) => {
                            return <GridItem element={e} key={i}/>
                        })
                    }                    
                </div>                  
            </div>
        </Element>
    );
}