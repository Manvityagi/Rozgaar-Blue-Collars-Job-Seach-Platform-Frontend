import React, { Component } from "react";
import Navbar from "./Sections/Navbar";
import { Container, Jumbotron, Spinner } from "react-bootstrap";
import OpportunityCard from "./Card";
import Header from "./Sections/Header";
import styles from "../../CSS/Electrician.module.css";
import axios from "axios";

class Opportunity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://pacific-taiga-02637.herokuapp.com/jobs/?CATEGORY=${this.props.category}`
      )
      .then(
        (res) => {
          const data = res.data;
          console.log(data);
          this.setState({ data });
        },
        (error) => {
          alert(error)
          console.log(error);
        }
      );
  }

  render() {
    const { data } = this.state;

    if (data.length === 0 || !data) {
      return (
        <div>
          <Navbar />
          <Header title={this.props.category} />
          <h3
            style={{
              textAlign: "center",
              marginTop: "220px",
              marginBottom: "200px",
            }}
          >
            <Spinner animation="border" className={styles.Spinner} />
            {/* No opportunities, sorry! */}
          </h3>
        </div>
      );
    }

    return (
      <div>
        <Navbar />
        <div>
          <Header title={this.props.category} />
          <Jumbotron style={{ backgroundColor: "white" }}>
            <Container className={styles.Cards}>
              {data.jobs.map((item) => {
                return <OpportunityCard key={item.id} item={item} />;
              })}
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export { Opportunity };
