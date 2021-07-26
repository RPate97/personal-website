import { styles } from '../../styles/styles.js'
import { LeftRightTextImage } from './leftRightTextImage'
import { RightLeftTextImage } from './rightLeftTextImage'
import * as Scroll from 'react-scroll';
const Element = Scroll.Element;

export const Portfolio = ({ innerRef }) => {
    return (
        <Element name="portfolioSection">
            <div ref={innerRef}>
                <h1 style={styles.sectionTitle}>Portfolio</h1>
                <LeftRightTextImage 
                    title="Ryan Pate"
                    text="Welcome to my personal website. Scroll down to view portfolio projects."
                    image="stonks.jpg"
                />
                <RightLeftTextImage 
                    title="Ryan Pate"
                    text="Welcome to my personal website. Scroll down to view portfolio projects."
                    image="stonks.jpg"
                />
                <LeftRightTextImage 
                    title="Ryan Pate"
                    text="Welcome to my personal website. Scroll down to view portfolio projects."
                    image="stonks.jpg"
                />
                <RightLeftTextImage 
                    title="Ryan Pate"
                    text="Welcome to my personal website. Scroll down to view portfolio projects."
                    image="stonks.jpg"
                />
                <LeftRightTextImage 
                    title="Ryan Pate"
                    text="Welcome to my personal website. Scroll down to view portfolio projects."
                    image="stonks.jpg"
                />
            </div>
        </Element>            
    )
}