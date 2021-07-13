import React, { Component } from "react";
// import KnowAboutCard from "./KnowAboutCard";
import KnowAboutData from "./KnowAboutData";
import { Link } from "react-router-dom";

import { Col, Container, Jumbotron, Row } from "react-bootstrap";
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
            <Col id="knowAbout" className={styles.Box}>
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
                  <Link to="/jobs/electrician" className={styles.Links}>
                    {t("View Jobs")}
                  </Link>
                  <br />
                  <Link to="candidates/electrician" className={styles.Links}>
                    {t("View Candidates")}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col id="knowAbout" className={styles.Box}>
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
                  <Link to="/jobs/plumber" className={styles.Links}>
                    {t("View Jobs")}
                  </Link>
                  <br />
                  <Link to="candidates/plumber" className={styles.Links}>
                    {t("View Candidates")}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col id="knowAbout" className={styles.Box}>
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
                  <Link to="/jobs/mechanic" className={styles.Links}>
                    {t("View Jobs")}
                  </Link>
                  <br />
                  <Link to="candidates/mechanic" className={styles.Links}>
                    {t("View Candidates")}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "50px" }}
          >
            <Col id="knowAbout" className={styles.Box}>
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
                  <Link to="/jobs/cooking" className={styles.Links}>
                    {t("View Jobs")}
                  </Link>
                  <br />
                  <Link to="candidates/cooking" className={styles.Links}>
                    {t("View Candidates")}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col id="knowAbout" className={styles.Box}>
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
                  <Link to="/jobs/peon" className={styles.Links}>
                    {t("View Jobs")}
                  </Link>
                  <br />
                  <Link to="candidates/peon" className={styles.Links}>
                    {t("View Candidates")}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col id="knowAbout" className={styles.Box}>
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
                  <Link to="/jobs/driver" className={styles.Links}>
                    {t("View Jobs")}
                  </Link>
                  <br />
                  <Link to="candidates/driver" className={styles.Links}>
                    {t("View Candidates")}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "50px" }}
          >
            <Col id="knowAbout" className={styles.Box}>
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
                  <Link to="/jobs/housekeeping" className={styles.Links}>
                    {t("View Jobs")}
                  </Link>
                  <br />
                  <Link to="/candidates/housekeeping" className={styles.Links}>
                    {t("View Candidates")}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col id="knowAbout" className={styles.Box}>
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
                  <Link to="/jobs/siteworkers" className={styles.Links}>
                    {t("View Jobs")}
                  </Link>
                  <br />
                  <Link to="candidates/siteworkers" className={styles.Links}>
                    {t("View Candidates")}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col id="knowAbout" className={styles.Box}>
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
                  <Link to="/jobs/securityguard" className={styles.Links}>
                    {t("View Jobs")}
                  </Link>
                  <br />
                  <Link to="candidates/securityguard" className={styles.Links}>
                    {t("View Candidates")}
                  </Link>
                </Card.Body>
              </Card>
            </Col>{" "}
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default withTranslation()(KnowAbout);
