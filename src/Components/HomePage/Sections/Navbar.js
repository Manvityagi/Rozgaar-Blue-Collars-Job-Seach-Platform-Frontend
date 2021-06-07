import React from "react";
import styles from "../../../CSS/Navbar.module.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import LanguageSelector from "../../LanguageSelector/language.js";
import { withTranslation } from "react-i18next";

const navbar = ({ t }) => {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className={styles.NavBar}>
      <Navbar.Brand className={styles.Logo}>
        <a href="/" className={styles.Brand} style={{ fontSize: "35px" }}>
          Roz
          <span style={{ color: "#008dc8" }}>gaar </span>
        </a>
      </Navbar.Brand>
      <LanguageSelector />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link active smooth={true} duration={1000} to="home">
            {t("Home")}
          </Link>
          <Link smooth={true} offset={-90} duration={1000} to="categories">
            {t("Categories")}
          </Link>
          <Link smooth={true} offset={-190} duration={1000} to="howwework">
            {t("How We Work?")}
          </Link>
          <Link smooth={true} offset={-90} duration={1000} to="contact">
            {t("Contact Us")}
          </Link>
        </Nav>
        <a href="/user/register">{t("Register")}</a>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withTranslation()(navbar);
