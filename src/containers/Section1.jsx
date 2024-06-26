import {
  Box,
  Button,
  Container,
  Hidden,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import LaunchButton from "../components/Buttons/LaunchButton";
import OutlinedButton from "../components/Buttons/OutlinedButton";
import { section1Content } from "../utils/content";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import useMeasure from "react-use-measure";
import Title from "../components/Title";
import useScrollPosition from "../hooks/useScrollPosition";
const {
  MainBG,
  TreesImage,
  CliffImage,
  HorseImage,
  ShootingStarImage,
  title,
  subtitle,
} = section1Content;

const CustomButton = ({ children, ...props }) => (
  <Button  arrow fit
    variant="outlined"
    sx={{
      borderRadius: 4,
      color: "text.primary",
      borderColor: "text.primary",
      height: 58,
      px: 2,
    }}
    {...props}
  >
    {children}
  </Button>
);

const Section1 = () => {
 const scrollPosition = useScrollPosition();
const handleClickScrollto = (event) => {
  var attribute = event.currentTarget.getAttribute('to');

    const element = document.getElementById(attribute);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [ref, { height }] = useMeasure();

  return (
    <Box sx={{ width: "100%" }}>
      {/* Main Background */}
      <Box sx={{ position: "fixed", zIndex: -10, top: 0, left: 0, right: 0 }}>
        <img src={MainBG} style={{ width: "100%" }} />
      </Box>

      {/* backgrounds elements */}
      <Box
        ref={ref}
        sx={{
          position: "absolute",
          width: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <img src={MainBG} style={{ width: "100%", opacity: 0 }} />

        {/* Star */}
        <img
          src={ShootingStarImage}
          style={{
            position: "absolute",
            top: "30px",
            right: "15%",
            width: "500px",
          }}
        />

        <img
          src={HorseImage}
          style={{
            position: "absolute",
            height: "70%",
            right: "0",
            bottom: "25%",
            transform: "rotate(0)",
          }}
        />

        <Box
          sx={{
            bgcolor: "background.default",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "800px",
            top: `calc(${height}px - 13%)`,
          }}
        ></Box>
      </Box>

      {/* Content */}
      <Container
        sx={{
          height: "80vh",
          mt: 8,
          [theme.breakpoints.up("md")]: { mt: 6 },
        }}
      >
        <Stack sx={{ height: "100%" }} justifyContent="center">
          <Title
            variant={{ xs: "h3", sm: "h2", md: "h1" }}
            sx={{ letterSpacing: "0.02em", mb: 1 }}
          >
            {title}
          </Title>

          <Title
            variant={{ xs: "p", sm: "p", md: "p" }}
            sx={{ fontWeight: 500, letterSpacing: "0.05em", mb: 5 }}
          >
            {subtitle}
          </Title>

          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            spacing={4}
          >

          <OutlinedButton target="_blank" href="https://bscscan.com/token/0xcb3e4688c4cd90022f74f5c70a775172ecab4d52" arrow fit>
            TOKEN ADDRESS
          </OutlinedButton>
          <CustomButton to={"join-us"} onClick={handleClickScrollto} fullWidth={isSmallScreen} >BUY NOW</CustomButton>
          </Stack>
          
        </Stack>
        
      </Container>
    </Box>
  );
};

export default Section1;
