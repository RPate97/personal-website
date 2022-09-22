import { RightLeftTextImage } from 'components/portfolio/rightLeftTextImage'
import { styles } from '../../styles/styles.js';

export const Intro = ({ innerRef }) => {
    return (
        <div ref={innerRef} style={styles.intro}>
            <RightLeftTextImage 
                title="Intro Section"
                text="This is an intro section filled with interesting information about myself and my work."
                image="stonks.jpg"
            >
                <h1 style={styles.title}>Ryan Pate</h1>
                <p1>Software Engineer based in Corvallis Oregon. Scroll down to view my personal projects, values, and resume.</p1>
            </RightLeftTextImage>
        </div>
    )
}