import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
import styles from "../../CSS/Electrician.module.css";
import Moment from "react-moment";
import { useTranslation } from "react-i18next";

function CandidateCard(props) {
  const { item } = props;
  const { t } = useTranslation();

  let itemUsername = item.username,
      itemMessage = item.messageForRecruiter,
      itemLocation = item.currentLocation;
  if(itemUsername == "Mankika Radhey") {
    itemUsername = t("Mankika Radhey");
    itemMessage = t("I am skilled at all electrical appliances");
    itemLocation = t("New Delhi");
  } else if(itemUsername == "Karan Malik") {
    itemUsername = t("Karan Malik");
    itemMessage = t("I am very hard working");
    itemLocation = t("New Delhi");
  } else if(itemUsername == "Jaskeerat Sukh") {
    itemUsername = t("Jaskeerat Sukh");
    itemMessage = t("I've 10 years of experience as a plumber");
    itemLocation = t("New Delhi");
  } else if(itemUsername == "Madan Kumar") {
    itemUsername = t("Madan Kumar");
    itemMessage = t("I've worked at a sports academy for 2 years as a plumber");
    itemLocation = t("New Delhi");
  } else if(itemUsername == "Vishal Singh") {
    itemUsername = t("Vishal Singh");
    itemMessage = t("I've previously worked at Siraj Garages");
    itemLocation = t("New Delhi");
  } else if(itemUsername == "Ramkishna") {
    itemUsername = t("Ramkishna");
    itemMessage = t("I've worked with Shiv Automobiles for an year");
    itemLocation = t("New Delhi");
  } else if(itemUsername == "Harish Kumar" || itemUsername == "हरीश कुमार" || itemUsername == "হরিশ কুমার" || itemUsername == "హరీష్ కుమార్") {
    itemUsername = t("Harish Kumar");
    itemMessage = t("I am very hard working");
    itemLocation = t("New Delhi");
  } 

  return (
    <div id="fulltime" className={styles.Box}>
      <Card style={{ width: "80rem", borderRadius: "10px" }}>
        <Card.Header
          style={{ backgroundColor: "#008dc8", borderRadius: "10px 10px 0 0" }}
        ></Card.Header>
        <Card.Body>
          <Row>
            <Card.Img
              variant="top"
              src="https://ui-avatars.com/api/?background=bd6997&color=fff&name=Roz+Gaar&font-size=0.5&rounded=true"
              // src = {item.image}
              alt={item.company}
              className={styles.CardImage}
            />
            <Col>
              <h1 className={styles.Title}>{itemUsername}</h1>
            </Col>
          </Row>
          <Row>
            <p className={styles.Description}>{itemMessage}</p>
          </Row>
          <Container>
            <Row>
              <Col md={6} lg={6}>
                <Row>
                  <h5 className={styles.Heading} style={{ marginLeft: "20px" }}>
                    {t("Current Location")}:
                  </h5>
                  <h5 className={styles.Value}>{itemLocation}</h5>
                </Row>
              </Col>

              <Col md={6} lg={6}>
                <Row>
                  <Container>
                    <h5
                      className={styles.Heading}
                      style={{ marginLeft: "4px" }}
                    >
                      {t("Date of Availability")}:
                      <span className={styles.Value}>
                        <Moment format="YYYY/MM/DD">{item.availability}</Moment>
                      </span>
                    </h5>
                  </Container>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={12}>
                <Row>
                  <Container>
                    <h5
                      className={styles.Heading}
                      style={{ marginLeft: "4px" }}
                    >
                      {t("Years of Experience")}:
                      <span className={styles.Value}>{item.YOE}</span>
                    </h5>
                  </Container>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col md={0} lg={12}>
                <Link to={item.jobURL} className={styles.shiftRight}>
                  <button
                    className={styles.Button}
                    data-active={t("Hire Me")}
                    data-hover={item.phoneNumber}
                  />
                </Link>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export { CandidateCard };
