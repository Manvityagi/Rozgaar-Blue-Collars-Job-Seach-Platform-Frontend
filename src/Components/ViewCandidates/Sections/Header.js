import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../../CSS/Electrician.module.css";

function Header(props) {
  return (
    <div>
        <div className = {styles.Background}>
            <div className = {styles.Opportunity}>
              <h1> {props.title} </h1>
              <a href = {props.link}>
                <Button className = {styles.Button}> 
                  Post an Opening 
                </Button>
              </a>
            </div>
        </div>
    </div>
  );
}

export default Header;