import React from "react";
import { Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import homeVideo from "../media/homeVideo.mp4";
import legacy from "../media/legacy.png";
import "../css/home1.css";

const Homepage1 = () => {
  return (
    <>
      <Box w="100%" h="auto" className="main">
        <Box width={"75%"} margin={"auto"}>
          <Text color={"white"} fontSize={"8xl"} lineHeight={"120px"} fontFamily={"VC Honey"}>
            The only AI customer service solution you need
          </Text>
        </Box>
        <Box width={"50%"} margin={"auto"}>
          <Text color={"white"} fontSize={"2xl"}>
            The only solution that combines an AI chatbot, help desk, and
            proactive support so you can keep costs low, support teams happy,
            and customers satisfied.{" "}
          </Text>
        </Box>
        <Flex justifyContent={"center"} gap={"2rem"} m={"20px"}>
          <button className="start">
            Start Free Trial
          </button>
          <button className="view">View Demo</button>
        </Flex>
        <Box>
          <Box
            width={"80%"}
            margin={"auto"}
            className="video"
          >
            <video className="video" src={homeVideo} autoPlay muted />
          </Box>
        </Box>
        <Box>
          <Image src={legacy} />
        </Box>
      </Box>
    </>
  );
};

export default Homepage1;
