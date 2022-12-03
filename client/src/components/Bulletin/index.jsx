import React from "react";
import {
  Center,
  Grid,
  GridItem,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

function Bulletin() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" mt={10} bg="rgb(88,151,251)">
      <GridItem
        w="100%"
        h="100"
        display="flex"
        justifyContent="center"
      >
        <Center>
          <EmailIcon boxSize={10} color="white" />
          <Text ml={4} color="white" fontSize={18} fontFamily="gillsans">
            Subscribe to Our E-Newsletter!
          </Text>
        </Center>
      </GridItem>
      <GridItem
        w="100%"
        h="100"
        display="flex"
        justifyContent="center"
      >
        <Center>
          <Text ml={4} color="white" fontSize={18} fontFamily="gillsans">
            Be the first to know about the campaigns.
          </Text>
        </Center>
      </GridItem>
      <GridItem
        w="100%"
        h="100"
        display="flex"
        justifyContent="center"
      >
        <Center>
          <InputGroup variant="filled">
            <InputRightElement>
              <IconButton variant="outline" icon={<EmailIcon />} />
            </InputRightElement>
            <Input
              type="email"
              focusBorderColor="white"
              placeholder="Enter email"
            />
          </InputGroup>
        </Center>
      </GridItem>
    </Grid>
  );
}

export default Bulletin;
