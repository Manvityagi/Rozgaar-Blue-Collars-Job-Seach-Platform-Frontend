import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
import { BiRupee } from "react-icons/bi";
import styles from "../../CSS/Electrician.module.css";
import ApplyJob from "../ApplyJob/ApplyJob";
import { useTranslation } from "react-i18next";

const OpportunityCard = (props) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const { item } = props;

  let itemTitle = item.title,
      itemLocation = item.location;
  if(itemTitle == "Bharat Heavy Electricals Limited") {
    itemTitle = t("Bharat Heavy Electricals Limited");
    itemLocation = t("New Delhi");
  } else if(itemTitle == "Himalaya International") {
    itemTitle = t("Himalaya International");
    itemLocation = t("New Delhi");
  } else if(itemTitle == "Aashiana Apartments") {
    itemTitle = t("Aashiana Apartments");
    itemLocation = t("New Delhi");
  } else if(itemTitle == "Raj Sports Academy") {
    itemTitle = t("Raj Sports Academy");
    itemLocation = t("New Delhi");
  } else if(itemTitle == "Shiva Automobiles") {
    itemTitle = t("Shiva Automobiles");
    itemLocation = t("New Delhi");
  } else if(itemTitle == "Raj Garages") {
    itemTitle = t("Raj Garages");
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
              <h1 className={styles.Title}>{itemTitle}</h1>
            </Col>
          </Row>
          <Row>
            <p className={styles.Description}>{item.jobDescription}</p>
          </Row>
          <Container>
            <Row>
              <Col md={6} lg={6}>
                <Row>
                  <h5 className={styles.Heading} style={{ marginLeft: "20px" }}>
                    {t("Location")} :
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
                      {t("No. of Positions")} :
                      <span className={styles.Value}>
                        {item.numberOfPositions}
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
                      {t("Offered Salary")} :
                      <span className={styles.Value}>
                        <BiRupee style={{ fontSize: "1.3rem" }} />
                        {item.offeredSalary} {t("per month")}
                      </span>
                    </h5>
                  </Container>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col md={0} lg={12}>
                <Link to={item.jobURL} className={styles.shiftRight}>
                  <button className={styles.Button} onClick={togglePopup}>
                    {t("Apply")}
                  </button>
                </Link>
                {isOpen && (
                  <ApplyJob handleClose={togglePopup} jobId={item._id} />
                )}
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OpportunityCard;
