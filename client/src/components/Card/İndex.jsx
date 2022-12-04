import React from "react";
import {
  Card,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  ButtonGroup,
  Button,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function CardItem({ item }) {
  return (
    <div>
      <Card maxW="sm" mt="5">
        <Link to={`/product/${item._id}`}>
          <CardBody>
            <Image
            className={styles.image}
              src={item.image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="sm">{item.title.substring(0, 20)}</Heading>
              <Text casing="uppercase" color="blackAlpha.600" >{item.category}</Text>
              <Text color="blue.600" fontSize="2xl">
                ${item.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Link>
      </Card>
    </div>
  );
}

export default CardItem;
