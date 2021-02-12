import React, { Component } from "react";
import Navbar from "../Navbar";
import UserProfileForm from "./UserProfileForm";

class UserProfile extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div style={{marginTop:"120px" , marginLeft:"300px", marginRight:"300px"}}>
            <UserProfileForm/>
        </div>
      </div>
    );
  }
}

export default UserProfile;
