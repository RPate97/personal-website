
export const AppColors = {
    primaryBackground: '#222831',
    primaryForeground: '#DDDDDD',
    secondaryBackground: '#30475E',
    secondaryForeground: '#F05454',
}

export const FontSizes = {
    title: "2rem",
    secondaryTitle: "1.25rem",
    text: 16,
}

export const styles = {
    main: {
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "top",
        backgroundImage: "url(4.jpg)",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
    },

    navBar: {
        // borderBottomRightRadius: 100,
        // position: "sticky",
        // top: 0,
        // color: AppColors.primaryForeground,
        // paddingRight: 40,
        // paddingLeft: 40,
        // paddingTop: 10,
        // paddingBottom: 10,
        // display: "flex",
        // flexDirection: "row",
        // justifyContent: "space-between",
        // height: 100,
        // alignItems: "center",
        // zIndex: 10,
        primaryElement: {
            fontSize: FontSizes.title,
            lineHeight: "1.15",
        },
        secondaryElement: {
            marginLeft: 40,
            fontSize: FontSizes.secondaryTitle,
            transition: "color 0.25s ease",
        },
        selectedElement: {
            color: AppColors.secondaryForeground,
            marginLeft: 40,
            fontSize: FontSizes.secondaryTitle,
            transition: "color 0.25s ease",
        },
        icons: {
            marginTop: 5,
            marginLeft: 30,
            icon: {
                marginLeft: 10,
                transition: "color 0.25s ease",
                size: "2rem",
                fontSize: FontSizes.title,
            },
            selectedIcon: {
                marginLeft: 10,
                transition: "color 0.25s ease",
                color: AppColors.secondaryForeground,
                size: "2rem",
                fontSize: FontSizes.title,
            }
        },
        // navigation: {
        //     height: 100,
        //     display: "flex",
        //     flexDirection: "row",   
        //     alignItems: "center",       
        // },
    },

    title: {
        color: AppColors.primaryForeground,
        fontSize: FontSizes.secondaryTitle,
    },
    sectionTitle: {
        marginBottom: 50,
        marginTop: 50,
        color: AppColors.primaryForeground,
        fontSize: FontSizes.title,
        textAlign: "center",
    },

    values: {
        grid: {
            marginLeft: 50,
            marginRight: 50,
            display: "grid",
            gridTemplateColumns: "repeat(3, .33fr)",
            gridGap: 100,
        },
        gridItem: {
            minHeight: 100,
            fontSize: FontSizes.text,
            transform: "translateY(100px)",
            transition: "0.2s",
            opacity: "0.1",
            backgroundColor: AppColors.primaryBackground,
            padding: 20,
            borderRadius: 10,
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        },
    },

    resume: {
        marginTop: 100,
        width: "100%",
        image: {
            display: "flex",
            width: "50%",
            margin: "auto",
            justifyContent: "center",
            marginBottom: 50,
            opacity: "0.1",
            transition: "0.2s",
            transform: "translateY(150px)",
            borderRadius: 10,
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        },
        downloadLink: {
            textAlign: "center",
            display: "flex",
            margin: "auto",
            justifyContent: "center",
            backgroundColor: AppColors.primaryBackground,
            color: AppColors.primaryForeground,
            borderRadius: 10,
            padding: 10,
            width: "-moz-min-content",
            width: "-webkit-min-content",
            width: "min-content",
            height: "-moz-min-content",
            height: "-webkit-min-content",
            height: "min-content",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "clip",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }
    },

    portfolio: {
        item: {
            marginTop: 50,
            marginBottom: 50,
            flex: "1",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: 300,
            // backgroundColor: AppColors.primaryBackground,
            leftRight: {
                left: {
                    backgroundColor: AppColors.primaryBackground,
                    transform: "translateY(200px)",
                    transition: "0.2s",
                    width: "40%",
                    opacity: "0.1",
                    marginRight: 20,
                    height: "-moz-min-content",
                    height: "-webkit-min-content",
                    height: "min-content",
                    padding: 20,
                    borderRadius: 10,
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                },
                right: {
                    transform: "translateX(100px)",
                    transition: "0.2s",
                    width: "40%",
                    opacity: "0.1",
                    borderRadius: 10,
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                },   
            }, 
            rightLeft: {
                left: {
                    transform: "translateX(-100px)",
                    transition: "0.2s",
                    width: "40%",
                    opacity: "0.1",
                    borderRadius: 10,
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                },
                right: {
                    backgroundColor: AppColors.primaryBackground,
                    transform: "translateY(200px)",
                    transition: "0.2s",
                    width: "40%",
                    opacity: "0.1",
                    marginLeft: 20,
                    height: "-moz-min-content",
                    height: "-webkit-min-content",
                    height: "min-content",
                    padding: 20,
                    borderRadius: 10,
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                },   
            },        
        },
    },

    footer: { 
        height: 150,
        display: "flex",
        width: "50%",
        height: 200,
        margin: "auto",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        text: {
            fontSize: FontSizes.text,
            color: AppColors.primaryForeground,
            textAlign: "center",
        }
    },
    
};
