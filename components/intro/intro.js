import { RightLeftTextImage } from 'components/portfolio/rightLeftTextImage'
import { styles } from '../../styles/styles.js';

export const Intro = ({ innerRef }) => {
    return (
        <div ref={innerRef} style={styles.intro}>
            <RightLeftTextImage 
                title="Intro Section"
                text="This is an intro section filled with interesting information about myself and my work."
                image="stonks.jpg"
            />
            {/* <img src="1.jpg" alt="night sky" width="100%" height="100%" style={styles.intro.backgroundImage} />       */}
        </div>
    )
}