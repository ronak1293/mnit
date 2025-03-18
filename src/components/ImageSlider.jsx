import React, { useState, useEffect } from "react";
import { Box, Image, Text, HStack, Circle } from "@chakra-ui/react";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://mnit.ac.in/students/images/mnit_infrastructure_photos_15.jpg",
    text: "mnit jaipur",
  },
  {
    src: "https://tse4.mm.bing.net/th?id=OIP.nfU_SYL5ToBztySMp60R8wHaEK&pid=Api&P=0&h=180",
    text: "vltc",
  },
  {
    src: "https://mnit.ac.in/students/images/mnit_infrastructure_photos_15.jpg",
    text: "mnit jaipur",
  },
];

const MotionBox = motion(Box);

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      width="100vw"
      height="350px"
      position="relative"
      overflow="hidden"
      border="1px solid gray"
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginBottom={"30px"}
      marginTop={"100px"}
    >
      {images.map((image, i) => (
        <MotionBox
          key={i}
          position="absolute"
          width="60%" // ✅ Images have a fixed width (not full width)
          height="100%"
          zIndex={i === index ? 1 : 0}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1, ease: "ease-in-out" }}
          display="flex"
          justifyContent="center"
        >
          <Image src={image.src} alt={`Slide ${i}`} objectFit="cover" width="100%" height="100%" borderRadius="md" />
          <Box
            position="absolute"
            bottom="10%"
            left="50%"
            transform="translateX(-50%)"
            bg="rgba(0, 0, 0, 0.5)"
            px={4}
            py={1}
            borderRadius="md"
          >
            <Text fontSize="md" fontWeight="medium" color="white" textAlign="center">
              {image.text}
            </Text>
          </Box>
        </MotionBox>
      ))}

      {/* Navigation Dots */}
      <HStack position="absolute" bottom="10px" left="50%" transform="translateX(-50%)" spacing={3}>
        {images.map((_, i) => (
          <Circle key={i} size="8px" bg={i === index ? "white" : "gray.500"} transition="background 0.3s" />
        ))}
      </HStack>
    </Box>
  );
};

export default ImageSlider;
