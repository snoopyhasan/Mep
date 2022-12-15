import { Container } from "theme-ui";
import SectionHeader from "components/section-header";
import Plumber from "assets/plumber.png";
import { FiArrowRight } from "react-icons/fi";

export default function WhatWeDo() {
  return (
    <section style={styles.coreFeature}>
      <SectionHeader style={{ fontSize: "40px" }} title="What We Do ?" />

      <div class="container">
        <div sx={styles.anotherContainer}>
          <ul class="cards" style={styles.cards}>
            <li class="card" style={styles.card}>
              <div style={styles.cardContent}>
                <div style={{ margin: "20px" }}>
                  <div style={styles.imageBG}>
                    <img
                      src={Plumber}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <h3 style={styles.cardHeading}>Facility management</h3>
                </div>
                <div style={{ width: "70%", textAlign: "center" }}>
                  <p style={styles.cardPara}>
                    We comply with the highest standards of professionalism and
                    have one of the lowest employee turnover rates in the
                    industry. Our urban science experts who are reliable and on
                    time have a combined experience of over 18+ years.
                    Financially, we offer the best rates in the industry with no
                    hidden fees or expensive contracts. If you want to save
                    money and find an inexpensive company for your facility
                    management needs Urban Science is the place for you!
                  </p>
                </div>
                <h2 style={{ marginTop: "8px" }}>
                  <FiArrowRight />
                </h2>
              </div>
            </li>
            <li  class="card" style={styles.card}>
              <div style={styles.cardContent}>
                <div style={{ margin: "20px" }}>
                  <div style={styles.imageBG}>
                    <img
                      src={Plumber}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <h3 style={styles.cardHeading}>MEP Works</h3>
                </div>
                <div style={{ width: "70%", textAlign: "center" }}>
                  <p style={styles.cardPara}>
                    We are an MEP company that provides its services through our
                    expert project managers, engineers, plumbers, and
                    electricians. We always strive to meet your needs and work
                    within your budget. With our project start service, we take
                    care of every single detail so you don't have to worry about
                    anything. We employ the best engineers, offer the best
                    technology, and use the most efficient processes that
                    guarantee a successful project. Our in-house experts for
                    every division .
                  </p>
                </div>
                <h2 style={{ marginTop: "8px" }}>
                  <FiArrowRight />
                </h2>
              </div>
            </li>
            <li  class="card" style={styles.card}>
              <div style={styles.cardContent}>
                <div style={{ margin: "20px" }}>
                  <div style={styles.imageBG}>
                    <img
                      src={Plumber}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <h3 style={styles.cardHeading}>Air conditioning services </h3>
                </div>
                <div style={{ width: "70%", textAlign: "center" }}>
                  <p style={styles.cardPara}>
                    Don't delay the installation or repair of your
                    air-conditioning unit any longer! Urban Science offers a
                    full range of professional services that are quick to
                    respond and affordable. Urban Science is a leading expert in
                    air-conditioning servicing and maintenance. We offer an
                    array of services, with no contract or upfront payments.
                    Whatever your problem is, we've got you covered. If it's
                    about your air-conditioning unit, we'll diagnose and fix it
                    - without costing you a dime.
                  </p>
                </div>
                <h2 style={{ marginTop: "8px" }}>
                  <FiArrowRight />
                </h2>
              </div>
            </li>
            <li  class="card" style={styles.card}>
              <div style={styles.cardContent}>
                <div style={{ margin: "20px" }}>
                  <div style={styles.imageBG}>
                    <img
                      src={Plumber}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <h3 style={styles.cardHeading}>Chilled water system</h3>
                </div>
                <div style={{ width: "70%", textAlign: "center" }}>
                  <p style={styles.cardPara}>
                    We offer the most cost-efficient prices in Dubai, with plans
                    that suit every budget. The best-chilled water system in
                    Dubai, with installation specs and service tailored to your
                    needs. The latest models of chiller units are always in
                    stock for fast turnaround time. Urban Science has been
                    providing customers in the UAE with chilled water systems
                    for the past 15 years. With over a decade of experience, we
                    are experts on all things chiller related. Our technicians
                    are certified . .
                  </p>
                </div>

                <h2 style={{ marginTop: "8px" }}>
                  <FiArrowRight />
                </h2>
              </div>
            </li>
            <li  class="card" style={styles.card}>
              <div style={styles.cardContent}>
                <div style={{ margin: "20px" }}>
                  <div style={styles.imageBG}>
                    <img
                      src={Plumber}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <h3 style={styles.cardHeading}> Electrical work</h3>
                </div>
                <div style={{ width: "70%", textAlign: "center" }}>
                  <p style={styles.cardPara}>
                    We are experts in what we do. We employ over 100
                    international & local laborers with a wide range of skills -
                    electrical and non-electrical. We have completed projects
                    for some of the world's most prestigious brands, including
                    Mercedes, carrefour, and Dior. With extensive experience in
                    providing solutions to residential, commercial, and
                    industrial clients across Dubai, UAE, and the GCC region, we
                    know what it takes to create world-class living spaces. Best
                    MEP company in Dubai
                  </p>
                </div>
                <h2 style={{ marginTop: "8px" }}>
                  <FiArrowRight />
                </h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: "relative",
    backgroundColor: "#E9EFFF",
    padding: "60px 0",
    "&::before": {
      position: "absolute",
      content: '""',
      top: ["auto", null, null, "50%"],
      bottom: ["100px", 0, null, "auto"],
      left: 0,
      background: "linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)",
      height: [350, 550, "70%"],
      width: "50%",
      zIndex: -1,
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
      transform: ["translateY(0)", null, null, "translateY(-50%)"],
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
    padding: ["0 15px", "0px"],
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
    pr: [0, null, "auto", null, null, 8],
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
    pl: [0, null, null, null, "4px", null, "55px", 6],
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
    marginBottom: "8px",
  },
  cardPara: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#7D7987",
    margin: "0",
    textAlign: "justify",
    margin: "0px",
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
