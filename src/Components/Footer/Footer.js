import React from "react";
import { Container, Jumbotron, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.PNG";
import styles from "../../CSS/Footer.module.css";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <Jumbotron id="contact" className={styles.Jumbotron}>
      <Container className={styles.Container}>
        <Row className={styles.Top1}>
          <Col>
            <Image className={styles.Logo} src={Logo} alt="Logo" />
          </Col>
          <Col className={styles.Column}>
            <h5 className={styles.Border}> {t("links")} </h5>
            <p> {t("Terms and Condition")} </p>
            <p> {t("Privacy Policy")} </p>
          </Col>
          <hr className={styles.line2} />
          <Col className={styles.Column}>
            <h5 className={styles.Border}> {t("Services")} </h5>
            <p> {t("Hire Blue Collars")} </p>
            <p> {t("Get Jobs")} </p>
          </Col>
          <hr className={styles.line2} />
          <Col className={styles.Column}>
            <h5 className={styles.Border}> {t("Contact Us")} </h5>
            <Row>
              <Col md={10}>
                <p>
                  {" "}
                  <FaPhoneAlt /> XXXXX-XXXXX{" "}
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={10}>
                <p>
                  {" "}
                  <GrMail /> contact@gmail.com{" "}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <Row className = {styles.Top2}>
                <Col>
                    <Image 
                        className = {styles.Logo}
                        src = {Logo}
                        alt = "Logo"
                    />
                </Col>
            </Row> */}
        <Row className={styles.Top2}>
          <Col>
            <h5 style={{ textDecoration: "underline" }}> {t("links")} </h5>
            <p> {t("Terms and Condition")} </p>
            <p> {t("Privacy Policy")} </p>
          </Col>
          <Col>
            <h5 style={{ textAlign: "end", textDecoration: "underline" }}>
              {" "}
              {t("Services")}{" "}
            </h5>
            <p style={{ textAlign: "end" }}> {t("Hire Blue Collars")} </p>
            <p style={{ textAlign: "end" }}> {t("Get Jobs")} </p>
          </Col>
        </Row>
        <Row className={styles.Top2}>
          <Col className={styles.Top3}>
            <h5 style={{ textDecoration: "underline" }}> {t("Contact Us")} </h5>
            <Row>
              <Col>
                <p>
                  {" "}
                  <FaPhoneAlt /> XXXXX-XXXXX{" "}
                </p>
              </Col>
              <Col>
                <p>
                  {" "}
                  <GrMail /> contact@gmail.com{" "}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className={styles.line1} />
        <Row className={styles.Bottom1}>
          <Col>
            <p>
              {" "}
              <BiCopyright /> 2021 Rozgaar | All rights reserved.
            </p>
          </Col>
          <Col className={styles.SocialLinks}>
            <Link to="https://www.linkedin.com/" className={styles.Shift}>
              {" "}
              <FaLinkedinIn />{" "}
            </Link>
            <Link to="https://www.instagram.com/" className={styles.Shift}>
              {" "}
              <FaInstagram />{" "}
            </Link>
            <Link to="https://twitter.com/" className={styles.Shift}>
              {" "}
              <FaTwitter />{" "}
            </Link>
          </Col>
        </Row>
        <Row className={styles.Bottom2}>
          <Col>
            <p className={styles.Para}>
              {" "}
              <BiCopyright /> 2020 Girl Code It | All rights reserved.
            </p>
          </Col>
        </Row>
        <Row className={styles.Bottom2}>
          <Col className={styles.SocialLinks}>
            <Link to="https://www.linkedin.com/" className={styles.Shift}>
              {" "}
              <FaLinkedinIn />{" "}
            </Link>
            <Link to="https://www.instagram.com/" className={styles.Shift}>
              {" "}
              <FaInstagram />{" "}
            </Link>
            <Link to="https://twitter.com/" className={styles.Shift}>
              {" "}
              <FaTwitter />{" "}
            </Link>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Footer;
