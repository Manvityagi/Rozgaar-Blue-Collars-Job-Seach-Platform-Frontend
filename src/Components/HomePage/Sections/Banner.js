import React from "react";
import styles from "../../../CSS/Banner.module.css";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import BannerImage from "../../../Assets/banner.svg";

function Banner() {
  return (
    <Jumbotron id="home" className={styles.Jumbotron} fluid>
      <Container className={styles.Container}>
        <Row>
          <Col md={6} lg={6} className={styles.leftCol}>
            <h1 className={styles.Heading}>
              Roz
              <span style={{ color: "#008dc8" }}>gaar </span>
            </h1>
            <div className={styles.Rectangle} />
            <h2 className={styles.TagLine}>
              Join your hands together.
              <br></br>
              Not to beg, but to welcome
              <br></br>
              new opportunities!
            </h2>
            <Row>
              <Col>
                <p className={styles.SubHeading}>Employer</p>
                <p style={{ textAlign: "justify" }}>
                  <a href="#categories">See available candidates</a> or{" "}
                  <a href="/jobs/post">Post New Job</a> if you don't find any
                  suitable candidates.
                </p>
              </Col>
              <Col>
                <p className={styles.SubHeading}>Job Seeker</p>
                <p style={{ textAlign: "justify" }}>
                  <a href="/user/register">Register</a> your profile and get
                  hired or manually <a href="#categories"> apply</a> to jobs.
                </p>
              </Col>
            </Row>

            <a href="#categories">
              <button className={styles.Button}>Explore</button>
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

export default Banner;
