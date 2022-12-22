import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Divider,
} from '@chakra-ui/react'

import styles from './styles.module.css';

import { useQuery } from 'react-query';
import { fetchOrders } from '../../../api';

function Orders() {

    const { isLoading, isError, data, error } = useQuery("admin:orders", fetchOrders);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error {error.message}</div>
    }


    return (
        <div>

            <h1 className={styles.title}>Orders</h1>
            <Divider color="blue" width="100px" />
            <Divider color="blue" width="100px" />

            <TableContainer mt={4}>
                <Table variant='simple'>
                    <TableCaption>All orders are here.</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>User</Th>
                            <Th>Address</Th>
                            <Th isNumeric>Items</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                        {
                            data.map((item) => (
                                <Tr key={item._id}>
                                    <Td>{item.user.email}</Td>
                                    <Td>{item.adress}</Td>
                                    <Td isNumeric>{item.items.length}</Td>
                                </Tr>
                            ))
                        }


                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Orders
