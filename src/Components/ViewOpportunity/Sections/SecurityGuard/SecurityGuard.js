import React, { Component } from "react";
import Navbar from "../Navbar";
import { Container, Jumbotron, Spinner } from "react-bootstrap";
import SecurityGuardCard from "./SecurityGuardCard";
import Header from "../Header";
import styles from "../../../../CSS/Electrician.module.css";
import axios from "axios";

class SecurityGuard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://pacific-taiga-02637.herokuapp.com/jobs/?CATEGORY=SECURITY GUARD"
      )
      .then(
        (res) => {
          const data = res.data;
          console.log(data);
          this.setState({ data });
        },
        (error) => {
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
          <Header title="Security Guard"/>
          <h3
            style={{
              textAlign: "center",
              marginTop: "220px",
              marginBottom: "200px",
            }}
          >
            <Spinner animation="border" className = {styles.Spinner}/>
            {/* No opportunities, sorry! */}
          </h3>
        </div>
      );
    }

    return (
      <div>
        <Navbar />
        <div>
          <Header title="Security Guard"/>
          <Jumbotron style={{ backgroundColor: "white" }}>
            <Container className={styles.Cards}>
              {data.jobs.map((item) => {
                return <SecurityGuardCard key={item.id} item={item} />;
              })}
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default SecurityGuard;
