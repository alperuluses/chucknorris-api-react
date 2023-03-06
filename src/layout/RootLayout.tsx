import React from "react";
import { Container, Image } from "@chakra-ui/react";
import background from "../public/img/town.png";
import Main from "../components/Main";

const mainContainerCss = {
  background:
    "linear-gradient(180deg, rgba(0,212,255,0.3) 62%, rgba(150,75,0,1) 100%)",
  minHeight: "100vh",
  position: "relative",
  h: "100%",
  w: "100%",
  maxW: "100%",
  p: "0",
};

const backgroundImageCss = {
  position: "absolute",
  width: "100%",
  bottom: "0",
};

export default function RootLayout() {
  return (
    <Container as="main" sx={mainContainerCss}>
      <Image sx={backgroundImageCss} src={background} alt="Pollygon" />
      <Main />
    </Container>
  );
}
