/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Vector from "assets/key-feature/vector.svg";
import Editing from "assets/key-feature/editing.svg";
import Speed from "assets/key-feature/speed.svg";

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: "Vector",
    title: "Clean Handover",
    text: "A project can be started by any MEP business in Dubai, but only a select handful can finish them on schedule. Urban Science gives you the opportunity to speak with past clients before your project even begins. In order for you to receive full feedback on URBAN SCIENCE. Our clean and on-time handover makes us among the best facilities management companies in Dubai.",
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: "Monitoring",
    title: "Qualified and Certified",
    text: "Urban Science is one of the leading companies in Dubai with a mission to provide customer satisfaction at every level. We provide effective solutions for all your MEP and facility management needs with a commitment to quality, environmental sustainability, and people-centered development. Urban Science is among the few companies in Dubai to be certified and approved by Dubai Municipality. Our professional and certified approach makes us among the best facilities management companies in Dubai",
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: "Quality",
    title: "Experienced team",
    text:  "Urban Science is the best MEP and facility management company that provides comprehensive and reliable services to meet all your needs. We've been in Dubai for over 10 years, and have helped more than 200 companies around the city with their facilities management needs. We are a well-established company with years of experience in the field. Our workforce of over 200 employees is backed by advanced technology and the latest tools to provide quality services.",
  },
];

export default function KeyFeature() {
  return (
    <section
      sx={{ variant: "section.keyFeature" }}
      style={{ position: "relative", overflow: "hidden" }}
      id="feature"
    >
      <div style={styles.gradient}></div>
      <Container>
        <SectionHeader
          title="Why  Choose Us"
          slogan="“You cannot create the experience. You must undergo it”"
        />
      </Container>

      <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCardColumn
            sx={styles.featurecardcolumn}
            
            key={item.id}
            src={item.imgSrc}
            alt={item.title}
            title={item.title}
            text={item.text}
          />
        ))}
      </Grid>
    </section>
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
    
    // px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ["35px 0", null, "40px 0"],
    textAlign:"justify",
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
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transition: "0.3s",
      marginLeft: "30px",
      marginRight: "30px",
      padding: "38px",
      px: [0, "15px", null, "25px", null, "30px", "40px", "60px"],
    },
  },
};
