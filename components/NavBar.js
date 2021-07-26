import React, { useImperativeHandle } from 'react';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { styles } from '../styles/styles.js';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import * as Scroll from 'react-scroll';
const Link = Scroll.Link;
let scroll = Scroll.animateScroll;

export const NavBar = React.forwardRef((props, ref) => {
    const [hoveredItem, setHoveredItem] = useState(-1);
    const [selectedSection, setSelectedSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useImperativeHandle(ref, () => ({
        setSection: (index) => {
            if (!isScrolling) {
                setSelectedSection(index);
            }
        }
    }));

    function scrollToTop() {
        let options = {};
        if (selectedSection === 0) {
            options = {duration: 100}
        } else if (selectedSection === 1) {
            options = {duration: 300}
        } else if (selectedSection === 2) {
            options = {duration: 500}
        } else if (selectedSection === 3) {
            options = {duration: 500}
        }
        scroll.scrollToTop(options);
        setSelectedSection(0);
    }

    function handleSetActive(i) {
        setHoveredItem(i);
    }

    function getScrollDuration(targetSection) {
        let duration;
        if (targetSection === 0) {
            if (selectedSection === 1) {
                duration = 300;
            } else {
                duration = 500;
            }
        } else if (targetSection === 1) {
            if (selectedSection === 0) {
                duration = 300;
            } else {
                duration = 500;
            }
        } else if (targetSection === 2) {
            if (selectedSection === 0 || selectedSection === 1) {
                duration = 500;
            } else {
                duration = 300;
            }
        } else if (targetSection === 3) {
            if (selectedSection === 2) {
                duration = 300;
            } else {
                duration = 500;
            }
        }
        return duration;
    }

    return (
        <div style={styles.navBar}>
            <h1 style={styles.navBar.primaryElement}>
                <Link href="/">
                    <a>Ryan Pate</a>
                </Link>                
            </h1>
            
            <div style={styles.navBar.navigation}>
                <h1 style={selectedSection === 0 || hoveredItem === 0 ? styles.navBar.selectedElement : styles.navBar.secondaryElement}
                    onMouseEnter={() => setHoveredItem(0)}
                    onMouseLeave={() => setHoveredItem(-1)}>
                    <a onClick={scrollToTop}>
                        Home
                    </a>             
                </h1>
                <h1 style={selectedSection === 1  || hoveredItem === 1 ? styles.navBar.selectedElement : styles.navBar.secondaryElement}
                    onMouseEnter={() => setHoveredItem(1)}
                    onMouseLeave={() => setHoveredItem(-1)}>
                    <Link to="portfolioSection" 
                        spy={true} 
                        smooth={true} 
                        offset={-50} 
                        duration={getScrollDuration(1)} 
                        onClick={() => setSelectedSection(1)}>
                        Portfolio
                    </Link>
                </h1>
                <h1 style={selectedSection === 2  || hoveredItem === 2 ? styles.navBar.selectedElement : styles.navBar.secondaryElement}
                    onMouseEnter={() => setHoveredItem(2)}
                    onMouseLeave={() => setHoveredItem(-1)}>
                    <Link to="valuesSection" 
                        spy={true} 
                        smooth={true} 
                        offset={-50} 
                        duration={getScrollDuration(2)} 
                        onClick={() => setSelectedSection(2)}>
                        Values
                    </Link>                
                </h1>  
                <h1 style={selectedSection === 3 || hoveredItem === 3 ? styles.navBar.selectedElement : styles.navBar.secondaryElement}
                    onMouseEnter={() => setHoveredItem(3)}
                    onMouseLeave={() => setHoveredItem(-1)}>
                    <Link to="resumeSection" 
                        spy={true} 
                        smooth={true} 
                        offset={0} 
                        duration={getScrollDuration(3)} 
                        onClick={() => setSelectedSection(3)}>
                        Resume
                    </Link>              
                </h1>   
                <div style={styles.navBar.icons}>
                    <a href="https://linkedin.com/in/ryantpate" style={styles.navBar.icons.icon}>
                        <AiFillLinkedin style={hoveredItem == 4 ? styles.navBar.icons.selectedIcon : styles.navBar.icons.icon} onMouseEnter={() => setHoveredItem(4)} onMouseLeave={() => setHoveredItem(-1)}/>
                    </a>                        
                    <a href="https://github.com/RPate97" style={styles.navBar.icons.icon}>
                        <AiFillGithub style={hoveredItem == 5 ? styles.navBar.icons.selectedIcon : styles.navBar.icons.icon} onMouseEnter={() => setHoveredItem(5)} onMouseLeave={() => setHoveredItem(-1)}/>
                    </a>                         
                </div>                    
            </div>
        </div>   
    )
});

NavBar.PropTypes = {
    page: PropTypes.number.isRequired,
}