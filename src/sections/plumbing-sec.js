/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Image } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Vector from "assets/key-feature/vector.svg";
import Editing from "assets/key-feature/editing.svg";
import Speed from "assets/key-feature/speed.svg";
import Banner  from "assets/plumbing.jpg";

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: "Water Supply",
    title: "Water Supply",
    text: "As a leading MEP company in Dubai, WE have extensive experience in managing plumbing and water supply for large facilities such as factories, malls, and warehouses. At URBAN SCIENCE we have expert engineers who are familiar with the latest technologies and can provide innovative solutions to any problems that may arise.",
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: "Drainage System",
    title: "Drainage System",
    text: "There are many facility management companies in Dubai, but not all of them are equally qualified or experienced. One of the best MEP companies in Dubai is Urban Science. With over 70+ employees and years of experience, Urban Science is one of the most qualified and experienced companies in the city. We offer a wide range of services including plumbing, water supply, and electrical maintenance. .",
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: "Greece Trap",
    title: "Greece Trap",
    text: "If you are looking for a reliable facility management company in Dubai to clean your grease trap, look no further than Urban Science. We are experts in drainage systems and can resolve any water supply issues you may have. With over 18 years of experience and a team of highly skilled technicians, we are confident that we can provide the best service possible. Contact us today to learn more about our services or to schedule a consultation.",
  },
];

export default function KeyFeature() {
  return (
    <>
        <Box>
          <Image src={Banner} alt="Thumbnail" sx={styles.image} />
          </Box>
       <section
      sx={{ variant: "section.keyFeature" }}
      style={{ position: "relative", overflow: "hidden" }}
      id="feature"
    >
      <div style={styles.gradient}></div>
      <Container>
        <h1 style={{fontSize:"50px", color:"#596AFF"}}>Plumbing Services</h1>
        <p>
        For over 18 years, Urban Science has been producing high-quality plumbing services and projects in all over Dubai, We have a inhouse team for every facility management work so feel free to contact us for any inquiries or to learn more about our facilities management services.
        </p>
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              sx={styles.featurecardcolumn}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
    </>
   
  );
}

const styles = {
  featurecardcolumn: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
  },
  gradient: {
    width: "830px",
    height: "3000px",
    background:
      "linear-gradient(180deg, rgba(90, 107, 255, 0.476) 0%, rgba(169, 227, 255, 0) 100%)",
    transform: "rotate(75deg)",
    position: "absolute",
    top: "-197%",
    left: "110%",
  },

  grid: {
    paddingTop: " 10px",
    gridGap: ["35px 0", null, "40px 0"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    "& > div": {
      px: [0, "15px", null, "25px", null, "30px", "40px", "60px"],
    },
  },
};
