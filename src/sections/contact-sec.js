/** @jsx jsx */
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Row } from "theme-ui";
import { Grid, Button, Label, Input, Select, Textarea } from "theme-ui";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function ContactSec() {
  const form = useRef();

  const params = {
    name: "",
    email: "",
    cn: "",
    country: "",
    date: "",
    message: "",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    params["name"] = form.current["username"].value;
    params["email"] = form.current["email"].value;
    params["cn"] = form.current["cn"].value;
    params["country"] = form.current["country"].value;
    params["date"] = form.current["date"].value;
    params["message"] = form.current["message"].value;
    console.log(params);
    emailjs
      .sendForm(
        "service_khnzji9",
        "template_irho5c7",
        form.current,
        "VixH_ZKWfrSYVW99e"
      )
      .then(
        (result) => {
          document.getElementById("form").reset();
          alert("Message sent, We will contact you shortly", result.text);
          document.getElementById("message").innerHTML = "We will contact you shortly";
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
          document.getElementById("message").innerHTML = "An error occurred, Please try again";
        }
      );
  };

  return (
    <Box sx={styles.main}>
    
      <Container sx={styles.contactform}>
      <Box  sx={styles.message}><Heading as="h2" id="message"></Heading></Box>
        <Grid gap={2} columns={[2, "1fr 1fr"]} sx={styles.grid}>
          <Box>
            <Heading as="h1" sx={styles.h1}>
              | Connect With Us
            </Heading>
            <Box sx={styles.salesBox}>
              <Heading as="h5">Enquiry </Heading>
              <Box sx={styles.box}>
                <Text
                  sx={{
                    fontSize: 2,
                    fontWeight: "bold",
                    display: "block",
                    margin: "8px 0px",
                  }}
                >
                  <FaEnvelope /> enquiry@urbansciencemep.com
                  {/* <FaPhone /> +971 543565450 */}
                </Text>
                <Text
                  sx={{
                    fontSize: 2,
                    fontWeight: "bold",
                    display: "block",
                  }}
                >
                  <FaPhone /> 0509418224
                </Text>
              </Box>
              <hr></hr>
            </Box>
            <Box sx={styles.salesBox}>
              <Heading as="h5">Procurement Team</Heading>
              <Box sx={styles.box}>
                <Text
                  sx={{
                    fontSize: 2,
                    fontWeight: "bold",
                    display: "block",
                    margin: "8px 0px",
                  }}
                >
                  <FaEnvelope /> urbansciencemep@gmail.com
                  {/* <FaPhone /> +971 543565450 */}
                </Text>
                <Text
                  sx={{
                    fontSize: 2,
                    fontWeight: "bold",
                    display: "block",
                  }}
                >
                  <FaPhone /> +971 543565450
                </Text>
              </Box>
              <hr></hr>
            </Box>
            <Box sx={styles.salesBox}>
              <Heading as="h5">General Enquiry</Heading>
              <Box sx={styles.box}>
                <Text
                  sx={{
                    fontSize: 2,
                    fontWeight: "bold",
                    display: "block",
                  }}
                >
                  <FaPhone /> 0509418224
                </Text>
              </Box>
              <hr></hr>
            </Box>
          </Box>
          <Box
            style={{ padding: "10px" }}
            ref={form}
            onSubmit={sendEmail}
            as="form"
            id="form"
          >
            <Label htmlFor="username">Name</Label>
            <Input name="username" id="username" mb={3} required/>
            <Label htmlFor="password">Email</Label>
            <Input type="email" name="email" id="password" mb={3} required/>

            <Label htmlFor="country">Country</Label>
            <Select name="country" id="sound" mb={3}>
              <option>UAE</option>
              <option>India</option>
              <option>etc</option>
            </Select>
            <Label htmlFor="cn">Contact number</Label>
            <Input type="tel" name="cn" id="password" mb={3} required/>
            <Label htmlFor="date">Expected date</Label>
            <Input type="date" name="date" id="password" mb={3} required/>
            <Label htmlFor="message">Message</Label>
            <Textarea name="message" id="comment" rows={6} mb={3} required/>
            <Button>Submit</Button>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  main: {
    backgroundColor: "white",
  },
  message:{
    padding: "10px",
    margin: "10px",
  },
  h1: {
    fontSize: "30px",
  },
  h3: {},
  contactform: {
    maxWidth: 600,
    padding: "150px 0 120px 0",
  },
  salesBox: {
    padding: "10px 20px",
  },
  box: {
    padding: "10px 20px",
  },
  grid: {
    "@media screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
  banner: {
    overflow: ["hidden", "initial", null, "hidden"],
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "top left",
    backgroundSize: "cover",
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ["150px", null, null, null, null, null, "140px", "130px"],
    pb: ["100px", null, null, "110px", null, 10, "150px"],
    backgroundColor: "white",
    container: {
      display: "flex",
    },
  },
};
