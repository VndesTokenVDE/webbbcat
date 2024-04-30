import { Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Title from "../components/Title";
import { section3Link,section3Content } from "../utils/content";

const { title, ITEMS } = section3Content;
const { title1, LIST } = section3Link;

const Section3 = () => {
  return (
    <Container sx={{ mt: { xs: 10, md: 20 } }}>
      <Container maxWidth="md">
        <Title variant={{ xs: "h3", md: "h2" }} sx={{ textAlign: "center" }}>
          {title}
        </Title>
      </Container>
      
      <Grid container spacing={3} sx={{ mt: 4 }} justifyContent="center" >
        {LIST.map(({ name, logo,link }) => (
          <Grid item xs={6} md={3} lg={3} key={name}>
            <Stack alignItems="center">
              <a target={'_blank'} href={link} ><img
                src={logo}
                style={{ width: "100%", objectFit: "contain" }}
              />
              </a>
              
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={5} sx={{ mt: 4 }} justifyContent="center">
        {ITEMS.map(({ name, logo }) => (
          <Grid item xs={4} md={3} lg={2.4} key={name}>
            <Stack alignItems="center">
              <img
                src={logo}
                style={{ height: "120px", objectFit: "contain" }}
              />

              <Typography variant="body2" color="text.secondary">
                {name}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section3;
