import { Box,Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
    
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
       <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="base"
      color="white"
    >
      <Image src={imageSrc} alt={title} />

      <Box p="4">
        <VStack spacing={2}>
          <Heading as="h3" size="md" textAlign="center">
            {title}
          </Heading>
          <Text color="black">{description}</Text>
        </VStack>

        <HStack justifyContent="flex-end" mt="2">
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </Box>
    </Box>
  );
};

export default Card;
