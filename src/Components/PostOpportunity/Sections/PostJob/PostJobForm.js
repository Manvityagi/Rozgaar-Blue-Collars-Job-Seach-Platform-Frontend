import React, { Component } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import styles from "../../../../CSS/Form.module.css";

class PostJobForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      recruiterEmailId: "",
      recruiterPhoneNumber: "",
      category: "",
      description: "",
      location: "",
      offeredSalary: "",
      numberOfPositions: "",
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
    const role = this.state.category;
    // console.log("From handleSubmit", this.state.category);

    axios
      .post("https://pacific-taiga-02637.herokuapp.com/jobs", {
        title: this.state.title,
        recruiterEmailId: this.state.recruiterEmailId,
        recruiterPhoneNumber: this.state.recruiterPhoneNumber,
        category: this.state.category,
        description: this.state.description,
        location: this.state.location,
        offeredSalary: this.state.offeredSalary,
        numberOfPositions: this.state.numberOfPositions,
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
      title: "",
      recruiterEmailId: "",
      recruiterPhoneNumber: "",
      category: "",
      description: "",
      location: "",
      offeredSalary: "",
      numberOfPositions: "",
    });

    setTimeout(() => {
      window.location.href = `/jobs/${role.toLowerCase()}`;
    }, 1000);
  };

  render() {
    const {
      title,
      recruiterEmailId,
      recruiterPhoneNumber,
      category,
      description,
      location,
      offeredSalary,
      numberOfPositions,
    } = this.state;

    return (
      <div style={{ marginBottom: "80px" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Label className={styles.CardTitle}>
            Let job seekers know you need them
          </Form.Label>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="title"
              value={title}
              placeholder="Your Name / Company Name"
              style={{ marginLeft: "40px", marginTop: "30px" }}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="email"
              name="recruiterEmailId"
              value={recruiterEmailId}
              placeholder="Email"
              style={{ marginLeft: "40px", marginTop: "30px" }}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="recruiterPhoneNumber"
              value={recruiterPhoneNumber}
              placeholder="Contact Number"
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
              as="textarea"
              rows={4}
              name="description"
              value={description}
              placeholder="Short Description"
              style={{ marginTop: "35px", marginLeft: "40px" }}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="location"
              value={location}
              placeholder="Location"
              style={{ marginLeft: "40px", marginTop: "30px" }}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="offeredSalary"
              value={offeredSalary}
              placeholder="Offered Salary (Per Month)"
              style={{ marginLeft: "40px", marginTop: "30px" }}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="numberOfPositions"
              value={numberOfPositions}
              placeholder="No. of Positions"
              style={{ marginLeft: "40px", marginTop: "30px" }}
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
