import React from "react";
import styles from "../../../CSS/Navbar.module.css";
import { Navbar, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import LanguageSelector from "../../LanguageSelector/language.js";
import { HiMicrophone } from "react-icons/hi";
import SpeechRecognition from "react-speech-recognition";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Click and Speak to Navigate
  </Tooltip>
);

function navbar({ t }) {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className={styles.NavBar}>
      <Navbar.Brand className={styles.Logo}>
        <Link to="/" className={styles.Brand} style={{ fontSize: "35px" }}>
          {t("Roz")}
          <span style={{ color: "#008dc8" }}>{t("gaar")} </span>
        </Link>
      </Navbar.Brand>

      <LanguageSelector langtype={true} />
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
}

export default withTranslation()(navbar);
