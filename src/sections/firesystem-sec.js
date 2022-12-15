/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Image } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Vector from "assets/key-feature/vector.svg";
import Editing from "assets/key-feature/editing.svg";
import Speed from "assets/key-feature/speed.svg";
import Banner  from "assets/fire page.jpg";

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: "fire fighting",
    title: "Fire fighting",
    text: "Your safety is our priority. We offer a wide range of services that cater to all your needs, right from fire-fighting to facility management. Not only this but we work with state-of-the-art equipment for maximum safety and efficiency. One of the leading companies in MEP and facility management. ",
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: "Fire protection",
    title: "Fire protection",
    text: "We offer all types of fire protection services and our team is equipped with the best tools and equipment. Our team has extensive safety knowledge and awareness to ensure that your property is fully safeguarded. We are approved by Dubai Municipality as well as other reputable institutions. ",
  },
  
  {
    id: 3,
    imgSrc: Speed,
    altText: "Voice Evacuation",
    title:"Voice Evacuation",
    text: "When it comes to safety the most effective method available in the event of an emergency is the voice evacuation system. And at urban science, we make sure to install this system properly in our desired areas. So that you can sleep peacefully. Working on our client's needs and satisfying them makes us one of the leading facility management companies in Dubai.",
  },
];

export default function FireSystemSec() {
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
        <h1 style={{fontSize:"50px", color:"#596AFF"}}>Fire System</h1>
        <p>
        Fire safety is everyone's responsibility. The safety of your employees, suppliers, and customers is dependent upon the severity of your fire protection program. Therefore, before choosing a Fire system company for your work please make sure to check their approvals, certificates, and standards. We at Urban Science follow the complete international guidelines while performing Fire system work. Gaining your trust makes us the leading facility management company in Dubai.
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
