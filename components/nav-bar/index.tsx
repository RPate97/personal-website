import React from 'react';
import { useState } from 'react';
import { styles } from 'styles/styles.js';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link, animateScroll } from 'react-scroll';
import { Flex } from '@chakra-ui/react';

type Props = {
    section: number,
    setSection: React.Dispatch<React.SetStateAction<number>>
};

export const NavBar: React.FC<Props> = ({section, setSection}) => {
    const [hoveredItem, setHoveredItem] = useState(-1);
    console.log(section);
    function scrollToTop() {
        let options = {};
        if (section === 0) {
            options = {duration: 100}
        } else if (section === 1) {
            options = {duration: 300}
        } else if (section === 2) {
            options = {duration: 500}
        } else if (section === 3) {
            options = {duration: 500}
        }
        animateScroll.scrollToTop(options);
        setSection(0);
    }

    function handleSetActive(i) {
        setHoveredItem(i);
    }

    function getScrollDuration(targetSection) {
        let duration;
        if (targetSection === 0) {
            if (section === 1) {
                duration = 300;
            } else {
                duration = 500;
            }
        } else if (targetSection === 1) {
            if (section === 0) {
                duration = 300;
            } else {
                duration = 500;
            }
        } else if (targetSection === 2) {
            if (section === 0 || section === 1) {
                duration = 500;
            } else {
                duration = 300;
            }
        } else if (targetSection === 3) {
            if (section === 2) {
                duration = 300;
            } else {
                duration = 500;
            }
        }
        return duration;
    }

    return (
        <Flex 
            position="sticky"
            top={0}
            flexDir="row"
            justifyContent="space-between"
            alignItems="center"
            zIndex={3}
            display="flex"
            paddingRight={40}
            paddingLeft={40}
            paddingTop={10}
            paddingBottom={10}
        >
            <h1 style={styles.navBar.primaryElement}>
                <Link to="/">Ryan Pate</Link>                
            </h1>
            
            <Flex 
                height={100}
                display="flex"
                flexDirection="row"   
                alignItems="center"     
            >
                <h1 style={section === 0 || hoveredItem === 0 ? styles.navBar.selectedElement : styles.navBar.secondaryElement}
                    onMouseEnter={() => setHoveredItem(0)}
                    onMouseLeave={() => setHoveredItem(-1)}>
                    <a onClick={scrollToTop}>
                        Home
                    </a>             
                </h1>
                <h1 style={section === 1  || hoveredItem === 1 ? styles.navBar.selectedElement : styles.navBar.secondaryElement}
                    onMouseEnter={() => setHoveredItem(1)}
                    onMouseLeave={() => setHoveredItem(-1)}>
                    <Link to="portfolioSection" 
                        spy={true} 
                        smooth={true} 
                        offset={-50} 
                        duration={getScrollDuration(1)} 
                        onClick={() => setSection(1)}>
                        Portfolio
                    </Link>
                </h1>
                <h1 style={section === 2  || hoveredItem === 2 ? styles.navBar.selectedElement : styles.navBar.secondaryElement}
                    onMouseEnter={() => setHoveredItem(2)}
                    onMouseLeave={() => setHoveredItem(-1)}>
                    <Link to="valuesSection" 
                        spy={true} 
                        smooth={true} 
                        offset={-50} 
                        duration={getScrollDuration(2)} 
                        onClick={() => setSection(2)}>
                        Values
                    </Link>                
                </h1>  
                <h1 style={section === 3 || hoveredItem === 3 ? styles.navBar.selectedElement : styles.navBar.secondaryElement}
                    onMouseEnter={() => setHoveredItem(3)}
                    onMouseLeave={() => setHoveredItem(-1)}>
                    <Link to="resumeSection" 
                        spy={true} 
                        smooth={true} 
                        offset={0} 
                        duration={getScrollDuration(3)} 
                        onClick={() => setSection(3)}>
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
            </Flex>
        </Flex>
    ) 
};