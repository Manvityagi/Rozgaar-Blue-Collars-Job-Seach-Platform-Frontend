import React, { Component } from "react";
import EmployerCard from "./EmployerCard";
import EmployerData from "./EmployerData";
import { Container, Jumbotron, Row } from "react-bootstrap";
import styles from "../../../CSS/Procedure.module.css";

class KnowAbout extends Component {
  constructor() {
    super();
    this.state = {
      EmployerData,
    };
  }

  render() {
    let EmployerData = this.state.EmployerData.map((data) => {
      return <EmployerCard key={data.id} data={data} />;
    });

    return (
      <Jumbotron className={styles.Jumbotron}>
        <Container fluid="sm">
          <h2 className={styles.Heading}>
            How we work for
            <span className={styles.About}> Employer </span>?
          </h2>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "50px" }}
          >
            {EmployerData}
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default KnowAbout;
