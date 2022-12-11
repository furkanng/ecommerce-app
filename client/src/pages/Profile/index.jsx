import { Button } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";

function Profile() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    logout();
  };
  return (
    <div>
      Profile
      <br />
      <code>{JSON.stringify(user)}</code>
      <br />
      <br />
      <Button colorScheme="pink" onClick={handleLogout}>
        logout
      </Button>
    </div>
  );
}

export default Profile;
