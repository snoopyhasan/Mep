import { Container, Box, Heading, Text, Flex } from "theme-ui";
import Img from "../assets/project2.jpg";
import { Image } from "theme-ui";
import Mall from "../assets/dubai_mall.webp";
import Metro from "../assets/dubai-metro.jpg";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import Plumber from "assets/plumber.png";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function ProjectSec() {
  return (
    <>
       <Box>
          <Image src={Img} alt="Thumbnail"  />
          </Box>
      <Container sx={style.contactform}>
        <div sx={style.circle}></div>
        <Heading sx={style.projectHeading} as="h1">
          Projects
        </Heading>
      </Container>
      <Container sx={style.center}>
        <div
          sx={style.anotherFlex}
          style={{ display: "flex", marginBottom: "10px" }}
        >
          <Link href="/projectsall">
            <Heading sx={style.mainText} as="h2">
              M
            </Heading>
          </Link>
          <Link href="/projectsall">
            <Heading
              sx={{ ...style.mainText, backgroundImage: `url(${Mall})` }}
              as="h2"
            >
              E
            </Heading>
          </Link>
          <Link href="/projectsall">
            <Heading
              sx={{ ...style.mainText, backgroundImage: `url(${Metro})` }}
              as="h2"
            >
              P
            </Heading>
          </Link>
        </div>
      </Container>
    </>
  );
}

const style = {
  h1: {
    fontSize: ["43px", "90px"],
    color: "#F4F8FC",
    letterSpacing: "0.13em",
    fontWeight: "700",
  },
  popUp: {
    zIndex: "99999999",
    position: "fixed",
    top: "60%",
    left: "50%",
    width: "90vw",
    backgroundColor: "white",
    transform: "translate(-50%, -50%)",
  },
  flexBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  blackScreen: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "black",
    zIndex: "999999",
    margin: "0",
    padding: "0",
  },
  close: {
    cursor: "pointer",
  },
  anotherFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  mainText: {
    fontSize: ["160px", "433px"],
    backgroundImage: `url(${Img})`,
    backgroundRepeat: "no-repeat",
    "-webkit-background-clip": "text",
    backgroundClip: "text",
    color: "transparent",
    cursor: "pointer",
  },
  circle: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background:
      "radial-gradient(70% 70% at 70% 64.8%, rgba(92, 118, 255, 0.6) 0%, rgba(255, 255, 255, 0.5) 100%)",
    position: "absolute",
    bottom: "150px",
    left: "0",
  },
  projectHeading: {
    fontSize: ["42px", "133px"],
    color: "#353535",
    position: "relative",
    top: "40%",
  },
  contactform: {
    padding: "0",
    display: "flex",
    justifyContent: "center",
  },
  blackBG: {
    backgroundColor: "black",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    opacity: "0.8",
  },
  salesBox: {
    padding: "10px 20px",
  },
  Image: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    margin: "100px 0 0px 0",
  },
  box: {
    padding: "10px 20px",
  },
  grid: {
    "@media screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
  banner: {
    overflow: ["hidden", "initial", null, "hidden"],
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "top left",
    backgroundSize: "cover",
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ["150px", null, null, null, null, null, "140px", "130px"],
    pb: ["100px", null, null, "110px", null, 10, "150px"],
    backgroundColor: "white",
    container: {
      display: "flex",
    },
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", null, null, "row"],
  },
  cards: {
    display: "grid",
    margin: "10px",
    gridAutoColumns: ["100%", "50%"],
    gridColumnGap: "20px",
    gridAutoFlow: "column",
    padding: "25px 10px",
    listStyle: "none",
    overflowX: "scroll",
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
    scrollbarWidth: "none",
  },
  anotherContainer: {
    maxWidth: "1400px",
    padding: "0 15px",
    margin: "0 auto",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  imageBG: {
    backgroundColor: "#EBEDFF",
    borderRadius: "50%",
    height: "100px",
    width: "100px",
  },
  thumbnail: {
    pl: [0, 5, 0, null, 7, 95],
    pr: [0, 5, null, null, null, 75, 95],
    order: [2, null, null, 0],
  },
  contentBox: {
    width: ["100%", 450, 550, 350, 500, 570],
    pr: [0, null, "auto", null, null, 80],
    pl: "auto",
    flexShrink: 0,
  },
  button: {
    backgroundColor: "#93C1F9",
    width: "100%",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headingTop: {
    pl: [0, null, null, null, "35px", null, "55px", 6],
    mb: [3, null, null, null, 1],
    textAlign: ["center", null, null, "left"],
  },
  grid: {
    p: ["0 0px 35px", null, null, null, "0 20px 40px", null, "0 40px 40px", 0],
  },
  image: {
    borderRadius: "16px 16px 0 0",
  },
  cardText: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#596AFF",
    width: "100%",
    textAlign: "center",
    borderRadius: "0 0px 4px 4px",
    fontSize: "18px",
    color: "white",
    fontWeight: "bold",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    minWidth: "400px",
    minHeight: "430px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: " 0 5px 15px rgba(0, 0, 0, 15%)",
    scrollSnapAlign: "start",
    transition: "all 0.2s",
  },
  cardHeading: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#272D4E",
    textAlign: "center",
    letterSpacing: "0.5px",
  },
  cardPara: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#7D7987",
    margin: "0",
  },
  img: {
    width: ["50px", null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
};
