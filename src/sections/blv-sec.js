/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Image } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Vector from "assets/key-feature/vector.svg";
import Editing from "assets/key-feature/editing.svg";
import Speed from "assets/key-feature/speed.svg";
import Banner  from "assets/HVAC (2).jpg";

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: "IT",
    title: "IT",
    text: "We have successfully managed hundreds of projects for different clients, helping them increase their productivity and efficiency. If you're looking for someone to help manage your business efficiently and without fail, look no further! Best facility management company in Dubai.",
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: "CCTV",
    title:  "CCTV",
    text: "We put customer needs first and foremost. We are always looking for new ways to make our customers' lives easier and more productive, from innovative office equipment solutions to holistic CCTV solutions.",
  },
   
  {
    id: 3,
    imgSrc: Speed,
    altText: "Access control",
    title: "Access control",
    text: "With the latest tech in place, we can help you manage your facilities more efficiently than ever before. You'll also have peace of mind knowing that we are committed to protecting your assets with our state-of-the-art security solutions. ",
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
        <h1 style={{fontSize:"50px", color:"#596AFF"}}>BLV Services</h1>
        <p>
        Urban Science has a team of professionals that specializes in a variety of fields, all with the latest in technologies and expertise. From access control to IT, Urban Science has the perfect solution for your facility's needs. We have successfully managed hundreds of projects for different clients, helping them increase their productivity and efficiency. If you're looking for someone to help manage your business efficiently and without fail, look no further!
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
