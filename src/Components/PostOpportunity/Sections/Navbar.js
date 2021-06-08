import React from "react";
import styles from "../../../CSS/Navbar.module.css";
import { Navbar, Nav, NavDropdown, Tooltip, OverlayTrigger } from "react-bootstrap";
import { HiMicrophone } from "react-icons/hi";
import SpeechRecognition from "react-speech-recognition";
// import { AiOutlineSearch } from "react-icons/ai"
import { withTranslation } from "react-i18next";
import LanguageSelector from "../../LanguageSelector/language.js";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Click and Speak to Navigate
  </Tooltip>
);

const navbar = ({ t }) => {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className={styles.NavBar}>
      <Navbar.Brand className={styles.Logo}>
        <a href="/" className={styles.Brand} style={{ fontSize: "35px" }}>
          {t("Roz")}
          <span style={{ color: "#008dc8" }}>{t("gaar")} </span>
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.ShiftRight}>
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
        <Nav className="mr-auto">
          <NavDropdown
            title={<span className={styles.Title}>{t("Opportunities")}</span>}
            id="dropdown-basic-button"
            className={styles.Dropdown}
          >
            <NavDropdown.Item href="/jobs/electrician">
              {" "}
              {t("Electrician")}{" "}
            </NavDropdown.Item>
            <NavDropdown.Item href="/jobs/plumber">
              {" "}
              {t("Plumber")}{" "}
            </NavDropdown.Item>
            <NavDropdown.Item href="/jobs/mechanic">
              {" "}
              {t("Mechanic")}{" "}
            </NavDropdown.Item>
            <NavDropdown.Item href="/jobs/cooking">
              {t("Cook")}{" "}
            </NavDropdown.Item>
            <NavDropdown.Item href="/jobs/peon"> {t("Peon")} </NavDropdown.Item>
            <NavDropdown.Item href="/jobs/driver">
              {" "}
              {t("Driver")}{" "}
            </NavDropdown.Item>
            <NavDropdown.Item href="/jobs/housekeeping">
              {" "}
              {t("House Keeping")}{" "}
            </NavDropdown.Item>
            <NavDropdown.Item href="/jobs/siteworkers">
              {" "}
              {t("Construction Site Worker")}{" "}
            </NavDropdown.Item>
            <NavDropdown.Item href="/jobs/securityguard">
              {" "}
              {t("Security Guard")}{" "}
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/* <button className = {styles.Button}>
                Login / SignUp
            </button> */}
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
