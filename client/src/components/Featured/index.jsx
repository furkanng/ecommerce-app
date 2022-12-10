import React from "react";
import styles from "./styles.module.css";
import { Grid, Divider, Box, Flex, Button } from "@chakra-ui/react";
import CardItem from "../Card/İndex";
import { useInfiniteQuery } from "react-query";
import { fetchProductList } from "../../api";

function Featured() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("products", fetchProductList, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup?.length === 12;

      if (!morePagesExist) {
        return;
      }
      return allGroups.length + 1;
    },
  });

  if (status === "loading") return "Loading...";

  if (status === "error") return "An error has occurred: " + error.message;

  return (
    <div>
      <h1 className={styles.title}>Featured products</h1>
      <Divider color="blue" width="100px" />
      <Divider color="blue" width="100px" />

      <Grid
        templateColumns="repeat(4, 2fr)"
        templateRows="repeat(1, 1fr)"
        gap={3}
      >
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((item) => (
              <Box w="100%" key={item._id}>
                <CardItem item={item} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Grid>
      <Flex mt="10" justifyContent="center">
        <Button
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </Flex>
    </div>
  );
}

export default Featured;
