import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./styles.module.css";
import { Divider } from "@chakra-ui/react";
function Profile() {
  const { user } = useAuth();

  return <div>

    <h1 className={styles.title}>Profile</h1>
    <Divider color="blue" width="100px" />
    <Divider color="blue" width="100px" />


  </div>
}

export default Profile;


{/* <code>{JSON.stringify(user)}</code> */ }