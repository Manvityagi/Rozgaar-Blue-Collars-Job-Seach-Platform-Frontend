import React from "react";
import styles from "../../../CSS/Navbar.module.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import { AiOutlineSearch } from "react-icons/ai"

function navbar() {
  return (
    <Navbar fixed = "top" bg = "light" expand = "lg" className = {styles.NavBar}>
        <Navbar.Brand className = {styles.Logo}>
            <a href = "/" className = {styles.Brand} style = {{fontSize: "35px"}}>
                Roz 
                <span style = {{ color: "#008dc8" }}>gaar </span> 
            </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls = "basic-navbar-nav" />
        <Navbar.Collapse id = "basic-navbar-nav" className = {styles.ShiftRight}>
            {/* <Form inline>
                <div className = {styles.Middle}>
                    <FormControl 
                        type = "text" 
                        placeholder = "Search" 
                        className = {styles.Search} 
                    />
                    <Button className = {styles.SearchButton}>
                        <AiOutlineSearch />
                    </Button>
                </div>
            </Form> */}
            <Nav className = "mr-auto">
                <NavDropdown 
                    title = {
                        <span className = {styles.Title}>
                            Opportunities
                        </span>
                    } 
                    id = "dropdown-basic-button" 
                    className = {styles.Dropdown}
                >
                    <NavDropdown.Item href = "/jobs/electrician"> Electrician </NavDropdown.Item>
                    <NavDropdown.Item href = "/jobs/plumber"> Plumber </NavDropdown.Item>
                    <NavDropdown.Item href = "/jobs/mechanic"> Mechanic </NavDropdown.Item>
                    <NavDropdown.Item href = "/jobs/cooking"> Cook </NavDropdown.Item>
                    <NavDropdown.Item href = "/jobs/peon"> Peon </NavDropdown.Item>
                    <NavDropdown.Item href = "/jobs/driver"> Driver </NavDropdown.Item>
                    <NavDropdown.Item href = "/jobs/housekeeping"> House Keeping </NavDropdown.Item>
                    <NavDropdown.Item href = "/jobs/siteworkers"> Construction Site Worker </NavDropdown.Item>
                    <NavDropdown.Item href = "/jobs/securityguard"> Security Guard </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            {/* <button className = {styles.Button}>
                Login / SignUp
            </button> */}
        </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;