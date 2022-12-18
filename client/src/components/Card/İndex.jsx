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

import { useBasket } from '../../contexts/BasketContext';

function CardItem({ item }) {

  const { addToBasket, items } = useBasket();

  const findBasketItem = items.find((basket_item) => basket_item._id === item._id)


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
        </Link>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme={findBasketItem ? "green" : "blue"} onClick={() => addToBasket(item, findBasketItem)}>
              {
                findBasketItem ? "Remove from basket" : "Add to cart"
              }
            </Button>
          </ButtonGroup>
        </CardFooter>

      </Card>
    </div>
  );
}

export default CardItem;
