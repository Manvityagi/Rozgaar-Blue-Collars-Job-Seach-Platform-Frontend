import React, { Component } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import styles from "../../../../CSS/Form.module.css";

class PostJobForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      phoneNumber: "",
      aadharNumber: "",
      category: "",
      YOE: "",
      otherSkills: "",
      currentLocation: "",
      availability: "",
      messageForRecruiter: ""
    };
  }

  handleChange = (event) => {
    let itemValue = event.target.value;
    this.setState({
      [event.target.name]: itemValue,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("From handleSubmit", this.state.category);

    axios
      .post("https://pacific-taiga-02637.herokuapp.com/user/register", {
        username: this.state.username,
        phoneNumber: this.state.phoneNumber,
        aadharNumber: this.state.aadharNumber,
        category: this.state.category,
        YOE: this.state.YOE,
        otherSkills: this.state.otherSkills,
        currentLocation: this.state.currentLocation,
        availability: this.state.availability,
        messageForRecruiter: this.state.messageForRecruiter
      })
      .then((response) => {
        console.log(response);
        const data = response.data;
        this.setState({ data });
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      username: "",
      phoneNumber: "",
      aadharNumber: "",
      category: "",
      YOE: "",
      otherSkills: "",
      currentLocation: "",
      availability: "",
      messageForRecruiter: ""
    });

    // setTimeout(() => {
    //   window.location.href = "/";
    // }, 1000);
  };

  render() {
    const {
      username,
      phoneNumber,
      aadharNumber,
      category,
      YOE,
      otherSkills,
      currentLocation,
      availability,
      messageForRecruiter
    } = this.state;

    return (
      <div style={{ marginBottom: "80px" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Label className={styles.CardTitle}>
            Add your profile to get hired
          </Form.Label>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="username"
              value={username}
              placeholder="Username"
              style={{ marginLeft: "40px", marginTop: "30px" }}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              placeholder="Phone Number"
              style={{ marginLeft: "40px", marginTop: "30px" }}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="aadharNumber"
              value={aadharNumber}
              placeholder="Aadhar Number"
              style={{ marginLeft: "40px", marginTop: "30px" }}
              onChange={this.handleChange}
            />
          </Form.Group>          

          <Form.Group>
            <Form.Control
              as="select"
              className={styles.Input}
              name="category"
              value={category}
              defaultValue="Choose Category"
              style={{ marginTop: "30px", marginLeft: "40px" }}
              onChange={this.handleChange}
            >
              <option> Choose Category </option>
              <option> ELECTRICIAN </option>
              <option> PLUMBER </option>
              <option> MECHANIC </option>
              <option> COOK </option>
              <option> PEON </option>
              <option> DRIVER </option>
              <option> MAID </option>
              <option> LABOUR </option>
              <option> SECURITY GUARD </option>
              <option> OTHERS </option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="YOE"
              value={YOE}
              placeholder="Years of Experience"
              style={{ marginLeft: "40px", marginTop: "30px" }}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="otherSkills"
              value={otherSkills}
              placeholder="Any Other Skill?"
              style={{ marginLeft: "40px", marginTop: "30px" }}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="currentLocation"
              value={currentLocation}
              placeholder="Current Location"
              style={{ marginLeft: "40px", marginTop: "30px" }}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="availability"
              value={availability}
              placeholder="Date of Availability (YYYY/MM/DD)"
              style={{ marginLeft: "40px", marginTop: "30px" }}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              as="textarea"
              rows={4}
              name="messageForRecruiter"
              value={messageForRecruiter}
              placeholder="Anything you want to share with the recruiter..."
              style={{ marginTop: "35px", marginLeft: "40px" }}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Button className={styles.Button} type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default PostJobForm;
