import React from "react";
import styles from "../../../CSS/Navbar.module.css";
import { Navbar } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import LanguageSelector from "../../LanguageSelector/language.js";
import { HiMicrophone } from "react-icons/hi";
import SpeechRecognition from "react-speech-recognition";

function navbar({ t }) {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className={styles.NavBar}>
      <Navbar.Brand className={styles.Logo}>
        <a href="/" className={styles.Brand} style={{ fontSize: "35px" }}>
          {t("Roz")}
          <span style={{ color: "#008dc8" }}>{t("gaar")} </span>
        </a>
      </Navbar.Brand>
      {/* <LanguageSelector /> */}
      <HiMicrophone
        className={styles.microphone}
        onClick={SpeechRecognition.startListening}
      />
    </Navbar>
  );
}

export default withTranslation()(navbar);
