import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import styles from "../../CSS/Electrician.module.css";
import Moment from "react-moment";
import { useTranslation } from "react-i18next";

function CandidateCard(props) {
  const { item } = props;
  const { t } = useTranslation();
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
              <h1 className={styles.Title}>{item.username}</h1>
            </Col>
          </Row>
          <Row>
            <p className={styles.Description}>{item.messageForRecruiter}</p>
          </Row>
          <Container>
            <Row>
              <Col md={6} lg={6}>
                <Row>
                  <h5 className={styles.Heading} style={{ marginLeft: "20px" }}>
                    {t("Current Location")}:
                  </h5>
                  <h5 className={styles.Value}>{item.currentLocation}</h5>
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
                <a href={item.jobURL} className={styles.shiftRight}>
                  <button
                    className={styles.Button}
                    data-active={t("Hire Me")}
                    data-hover={item.phoneNumber}
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export { CandidateCard };
