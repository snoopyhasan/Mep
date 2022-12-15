/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import CoreFeatureThumb from 'assets/coreFeature.jpg';
import Briefcase from 'assets/core-feature/briefcase.svg';
import Secure from 'assets/core-feature/secure.svg';

const data = {
  
  title: 'Our Team',
  features: [
    {
      id: 1,
      imgSrc: Briefcase,
      altText: 'Smart Features',
      title: '"A satisfied customer is the best business strategy off all"',
      text:
        'After spending a huge time in facility management and MEP works. And after failing several times we have come to know that a satisfied customer is what makes you the best facility management company in Dubai. Our team is a blend of young and experience, and having an experienced core team helps us work through challenging problems while the youth ideas help us lay the groundwork for the future. Having this great vision for preparing for the better tomorrow makes us the best MEP companies in Dubai.',
    },
     
  ],
};

export default function CoreFeature() {
  return (
    <section sx={styles.coreFeature}>
        <Box  sx={styles.headingTop}>
            <TextFeature subTitle={data.subTitle} title={data.title} />
            <Box  gap="15px 0" columns={1} sx={styles.grid}>
            {data.features.map((item) => (
              <Box  sx={styles.card} key={item.id}>
                

                <Box  sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                </Box>
              </Box>
            ))}
          </Box>
          </Box>

      <Container sx={styles.containerBox}>
        <Box  sx={styles.thumbnail}>
          <Image src={CoreFeatureThumb} alt="Thumbnail" style={{borderRadius:"30%"}}/>
        </Box>
        <Box   sx={styles.contentBox}>
         
          <Box gap="15px 0" columns={1} sx={styles.grid}>
            {data.features.map((item) => (
              <Box sx={styles.card} key={item.id}>
                

                <Box sx={styles.wrapper}>
                  <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: ['auto', null, null, '50%'],
      bottom: ['100px', 0, null, 'auto'],
      left: 0,
      background: 'linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)',
      height: [350, 550, '60%'],
      width: '50%',
      zIndex: -1,
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
      transform: ['translateY(0)', null, null, 'translateY(-50%)'],
    },
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', null, null, 'row'],
  },
  thumbnail: {
    pl: [0, 5, 0, null, 7, 95],
    pr: [0, 5, null, null, null, 75, 95],
    order: [2, null, null, 0],
  },
  contentBox: {
    width: ['100%', 450, 550, 350, 500, 570],
    pr: [0, null, 'auto', null, null, 80],
    pl: 'auto',
    flexShrink: 0,
  },
  headingTop: {
    pl: [0, null, null, null, '35px', null, '55px', 6],
    mb: [3, null, null, null, 1],
    textAlign: "center",
  },
  grid: {
    p: ['0 0px 35px', null, null, null, '0 20px 40px', null, '0 40px 40px', 0],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    p: [
      '0 17px 20px',
      null,
      null,
      '0 0 20px',
      '20px 15px 17px',
      null,
      null,
      '25px 30px 23px',
    ],
    backgroundColor: 'white',
    borderRadius: '10px',
    transition: 'all 0.3s',
    width: ['100%', '85%', null, '100%'],
    mx: 'auto',
    '&:hover': {
      boxShadow: [
        '0px 0px 0px rgba(0, 0, 0, 0)',
        null,
        null,
        null,
        '0px 8px 24px rgba(69, 88, 157, 0.07)',
      ],
    },
  },

  img: {
    width: ['50px', null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
    },

    subTitle: {
      textAlign:"justify",

      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
};
