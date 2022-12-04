import styles from "./styles.module.css";
import React from "react";
import {
  Box,
  Container,
  Button,
  HStack,
  Flex,
  Spacer,
  Wrap,
  WrapItem,
  Center,
  Image,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, SearchIcon } from "@chakra-ui/icons";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../images/logo-1.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Box w="100%" h="35px" bgGradient="linear(to-r, green.200, pink.500)">
        <h1 className={styles.message}>
          Up to 60% off on selected products, the last sale of the season.
        </h1>
      </Box>

      <Box
        w="100%"
        h="40px"
        background="rgb(242,243,248)"
        className={styles.infoMenu}
      >
        <Container maxW="85%">
          <Flex>
            <Box>
              <div className={styles.contact}>
                <PhoneIcon mr={2} mt={1} />
                <h3>0555 444 33 22 |</h3>
                <EmailIcon mr={2} mt={1} ml={2} />
                <h3 className={styles.mail}>info@ecommerce.com</h3>
              </div>
            </Box>
            <Spacer />
            <Box>
              <div className={styles.social}>
                <HStack>
                  <Button leftIcon={<FaFacebook />}>Facebook</Button>
                  <Button leftIcon={<FaTwitter />}>Twitter</Button>
                  <Button leftIcon={<FaInstagram />}>Instagram</Button>
                </HStack>
              </div>
            </Box>
          </Flex>
        </Container>
      </Box>
      <div className={styles.headerNav}>
        <Box w="100%" h="110px" mt={2} mb={3}>
          <Container maxW="85%">
            <Wrap>
              <WrapItem className={styles.logo}>
                <Center w="343px" h="110px">
                  <Link to="/">
                    <Image src={logo} />
                  </Link>
                </Center>
              </WrapItem>

              <WrapItem className={styles.search}>
                <Center w="550px" h="110px" p={10}>
                  <InputGroup>
                    <InputRightElement>
                      <IconButton bg="none" p={1} icon={<SearchIcon />} />
                    </InputRightElement>
                    <Input type="tel" placeholder="Search" />
                  </InputGroup>
                </Center>
              </WrapItem>

              <WrapItem>
                <Center w="350px" h="110px" justifyContent="end">
                  <Stack direction="row" spacing={4}>
                    <Link to="/signin">
                      <Button colorScheme="pink" variant="solid">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/signup">
                      <Button colorScheme="blue" variant="outline">
                        Sign Up
                      </Button>
                    </Link>
                  </Stack>
                </Center>
              </WrapItem>
            </Wrap>
          </Container>
        </Box>
      </div>

      <div>
        <Box w="100%" h="50px" bg="rgb(88,151,251)">
          <Container maxW="85%">
            <div className={styles.navMenu}>
              <h3>Clothing & Shoes</h3>
              <h3>Electronic</h3>
              <h3>Home & Living</h3>
              <h3>Cosmetics & Personal Care</h3>
              <h3>Sports & Outdoor</h3>
              <h3>Jewelry & Watches</h3>
              <div className={styles.navHotline}>
                <PhoneIcon className={styles.phoneIcon} />
                <h3 className={styles.textHotline}>Hotline</h3>
                <h3 className={styles.numb}>0505 505 50 05</h3>
              </div>
            </div>
          </Container>
        </Box>
      </div>
    </div>
  );
}

export default Navbar;
