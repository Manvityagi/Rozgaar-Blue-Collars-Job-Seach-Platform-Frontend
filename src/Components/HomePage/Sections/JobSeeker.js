import React, { Component } from "react";
// import JobSeekerCard from "./JobSeekerCard";
import JobSeekerData from "./JobSeekerData";
import { Container, Jumbotron, Row } from "react-bootstrap";
import styles from "../../../CSS/Procedure.module.css";
import { withTranslation } from "react-i18next";
import { Card } from "react-bootstrap";

class KnowAbout extends Component {
  constructor() {
    super();
    this.state = {
      JobSeekerData,
    };
  }

  render() {
    const { t } = this.props;
    // let JobSeekerData = this.state.JobSeekerData.map((data) => {
    //   return <JobSeekerCard key={data.id} data={data} />;
    // });

    return (
      <Jumbotron className={styles.Jumbotron}>
        <Container fluid="sm">
          <h2 id="howwework" className={styles.Heading}>
            {t("How we work for")}
            <span className={styles.About}> {t("Job Seeker")} </span>?
          </h2>
          <Row
            style={{ marginTop: "50px", justifyContent: "space-evenly" }}
          >
            {/* {JobSeekerData} */}
            <div id="procedure" className={styles.Box}>
              <Card
                style={{
                  width: "10.5rem",
                  borderRadius: "50%",
                  border: "#bd6997 solid 4px",
                  marginRight: "0px",
                  textAlign: "center"
                }}
              >
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/user.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("Register")}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div id="procedure" className={styles.Box}>
              <Card
                style={{
                  width: "10.5rem",
                  borderRadius: "50%",
                  border: "#bd6997 solid 4px",
                  marginRight: "0px",
                  textAlign: "center"
                }}
              >
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/search.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("View Jobs")}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div id="procedure" className={styles.Box}>
              <Card
                style={{
                  width: "10.5rem",
                  borderRadius: "50%",
                  border: "#bd6997 solid 4px",
                  marginRight: "0px",
                  textAlign: "center"
                }}
              >
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/check.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("Apply")}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div id="procedure" className={styles.Box}>
              <Card
                style={{
                  width: "10.5rem",
                  borderRadius: "50%",
                  border: "#bd6997 solid 4px",
                  marginRight: "0px",
                  textAlign: "center"
                }}
              >
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/thumb.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("Get Hired")}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default withTranslation()(KnowAbout);
