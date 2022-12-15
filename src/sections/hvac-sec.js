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
    altText: "Air conditioning system    ",
    title:"Air conditioning system",
    text: "Urban Science is a leading expert in air-conditioning servicing and maintenance. We offer an array of services, with no contract or upfront payments. Whatever your problem is, we've got you covered. Best facility management company in Dubai.",
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: "chilled water system",
    title:  "Chilled water system",
    text: "Urban Science has been providing customers in the UAE with chilled water systems for the past 15 years. With over a decade of experience, we are experts on all things chiller related. Best MEP company in Dubai.",
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: "DX system",
    title: "DX system",
    text: "Our DX system is a result of over 5 years of experience in the industry. It is designed to provide high-quality services. Our rates are unbeatable and our service is impeccable, so check us out today! Best MEP company in Dubai.",
  },
  {
    id: 4,
    imgSrc: Speed,
    altText: "VRV system",
    title: "VRV system",
    text: "Our direct expansion system improves efficiency by eliminating the need for ductwork and does not require any backflow prevention devices. This is our best solution for tight spaces such as attics or basements.",
  }, {
    id: 5,
    imgSrc: Speed,
    altText: "Smoke management",
    title: "Smoke management",
    text: "As a smoke management company, MEP strives to maintain excellent customer service. Our customer support team is available 24 hours a day, every day of the week, to take care of any queries you may have. One of the leading facility management companies in Dubai.",
  },
  {
    id: 6,
    imgSrc: Speed,
    altText: "Car Parking",
    title:"Car Parking",
    text: "We have the expertise to handle any project, no matter how big or small. We offer a wide range of services, including Car parking Ventilation. Our car parking ventilation system is designed to provide maximum efficiency and cost-effectiveness.",
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
      <Container>
     
        <h1 style={{fontSize:"50px", color:"#596AFF"}}>HVAC Services</h1>
        <p>
        For the last 18+years, USBC has consistently delivered successful MEP projects in a wide spectrum of sectors including infrastructure and commercial buildings such as Fichte, Mall of Emirates, Abu Dhabi Investment Council, Dubai Fountain, Atlantis the Palm, and Dubai Airport Concourse 4. Urban Science gives you access to skillful professionals with years of training and experience from around the world - whether you need mechanical or non-mechanical work, we'll find the perfect fit for your needs!
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
