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
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Stack,
    FormControl,
    FormLabel,
    Textarea,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useBasket } from "../../contexts/BasketContext";
import styles from "./styles.module.css"
import { useState } from 'react';
import { postOrder } from '../../api';


function Basket() {

    const [address, setAddress] = useState("")

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { items, removeFromBasket, emptyBasket } = useBasket();

    const handleSubmitForm = async () => {
        const itemIds = items.map((item) => item._id);

        const input = {
            address,
            items: JSON.stringify(itemIds),
        };

        await postOrder(input);

        emptyBasket();
        onClose();
    }

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
                            <Stack align="end">
                                <Text fontSize="xl">Total Price: ${total} </Text>
                                <Button colorScheme="green" onClick={onOpen}>Order</Button>
                            </Stack>
                        </Box>

                        <Modal
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Order</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl>
                                        <FormLabel>Address</FormLabel>
                                        <Textarea ref={initialRef} placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </FormControl>

                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={handleSubmitForm}>
                                        Save
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>



                    </>
                )

            }

        </Box>
    )
}

export default Basket
