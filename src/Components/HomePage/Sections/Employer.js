import React, { Component } from "react";
// import EmployerCard from "./EmployerCard";
import EmployerData from "./EmployerData";
import { Container, Jumbotron, Row } from "react-bootstrap";
import styles from "../../../CSS/Procedure.module.css";
import { withTranslation } from "react-i18next";
import { Card } from "react-bootstrap";

class KnowAbout extends Component {
  constructor() {
    super();
    this.state = {
      EmployerData,
    };
  }

  render() {
    const { t } = this.props;
    // let EmployerData = this.state.EmployerData.map((data) => {
    //   return <EmployerCard key={data.id} data={data} />;
    // });

    return (
      <Jumbotron className={styles.Jumbotron}>
        <Container fluid="sm">
          <h2 className={styles.Heading}>
            {t("How we work for")}
            <span className={styles.About}> {t("Employer")} </span>?
          </h2>
          <Row
            style={{ marginTop: "50px", justifyContent: "space-evenly" }}
          >
            {/* {EmployerData} */}
            <div id="procedure" className={styles.Box}>
              <Card
                style={{
                  width: "12rem",
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
                      {t("Register Yourself")}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div id="procedure" className={styles.Box}>
              <Card
                style={{
                  width: "12rem",
                  borderRadius: "50%",
                  border: "#bd6997 solid 4px",
                  marginRight: "0px",
                  textAlign: "center"
                }}
              >
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/view.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("View Candidates")}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div id="procedure" className={styles.Box}>
              <Card
                style={{
                  width: "12rem",
                  borderRadius: "50%",
                  border: "#bd6997 solid 4px",
                  marginRight: "0px",
                  textAlign: "center"
                }}
              >
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/job.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("Post Openings")}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div id="procedure" className={styles.Box}>
              <Card
                style={{
                  width: "12rem",
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
                      {t("Get Applicants")}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div id="procedure" className={styles.Box}>
              <Card
                style={{
                  width: "12rem",
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
                  {" "}
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("Shortlist & Hire")}
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
