/** @jsx jsx */
import { jsx, Container, Flex, Button, Heading } from "theme-ui";
import { keyframes } from "@emotion/core";
import { Link } from "react-scroll";
import Logo from "components/logo";
import LogoDark from "assets/logo-dark.svg";
import LogoWhite from "assets/logo.svg";
import BlackLogo from "assets/blackLogo.png";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { DrawerProvider } from "../../contexts/drawer/drawer.provider";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import { useRouter } from 'next/router';


export default function Header({ className }) {

  const [show, setShow] = React.useState(false);
  const router = useRouter();

  return (
    <DrawerProvider>
      <header sx={styles.patti} className={className}>
        <Flex sx={styles.flex}>
          <a as="h4" href=" tel:123456789" sx={styles.head}>
            <FaPhone sx={styles.icons} />
            0509418224
          </a>
          <a as="h4" href="mailto:mep@gmail.com" sx={styles.head}>
            <FaEnvelope sx={styles.icons} />
            enquiry@urbansciencemep.com
          </a>
        </Flex>
      </header>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={className === "sticky" ? BlackLogo : BlackLogo} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <>
              {
                label === "Services" ? (<Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  key={i}
                  onMouseEnter={() => setShow(true)}
                  // onMouseLeave={() => setShow(false)}
                >
                  {label}
                </Link>) : (
                  <Link
                  activeClass="active"
                  onClick={() => router.push(path)}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  key={i}
                  
                >
                  {label}
                </Link>
                )
              }
                
                {label === "Services" && show && (
                  <div className="dropDown" sx={styles.dropDown} onMouseLeave={()=>setShow(false)}>
                    <div sx={styles.dropLink}>
                      <Link
                        activeClass="active"
                        onClick={() => router.push("/building")}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Building Services
                      </Link>
                    </div>
                    <div sx={styles.dropLink}>
                      <Link
                        activeClass="active"
                        onClick={() => router.push("/firesystem")}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Fire system
                      </Link>
                    </div>
                    <div sx={styles.dropLink}>
                      <Link
                        activeClass="active"
                        onClick={() => router.push("/fabricated")}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        
                      >
                        Fabricated System
                      </Link>
                    </div>
                  </div>
                )}
              </>
            ))}
          </Flex>

          <Button
            className="donate__btn"
            variant="secondary"
            aria-label="Get Started"
            backgroundColor="#596AFF"
            color="white"
            onClick={() => router.push("/contact")}
          >
            Enquire Now
          </Button>

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  patti: {
    textAlign: "right",
    backgroundColor: "white",
    padding: ["0", "0px 0px"],
  },
  flex: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexWrap: "wrap",
  },
  dropDown: {
    position: "Absolute",
    left: "49%",
    margin: "25px 0",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  dropLink:{
    margin: "10px",
  },
  icons: {
    color: "#596AFF",
    margin: "0 10px",
  },
  head: {
    margin: "0 10px",
    display: "flex",
    alignItems: "center",
  },
  header: {
    color: "black",
    fontWeight: "normal",
    py: 4,
    width: "100%",
    position: "absolute",
    top: ["57px","23px"],
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.5s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
      ".donate__btn": {
        "&:hover": {
          boxShadow: "rgba(31, 62, 118, 0.57) 0px 9px 20px -5px",
          backgroundColor: "white",
          color: "white",
        },
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: "16px",
      fontWeight: "400",
      px: 25,
      cursor: "pointer",
      lineHeight: "1.2",
      "&.active": {
        color: "secondary",
      },
    },
  },
};
