import React from "react";
import styles from "../../../CSS/Navbar.module.css";
import { Navbar } from "react-bootstrap";

function navbar() {
  return (
    <Navbar fixed = "top" bg = "light" expand = "lg" className = {styles.NavBar}>
        <Navbar.Brand className = {styles.Logo}>
            <a href = "/" className = {styles.Brand} style = {{fontSize: "35px"}}>
                Roz 
                <span style = {{ color: "#008dc8" }}>gaar </span> 
            </a>
        </Navbar.Brand>
    </Navbar>
  );
}

export default navbar;