import React from "react";
import styles from "../../../CSS/Navbar.module.css";
import { Navbar, Nav, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";

import LanguageSelector from "../../LanguageSelector/language.js";
import { withTranslation } from "react-i18next";
import { HiMicrophone } from "react-icons/hi";
import SpeechRecognition from "react-speech-recognition";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Click and Speak to Navigate
  </Tooltip>
);

const navbar = ({ t }) => {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className={styles.NavBar}>
      <Navbar.Brand className={styles.Logo}>
        <RouteLink to="/" className={styles.Brand} style={{ fontSize: "35px" }}>
          Roz
          <span style={{ color: "#008dc8" }}>gaar </span>
        </RouteLink>
      </Navbar.Brand>
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
        <RouteLink to="/user/register">{t("Register")}</RouteLink>
      </Navbar.Collapse>
      <LanguageSelector langtype={false} />
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <HiMicrophone
          className={styles.microphone}
          onClick={SpeechRecognition.startListening}
        />
      </OverlayTrigger>
    </Navbar>
  );
};

export default withTranslation()(navbar);
