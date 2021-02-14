import React, { Component } from "react";
import Navbar from "./Sections/Navbar";
import Banner from "./Sections/Banner";
import KnowAbout from "./Sections/KnowAbout";
import JobSeeker from "./Sections/JobSeeker";
import Employer from "./Sections/Employer";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <KnowAbout />
        <JobSeeker />
        <Employer />
      </div>
    );
  }
}

export default HomePage;
