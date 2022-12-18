import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react";

function Error() {
    return (
        <div>
            <Alert status="error" height="150px" mt={8} justifyContent="center" fontSize="2xl">
                <AlertIcon />
                <AlertTitle mr={2}>Error 404</AlertTitle>
                <AlertDescription>This page was not found.</AlertDescription>
            </Alert>
        </div>
    )
}

export default Error
