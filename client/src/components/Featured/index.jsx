import React from "react";
import styles from "./styles.module.css";
import { Grid , Divider} from "@chakra-ui/react";
import CardItem from "../Card/İndex";
import { useQuery } from "react-query";
import { fetchProductList } from "../../api";

function Featured() {
  const { isLoading, error, data } = useQuery("products", fetchProductList);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  return (
    <div>
      <h1 className={styles.title}>Featured products</h1>
      <Divider color="blue" width="100px"/>
      <Divider color="blue" width="100px"/>

      <Grid
        templateColumns="repeat(4, 2fr)"
        templateRows="repeat(1, 1fr)"
        gap={3}
      >
        {data.map((item, key) => (
          <CardItem key={key} item={item} />
        ))}
      </Grid>
    </div>
  );
}

export default Featured;
