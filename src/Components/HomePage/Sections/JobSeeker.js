import React, { Component } from "react";
import JobSeekerCard from "./JobSeekerCard";
import JobSeekerData from "./JobSeekerData";
import { Container, Jumbotron, Row } from "react-bootstrap";
import styles from "../../../CSS/Procedure.module.css";

class KnowAbout extends Component {
  constructor() {
    super();
    this.state = {
      JobSeekerData,
    };
  }

  render() {
    let JobSeekerData = this.state.JobSeekerData.map((data) => {
      return <JobSeekerCard key={data.id} data={data} />;
    });

    return (
      <Jumbotron className={styles.Jumbotron}>
        <Container fluid="sm">
          <h2 id="howwework" className={styles.Heading}>
            How we work for
            <span className={styles.About}> Job Seeker </span>?
          </h2>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "50px" }}
          >
            {JobSeekerData}
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default KnowAbout;
