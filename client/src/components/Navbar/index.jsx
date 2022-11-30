import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button, Image } from "@chakra-ui/react";
import images from "../../images/e-ticaret-logo.png";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">
          <Image src={images} alt="logo" />
        </Link>
      </div>

      <ul className={styles.menu}>
        <li>
          <Link to="/">Electronic</Link>
        </li>
        <li>
          <Link to="/">Cosmetic</Link>
        </li>
        <li>
          <Link to="/">Furniture</Link>
        </li>
        <li>
          <Link to="/">Clothes</Link>
        </li>
        <li>
          <Link to="/">Accessory</Link>
        </li>
        <li>
          <Link to="/">Sport</Link>
        </li>
      </ul>

      <div className={styles.buttons}>
        <Link to="/signin">
          <Button className={styles.btnSignin} colorScheme="gray">
            Sign in
          </Button>
        </Link>

        <Link to="/signup">
          <Button colorScheme="cyan">Sign up</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
