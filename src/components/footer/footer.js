/** @jsx jsx */
import {
  jsx,
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Card,
} from "theme-ui";
import { Link } from "components/link";
import Logo from "assets/logo.png";
import Logoa from "assets/logoc.png";
import Logob from "assets/logob.png";
import Logoc from "assets/logoa.png";
import menuItems from "./footer.data";
import Dubaicon from "assets/dubai.png";
import IndiaGate from "assets/india-gate.png";
import Uk from "assets/uk.png";

export default function Footer() {
  return (
    <>
      <footer sx={styles.footer}>
        <Container sx={styles.footer.container}>
          <Box sx={styles.footer.footerTopArea}>
            <Box sx={styles.copyrightArea}>
              <Box className="footer__logo"></Box>
              
            </Box>
            <Flex sx={styles.footer.menuArea}>
              {menuItems &&
                menuItems.map(({ header, items }, i) => (
                  <Box sx={styles.footer.menus} key={i}>
                    <Heading sx={styles.footer.heading}>{header}</Heading>
                    <nav>
                      {items.map(({ path, label, name, icon }, i) => (
                        <Link
                          className={name}
                          path={path}
                          key={i}
                          sx={styles.footer.link}
                        >
                          {icon}
                          {label}
                        </Link>
                      ))}
                    </nav>
                  </Box>
                ))}
            </Flex>
          </Box>
          <Container sx={styles.margin}>
            <Flex sx={{justifyContent:'center',flexWrap:'wrap'}}>
              <Card
                sx={{
                  maxWidth: 123,
                  margin:"20px"
                }}
              >
                <Image src={Logo} />
                
              </Card>
              <Card
                sx={{
                  maxWidth: 123,
                  margin:"20px"
                }}
              >
                <Image src={Logoa} />
                 
              </Card>
              
              <Card
                sx={{
                  maxWidth: 123,
                  margin:"20px"
                }}
              >
                <Image src={Logoc} />
                 
              </Card>
              
            </Flex>
          </Container>
        </Container>
      </footer>
    </>
  );
}

const styles = {
  text: {
    color: "white"
  },
  footer: {
    positio: "relative",
    backgroundColor: "#18263B",
    container: {
      width: "100%",

      alignItems: "stretch",
    },
    footerTopArea: {
      display: "flex",
      flexWrap: "wrap",
      pt: ["60px", null, null, null, 8],
      pb: [7, null, null, null, "30px"],
      pl: [0, null, 4, 6, null, 7],
      pr: [0, null, 4, 6],
    },
    menuArea: {
      width: [
        "100%",
        null,
        null,
        null,
        "calc(100% - 250px)",
        "calc(100% - 300px)",
        
      ],
      height:"200px",
      justifyContent: "space-between",
      flexWrap: "wrap",
      pb: 3,
    },
    menus: {
      display: "flex",
      flexDirection: "column",
      mb: ["45px", null, null, "50px", "60px"],
      pr: 3,
      width: ["50%", null, null, "25%"],
    },

    heading: {
      fontSize: [2, 3],
      color: "#66ABFF",
      fontWeight: "heading",
      litterSpacing: "heading",
      mb: [4, null, null, null, 5, 6],
      lineHeight: "1.35",
    },

    link: {
      fontSize: ["14px", 1],
      color: "#fcfcfc",
      fontWeight: "body",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.9],
      svg: {
        width: "17px",
        mr: 2,
        fontSize: 2,
        flexShrink: 0,
      },
      "&.facebook > svg": {
        color: "#3B5998",
      },
      "&.twitter > svg": {
        color: "#55ACEE",
      },
      "&.instagram > svg": {
        color: "#161614",
      }, 
      ":hover": {
        color: "primary",
      },
      ":last-child": {
        mb: "0px",
      },
    },
  },
  margin:{
    marginTop:["100px","0px"]
  },
  copyrightArea: {
    width: ["100%", null, null, null, "250px", "300px"],
    flexShrink: 0,
    order: [2, null, null, null, 0],
    textAlign: ["center", null, null, null, "left"],
    ".footer__logo": {
      a: {
        mr: 0,
        img: {
          mx: ["auto", null, null, null, 0],
        },
      },
    },
    ".footer__menu": {
      display: "flex",
      justifyContent: ["center", null, null, null, "flex-start"],
      flexWrap: "wrap",
      mt: [3, null, null, null, 4],
      a: {
        fontSize: ["14px", 1],
        color: "#66ABFF",
        fontWeight: "body",
        mb: 1,
        cursor: "pointer",
        transition: "all 0.35s",
        textDecoration: "none",
        lineHeight: [1.5, null, 1.9],
        ":before": {
          px: 2,
          content: '"|"',
          color: "#66ABFF",
        },
        ":first-of-type:before": {
          display: "none",
        },
        ":hover": {
          color: "primary",
        },
      },
    },
    copyright: {
      fontSize: ["14px", 1],
      color: "#fcfcfc",
      pt: 1,
    },
  },
};
