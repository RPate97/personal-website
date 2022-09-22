import { styles } from '../../styles/styles.js'
import { LeftRightTextImage } from './leftRightTextImage'
import { RightLeftTextImage } from './rightLeftTextImage'
import * as Scroll from 'react-scroll';
const Element = Scroll.Element;

const githubLink = "GitHub".link("https://github.com/RPate97/personal-website");

export const Portfolio = ({ innerRef }) => {
    return (
        <Element name="portfolioSection">
            <div ref={innerRef}>
                <h1 style={styles.sectionTitle}>Portfolio - This Website</h1>
                <LeftRightTextImage image="stonks.jpg">
                    <h1 style={styles.title}>Tech Stack</h1>
                    <p1>Custom built with React (Next.js) and JavaScript. Hosted on Vercel. View the source on <a style={{color: 'white'}} href="https://github.com/RPate97/personal-website">Github</a>.</p1>
                </LeftRightTextImage>

                <h1 style={styles.sectionTitle}>Portfolio - Deliciously Inc</h1>
                <RightLeftTextImage image="stonks.jpg">
                    <h1 style={styles.title}>Ryan Pate</h1>
                    <p1>Welcome to my personal website. Scroll down to view portfolio projects.</p1>
                </RightLeftTextImage>
                <LeftRightTextImage image="stonks.jpg">
                    <h1 style={styles.title}>Ryan Pate</h1>
                    <p1>Welcome to my personal website. Scroll down to view portfolio projects.</p1>
                </LeftRightTextImage>
                <RightLeftTextImage image="stonks.jpg">
                    <h1 style={styles.title}>Ryan Pate</h1>
                    <p1>Welcome to my personal website. Scroll down to view portfolio projects.</p1>
                </RightLeftTextImage>

                <h1 style={styles.sectionTitle}>Portfolio - Zazu</h1>
                <LeftRightTextImage image="stonks.jpg">
                    <h1 style={styles.title}>Ryan Pate</h1>
                    <p1>Welcome to my personal website. Scroll down to view portfolio projects.</p1>
                </LeftRightTextImage>
                <RightLeftTextImage image="stonks.jpg">
                    <h1 style={styles.title}>Ryan Pate</h1>
                    <p1>Welcome to my personal website. Scroll down to view portfolio projects.</p1>
                </RightLeftTextImage>
                <LeftRightTextImage image="stonks.jpg">
                    <h1 style={styles.title}>Ryan Pate</h1>
                    <p1>Welcome to my personal website. Scroll down to view portfolio projects.</p1>
                </LeftRightTextImage>
            </div>
        </Element>            
    )
}