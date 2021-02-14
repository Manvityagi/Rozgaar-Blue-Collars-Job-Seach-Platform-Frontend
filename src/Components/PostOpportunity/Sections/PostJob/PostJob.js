import React, { Component } from "react";
import Navbar from "../Navbar";
import PostJobForm from "./PostJobForm";

class PostJob extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div
          style={{
            marginTop: "120px",
            marginLeft: "300px",
            marginRight: "300px",
          }}
        >
          <PostJobForm />
        </div>
      </div>
    );
  }
}

export default PostJob;
