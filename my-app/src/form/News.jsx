import React from "react";
import { Image, Box, Text } from "@chakra-ui/react";
import newsContent from "../media/newsContent.png"
const News = () => {
  return (
    <div>
      <Box
        style={{
          backgroundColor: "rgb(110, 110, 229)",
          padding: "15px 0px",
          borderRadius: "10px",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "700",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          News{" "}
        </Text>
      </Box>
      <br />
      <Image src={newsContent} />
    </div>
  );
};

export default News;
