import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { BiRupee } from "react-icons/bi";
import styles from "../../../../CSS/Electrician.module.css";
import ApplyJob from "../../../ApplyJob/ApplyJob";

function MechanicCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const { item } = props;

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
              <h1 className={styles.Title}>Posted by - {item.title}</h1>
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
                    Location :
                  </h5>
                  <h5 className={styles.Value}>{item.location}</h5>
                </Row>
              </Col>

              <Col md={6} lg={6}>
                <Row>
                  <Container>
                    <h5
                      className={styles.Heading}
                      style={{ marginLeft: "4px" }}
                    >
                      No. of Positions :<span className={styles.Value}>20</span>
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
                      Offered Salary :
                      <span className={styles.Value}>
                        <BiRupee style={{ fontSize: "1.3rem" }} />
                        10,000 per month
                      </span>
                    </h5>
                  </Container>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col md={0} lg={12}>
                <a href={item.jobURL} className={styles.shiftRight}>
                  <button className={styles.Button} onClick={togglePopup}>
                    Apply
                  </button>
                </a>
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
}

export default MechanicCard;
