import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";



function Admin() {
    return (
        <div>
            <Box m={5} bg="gray.200">
                <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                    <GridItem w='100%' h='12' display="flex" justifyContent="center" p={2}>
                        <Link to="/admin/home">
                            <Text>Home</Text>
                        </Link>
                    </GridItem>
                    <GridItem w='100%' h='12' display="flex" justifyContent="center" p={2} >
                        <Link to="/admin/orders">
                            <Text>Orders</Text>
                        </Link>
                    </GridItem>
                    <GridItem w='100%' h='12' display="flex" justifyContent="center" p={2} >
                        <Link to="/admin/products">
                            <Text>Products</Text>
                        </Link>
                    </GridItem>
                </Grid>
            </Box>

            <Box m={5}>
                <Outlet />
            </Box>

        </div>
    )
}

export default Admin
