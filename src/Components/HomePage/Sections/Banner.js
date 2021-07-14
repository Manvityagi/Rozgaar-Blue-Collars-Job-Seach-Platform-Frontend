import React from "react";
import styles from "../../../CSS/Banner.module.css";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImage from "../../../Assets/banner.svg";
import { withTranslation } from "react-i18next";

function Banner({ t }) {
  return (
    <Jumbotron id="home" className={styles.Jumbotron} fluid>
      <Container className={styles.Container}>
        <Row>
          <Col md={6} lg={6} className={styles.leftCol}>
            <h1 className={styles.Heading}>
              {t("Roz")}
              <span style={{ color: "#008dc8" }}>{t("gaar")} </span>
            </h1>
            <div className={styles.Rectangle} />
            <h2 className={styles.TagLine}>
              {t("Join your hands together.")}
              <br></br>
              {t("Not to beg, but to welcome")}
              <br></br>
              {t("new opportunities!")}
            </h2>
            <Row>
              <Col>
                <p className={styles.SubHeading}>{t("Employer")}</p>
                <p style={{ textAlign: "justify" }}>
                  <a href="#categories">{t("See available candidates")}</a>{" "}
                  {t("or")} <Link to="/jobs/post">{t("Post New Job")}</Link>{" "}
                  {t("if you don't find any")}
                  {t("suitable candidates")}
                </p>
              </Col>
              <Col>
                <p className={styles.SubHeading}>{t("Job Seeker")}</p>
                <p style={{ textAlign: "justify" }}>
                  <Link to="/user/register">{t("Register")}</Link>{" "}
                  {t("your profile and get hired or manually")}{" "}
                  <a href="#categories"> {t("apply")}</a> {t("to jobs.")}
                </p>
              </Col>
            </Row>

            <a href="#categories">
              <button className={styles.Button}>{t("Explore")}</button>
            </a>
          </Col>
          <Col md={6} lg={6} className={styles.rightCol}>
            <Image
              className={styles.BannerImage}
              src={BannerImage}
              alt="BannerImage"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default withTranslation()(Banner);
