import React from "react";
import styles from "../../../CSS/Electrician.module.css";

function Header(props) {
  return (
    <div>
        <div className = {styles.Background}>
            <div className = {styles.Opportunity}>
              <h1> {props.title} </h1>
            </div>
        </div>
    </div>
  );
}

export default Header;