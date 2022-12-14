import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./styles.module.css";
import { Box, Divider, Input, Stack, Text, HStack, Center, Avatar, Button } from "@chakra-ui/react";
function Profile() {
  const { user } = useAuth();

  return <div>

    <h1 className={styles.title}>Profile</h1>
    <Divider color="blue" width="100px" />
    <Divider color="blue" width="100px" />

    <HStack justifyContent="center" mt={8}>

      <Box display="flex" alignItems="center" m={8}>
        <Box borderRadius={20} boxShadow='2xl' p='6' bg='white'>
          <HStack spacing={8} m={4}>
            <Text mr={8}>Name</Text>
            <Input width="200px" placeholder="Name" />
          </HStack>
          <HStack spacing={8} m={4}>
            <Text>Last Name</Text>
            <Input width="200px" placeholder="Last Name" />
          </HStack>
          <HStack spacing={8} m={4}>
            <Text mr={8}>E-mail</Text>
            <Input width="200px" value={JSON.stringify(user.email).substring(1, JSON.stringify(user.email).length - 1)} />
          </HStack>
        </Box>
      </Box>


      <Box display="flex" alignItems="center" m={8}>
        <Box borderRadius={20} boxShadow='2xl' p='6' bg='white'>
          <Stack spacing={8} m={4}>
            <Center>
              <Avatar size={"2xl"} />
            </Center>
            <Button color="blue.500">Update</Button>
          </Stack>
        </Box>
      </Box>


    </HStack>


  </div >
}

export default Profile;


{/* <code>{JSON.stringify(user)}</code> */ }