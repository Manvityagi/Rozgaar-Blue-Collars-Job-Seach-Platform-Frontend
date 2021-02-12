import React from "react";
import styles from "../../../CSS/Navbar.module.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

function navbar() {
  return (
    <Navbar fixed = "top" bg = "light" expand = "lg" className = {styles.NavBar}>
      <Navbar.Brand className = {styles.Logo}>
        <a href = "/" className = {styles.Brand} style = {{fontSize: "35px"}}>
          Roz 
          <span style = {{ color: "#008dc8" }}>gaar </span> 
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
      <Navbar.Collapse id = "responsive-navbar-nav">
        <Nav className = "ml-auto">
          <Link active smooth = {true} duration = {1000} to = "home">
            Home
          </Link>
          <Link smooth = {true} offset = {-90} duration = {1000} to = "categories">
            Categories
          </Link>
          <Link smooth = {true} offset = {-190} duration = {1000} to = "howwework">
            How We Work?
          </Link>
          <Link smooth = {true} offset = {-90} duration = {1000} to = "contact">
            Contact Us
          </Link>
        </Nav>
        <a href = "/user/register">
          Register
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;