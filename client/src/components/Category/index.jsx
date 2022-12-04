import React from "react";
import { Box, Grid, GridItem, Text, Image, Divider } from "@chakra-ui/react";
import styles from "./styles.module.css";
import category1 from "../../images/category1.jpg";
import category2 from "../../images/category2.jpg";
import category3 from "../../images/category3.jpg";
import category4 from "../../images/category4.jpg";
import category5 from "../../images/category5.jpg";

function Category() {
  return (
    <Box h="400">
      <h1 className={styles.title}>Categories</h1>
      <Divider color="blue" width="100px" />
      <Divider color="blue" width="100px" />
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={8}
        p="6"
        fontFamily="gill-sans"
        
      >
        <GridItem
          w="100%"
          h="250"
          bg="rgb(244,245,249)"
          p={4}
          
        >
          <Box className={styles.category}>
            <Image src={category1} />
            <Text
              align="center"
              mt={2}
              casing="uppercase"
              color="blackAlpha.600"
            >
              Clothing & Shoes
            </Text>
          </Box>
        </GridItem>
        <GridItem w="100%" h="250" bg="rgb(244,245,249)" p={4}>
          <Box className={styles.category}>
            <Image src={category2} />
            <Text
              align="center"
              mt={2}
              casing="uppercase"
              color="blackAlpha.600"
            >
              Electronic
            </Text>
          </Box>
        </GridItem>
        <GridItem w="100%" h="250" bg="rgb(244,245,249)" p={4}>
          <Box className={styles.category}>
            <Image src={category3} />
            <Text
              align="center"
              mt={2}
              casing="uppercase"
              color="blackAlpha.600"
            >
              Home & Living
            </Text>
          </Box>
        </GridItem>
        <GridItem w="100%" h="250" bg="rgb(244,245,249)" p={4}>
          <Box className={styles.category}>
            <Image src={category4} />
            <Text
              align="center"
              mt={2}
              casing="uppercase"
              color="blackAlpha.600"
            >
              Cosmetics
            </Text>
          </Box>
        </GridItem>
        <GridItem w="100%" h="250" bg="rgb(244,245,249)" p={4}>
          <Box className={styles.category}>
            <Image src={category5} />
            <Text
              align="center"
              mt={2}
              casing="uppercase"
              color="blackAlpha.600"
            >
              Jewelry & Watches
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Category;
