/** @jsx jsx */
import {
  jsx,
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Grid,
} from "theme-ui";
import SectionHeader from "components/section-header";
import Rating from "components/rating";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";
import Dubaicon from "assets/dubai.png";
import IndiaGate from "assets/india-gate.png";
import Uk from "assets/uk.png";
import Avatar1 from "assets/testimonial/avatar1.png";
import Avatar2 from "assets/testimonial/avatar2.png";
import Avatar3 from "assets/testimonial/avatar3.png";
import Avatar4 from "assets/testimonial/avatar4.png";
import BannerThumb from "assets/partner.png";

const data = [
  {
    id: 1,
    title: "Modern look & trending design",
    description:
      ". Yousef and Team work on a consultative basis and delivered exactly what we were looking for. The folding doors they added have made a huge difference to our living area and are high quality. Overall, would recommend them whole heartedly. Best facility management company in Dubai",
    avatar: Avatar1,
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 4,
  },
  {
    id: 2,
    title: "Design Quality & performance",
    description:
      "As a real estate agent in Dubai, this company did Awesome job for my clients. They have a huge experience when it comes to MEP and facility management. Professional, top of the market and the most important thing that are ethical and they deliver on time. Will always work with them",
    avatar: Avatar2,
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 5,
  },
  {
    id: 3,
    title: "Layout and organized layers",
    description:
      "Always go with experience not with the name. This is what I have learnt after working with urban Science. The most important thing for which I would rate them 5 star is there customer service and there strict timeline which they always",
    avatar: Avatar3,
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 5,
  },
  {
    id: 4,
    title: "Modern look & trending design",
    description:
      "Initially, I have given my office AC work to a different contractor. They messed it up keep delaying the deadline until I reached Urban Science. They completely took over the work and resolved all the blunder the previous contractor have created in just 45 days.",
    avatar: Avatar4,
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 4,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TestimonialCard() {
  return (
    <section id="testimonial" sx={{ variant: "section.testimonial" }}>
      <Container>
        <SectionHeader slogan="Testimonial" title="Meet Client Satisfaction" />
      </Container>

      <Grid gap={2} columns={[2, "1fr 1fr"]} className="grid">
        <Box  sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {data.map((item) => (
              <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
                <Rating rating={item.review} />
               
                <Text sx={styles.description}>{item.description}</Text>
                <div className="card-footer">
                  <div className="image">
                    <Image src={item.avatar} alt="Client Image" />
                  </div>
                  <div className="reviewer-info">
                    <Heading as="h4" sx={styles.heading}>
                      {item.name}
                    </Heading>
                    <Text sx={styles.designation}>{item.designation}</Text>
                  </div>
                </div>
              </Box>
            ))}
          </Carousel>
        </Box>
        <Box  sx={styles.box}>
          <Image
            src={BannerThumb}
            style={{ width: "75%", marginLeft: "30px" }}
            alt="banner"
          />
        </Box> 
      </Grid>
      {/* </div> */}
      <Container sx={styles.abovefooter}>
        <Box sx={styles.completeWidth}>
          <Flex sx={styles.flexCard}>
            <Box sx={styles.imageBox}>
              <Image src={Dubaicon} alt="dubaicon" />
            </Box>

            <Box sx={styles.imageBox}>
              <Image src={Uk} alt="uk" />
            </Box>
          </Flex>
          <Flex sx={styles.flexCard}  >
            <Box sx={styles.imageBox}>
            <h1>Dubai</h1>
            </Box>

            <Box sx={styles.imageBox} style={{paddingLeft:"35px"}}>
            <h1>UK</h1>
            </Box>
          </Flex>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-35px",
    px: "15px",
    ".carousel-container": {
      width: "100%",
      maxWidth: [
        "100%",
        null,
        null,
        "750px",
        "1000px",
        "1180px",
        null,
        "calc(50% + 865px)",
      ],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1,
        },
      },
    },
  },
  box:{
    display: ['none', 'block'],
  },
  flexCard: {
    width: "100%",
    justifyContent: "space-evenly",
  },
  completeWidth: {
    width: "100%",
  },
  imageBox: {
    width: "100px",
    height: "100px",
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 30px 40px 40px",
      "30px 30px 35px",
      "35px 30px 40px 40px",
    ],
    bg: "white",
    textAlign: "left",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 47px rgba(38, 78, 118, 0.1)",
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex",
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0,
        },
      },
      ".star": {
        color: "yellow",
        mr: "1px",
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px",
      },
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  designation: {
    color: "#25A0FF",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4,
  },
  abovefooter: {
    position: "relative",
    zIndex: "10",

    mb: -9,

    marginTop: "70px",
    marginBottom: "-89px",
    padding: ["55px 30px 42px", null, null, "55px 30px 42px", "55px 30px 42px"],
    backgroundColor: "#E9EFFF",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "60% center",
    backgroundSize: ["120px", null, null, null, "auto"],
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    textAlign: ["center", null, null, "left"],
    flexDirection: ["column", null, null, "row"],
    justifyContent: ["center", null, null, "space-between"],
  },
};
