import React from "react";
import styles from "../../../CSS/Navbar.module.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { Link } from "react-router-dom";
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
        <Link to="/" className={styles.Brand} style={{ fontSize: "35px" }}>
          {t("Roz")}
          <span style={{ color: "#008dc8" }}>{t("gaar")} </span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.ShiftRight}>
        <Nav className="mr-auto">
          <NavDropdown
            title={<span className={styles.Title}>{t("Opportunities")}</span>}
            id="dropdown-basic-button"
            className={styles.Dropdown}
          >
            <NavDropdown.Item>
              <Nav.Link as={Link} to="/jobs/electrician">
                {t("Electrician")}
              </Nav.Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Nav.Link as={Link} to="/jobs/plumber">
                {t("Plumber")}
              </Nav.Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Nav.Link as={Link} to="/jobs/mechanic">
                {t("Mechanic")}
              </Nav.Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Nav.Link as={Link} to="/jobs/cooking">
                {t("Cook")}
              </Nav.Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Nav.Link as={Link} to="/jobs/peon">
                {t("Peon")}
              </Nav.Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Nav.Link as={Link} to="/jobs/driver">
                {t("Driver")}
              </Nav.Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Nav.Link as={Link} to="/jobs/housekeeping">
                {t("House Keeping")}
              </Nav.Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Nav.Link as={Link} to="/jobs/siteworkers">
                {t("Construction Site Worker")}
              </Nav.Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Nav.Link as={Link} to="/jobs/securityguard">
                {t("Security Guard")}
              </Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
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
