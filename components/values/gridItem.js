import { PropTypes } from 'prop-types';
import { styles } from '../../styles/styles'

export const GridItem = (props) => {
    return (
        <div style={styles.values.gridItem} key={props.i + "_valuesGrid"} ref={props.element.ref}>
            <h1 style={styles.title}>{props.element.title}</h1>
            <p>{props.element.description}</p>                            
        </div> 
    );
}

GridItem.PropTypes = {
    element: PropTypes.object.isRequired,
    i: PropTypes.string.isRequired,
}