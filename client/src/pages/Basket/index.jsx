import React from 'react'
import {
    Alert,
    Box,
    Divider,
    Table,
    Thead,
    Tbody,
    Tr,
    Image,
    Th,
    Td,
    TableContainer,
    Button,
    Text,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useBasket } from "../../contexts/BasketContext";
import styles from "./styles.module.css"
function Basket() {

    const { items, removeFromBasket } = useBasket();

    const total = items.reduce((acc, obj) => acc + obj.price, 0)

    return (
        <Box m={6}>
            {
                items.length < 1 && (
                    <Alert status='warning'>You have not any items in your basket.</Alert>
                )
            }

            {
                items.length > 0 && (
                    <>
                        <h1 className={styles.title}>Basket</h1>
                        <Divider color="blue" width="100px" />
                        <Divider color="blue" width="100px" />


                        <TableContainer mt={5}>
                            <Table variant='striped' colorScheme='teal'>
                                <Thead>
                                    <Tr>
                                        <Th>Image</Th>
                                        <Th>Product Name</Th>
                                        <Th textAlign="center">Price</Th>
                                        <Th textAlign="center">into</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {items.map((item) => (
                                        <Tr key={item._id}>

                                            <Td>
                                                <Link to={`/product/${item._id}`}>
                                                    <Image height={10} src={item.image} loading="lazy" alt="basket item" />
                                                </Link>
                                            </Td>
                                            <Td>{item.title}</Td>
                                            <Td textAlign="center">${item.price}</Td>
                                            <Td textAlign="center">
                                                <Button onClick={() => removeFromBasket(item._id)}>
                                                    <DeleteIcon />
                                                </Button>
                                            </Td>

                                        </Tr>
                                    ))}

                                </Tbody>
                            </Table>
                        </TableContainer>


                        <Box mt={8} p={5}>
                            <Text float="right" fontSize="xl">Total Price: ${total} </Text>
                        </Box>



                    </>
                )

            }

        </Box>
    )
}

export default Basket
