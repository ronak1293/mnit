import { Box, VStack, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const newsItems = [
  { id: 1, text: "🚨 notice!!" },
  { id: 2, text: "🔥 notice!!" },
  { id: 3, text: "⚡ notice!!" },
  { id: 4, text: "📢 notice!!" },
];

const MotionBox = motion(Box);

const NoticeBoard = () => {
  const [index, setIndex] = useState(0);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 3000); // Change news every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        width="95vw"          // ✅ Almost full width
        maxW="1200px"         // ✅ Prevents excessive stretching on large screens
        height="250px"
        bg="gray.100"
        border="1px solid #ccc"
        boxShadow="xl"
        borderRadius="md"
        overflow="hidden"
        color="black"
        p={4}
        px={6}         
        marginTop={"30px"}       // ✅ Extra horizontal padding for spacing
        marginBottom={"30px"}              // ✅ Centers it within the page
      >
        {/* Heading Section */}
        <Box bg="#1e1e2f" p={3} textAlign="center" borderRadius="md">
          <Text fontSize="xl" fontWeight="bold" color="white">
            📰 Latest Alerts
          </Text>
        </Box>

        {/* News Section */}
        <VStack spacing={3} height="180px" justify="center">
          <DialogRoot open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <MotionBox
                key={index}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                width="90%"         // ✅ Increases the notice width
                textAlign="center"
                bg="white"
                p={3}
                borderRadius="md"
                boxShadow="md"
                cursor="pointer"
                onClick={() => {
                  setSelectedNotice(newsItems[index]);
                  setIsOpen(true);
                }}
              >
                <Text fontSize="lg" fontWeight="medium">{newsItems[index].text}</Text>
              </MotionBox>
            </DialogTrigger>

            {/* Center Dialog Box */}
            {selectedNotice && (
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Notice Details</DialogTitle>
                </DialogHeader>
                <DialogBody>
                  <Text fontSize="lg">{selectedNotice.text}</Text>
                </DialogBody>
                <DialogFooter>
                  {/* ✅ Close Dialog on Cancel Button Click */}
                  <Button variant="outline" onClick={() => setIsOpen(false)}>
                    Close
                  </Button>
                </DialogFooter>
              </DialogContent>
            )}
          </DialogRoot>
        </VStack>
      </Box>
    </>
  );
};

export default NoticeBoard;
