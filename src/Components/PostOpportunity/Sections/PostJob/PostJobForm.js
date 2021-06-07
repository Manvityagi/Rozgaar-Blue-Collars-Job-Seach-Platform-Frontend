import React, { Component } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import styles from "../../../../CSS/Form.module.css";
import { withTranslation } from "react-i18next";

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
        alert("Job Posted");
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Input");
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
    const { t } = this.props;
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
            {t("Let job seekers know you need them")}
          </Form.Label>

          <Form.Group>
            <Form.Control
              className={styles.Input}
              type="text"
              name="title"
              value={title}
              placeholder={t("Your Name / Company Name")}
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
              placeholder={t("Email")}
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
              placeholder={t("Contact Number")}
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
              <option> {t("Choose Category")} </option>
              <option> {t("ELECTRICIAN")} </option>
              <option> {t("PLUMBER")} </option>
              <option> {t("MECHANIC")} </option>
              <option> {t("COOK")} </option>
              <option> {t("PEON")} </option>
              <option> {t("DRIVER")} </option>
              <option> {t("MAID")} </option>
              <option> {t("LABOUR")} </option>
              <option> {t("SECURITY GUARD")} </option>
              <option> {t("OTHERS")} </option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Control
              as="textarea"
              rows={4}
              name="description"
              value={description}
              placeholder={t("Short Description")}
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
              placeholder={t("Location")}
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
              placeholder={t("Offered Salary (Per Month)")}
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
              placeholder={t("No. of Positions")}
              style={{ marginLeft: "40px", marginTop: "30px" }}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Button className={styles.Button} type="submit">
              {t("Submit")}
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default withTranslation()(PostJobForm);
