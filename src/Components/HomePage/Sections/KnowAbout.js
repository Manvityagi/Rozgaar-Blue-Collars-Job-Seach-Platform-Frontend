import React, { Component } from "react";
// import KnowAboutCard from "./KnowAboutCard";
import KnowAboutData from "./KnowAboutData";
import { Container, Jumbotron, Row } from "react-bootstrap";
import styles from "../../../CSS/KnowAbout.module.css";
import { withTranslation } from "react-i18next";
import { Card } from "react-bootstrap";

class KnowAbout extends Component {
  constructor() {
    super();
    this.state = {
      KnowAboutData,
    };
  }

  render() {
    const { t } = this.props;
    // let KnowAboutData = this.state.KnowAboutData.map((knowAbout) => {
    //   return <KnowAboutCard key={knowAbout.id} knowAbout={knowAbout} />;
    // });

    return (
      <Jumbotron className={styles.Jumbotron}>
        <Container fluid="sm">
          <h2 id="categories" className={styles.Heading}>
            {t("Categories")}
          </h2>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "50px" }}
          >
            {/* {KnowAboutData} */}
            <div id="knowAbout" className={styles.Box}>
              <Card style={{ width: "13rem", borderRadius: "20px" }}>
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/electrician.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("Electrician")}
                    </Card.Title>
                  </div>
                  <a href="/jobs/electrician" className={styles.Links}>
                    {t("View Jobs")}
                  </a>
                  <a href="candidates/electrician" className={styles.Links}>
                    {t("View Candidates")}
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div id="knowAbout" className={styles.Box}>
              <Card style={{ width: "13rem", borderRadius: "20px" }}>
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/plumber.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("Plumber")}
                    </Card.Title>
                  </div>
                  <a href="/jobs/plumber" className={styles.Links}>
                    {t("View Jobs")}
                  </a>
                  <a href="candidates/plumber" className={styles.Links}>
                    {t("View Candidates")}
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div id="knowAbout" className={styles.Box}>
              <Card style={{ width: "13rem", borderRadius: "20px" }}>
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/mechanic.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("Mechanic")}
                    </Card.Title>
                  </div>
                  <a href="/jobs/mechanic" className={styles.Links}>
                    {t("View Jobs")}
                  </a>
                  <a href="candidates/mechanic" className={styles.Links}>
                    {t("View Candidates")}
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div id="knowAbout" className={styles.Box}>
              <Card style={{ width: "13rem", borderRadius: "20px" }}>
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/cook.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("Cook")}
                    </Card.Title>
                  </div>
                  <a href="/jobs/cook" className={styles.Links}>
                    {t("View Jobs")}
                  </a>
                  <a href="candidates/cook" className={styles.Links}>
                    {t("View Candidates")}
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div id="knowAbout" className={styles.Box}>
              <Card style={{ width: "13rem", borderRadius: "20px" }}>
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/peon.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("Peon")}
                    </Card.Title>
                  </div>
                  <a href="/jobs/peon" className={styles.Links}>
                    {t("View Jobs")}
                  </a>
                  <a href="candidates/peon" className={styles.Links}>
                    {t("View Candidates")}
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div id="knowAbout" className={styles.Box}>
              <Card style={{ width: "13rem", borderRadius: "20px" }}>
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/driver.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("Driver")}
                    </Card.Title>
                  </div>
                  <a href="/jobs/driver" className={styles.Links}>
                    {t("View Jobs")}
                  </a>
                  <a href="candidates/driver" className={styles.Links}>
                    {t("View Candidates")}
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div id="knowAbout" className={styles.Box}>
              <Card style={{ width: "13rem", borderRadius: "20px" }}>
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/maid.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("House Keeping")}
                    </Card.Title>
                  </div>
                  <a href="/jobs/maid" className={styles.Links}>
                    {t("View Jobs")}
                  </a>
                  <a href="candidates/maid" className={styles.Links}>
                    {t("View Candidates")}
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div id="knowAbout" className={styles.Box}>
              <Card style={{ width: "13rem", borderRadius: "20px" }}>
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/site.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("Construction Site Workers")}
                    </Card.Title>
                  </div>
                  <a href="/jobs/siteworkers" className={styles.Links}>
                    {t("View Jobs")}
                  </a>
                  <a href="candidates/siteworkers" className={styles.Links}>
                    {t("View Candidates")}
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div id="knowAbout" className={styles.Box}>
              <Card style={{ width: "13rem", borderRadius: "20px" }}>
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/security.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("Security Guard")}
                    </Card.Title>
                  </div>
                  <a href="/jobs/securityguard" className={styles.Links}>
                    {t("View Jobs")}
                  </a>
                  <a href="candidates/securityguard" className={styles.Links}>
                    {t("View Candidates")}
                  </a>
                </Card.Body>
              </Card>
            </div>{" "}
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default withTranslation()(KnowAbout);
