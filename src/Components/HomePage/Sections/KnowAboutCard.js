import React from "react";
import { Card } from "react-bootstrap";
import styles from "../../../CSS/KnowAboutCard.module.css"

function KnowAbout(props) {
    return (
        <div id = "knowAbout" className = {styles.Box}>
            <Card style = {{width: "13rem", borderRadius: "20px"}}>
                <Card.Img 
                    variant = "top"
                    src = {require("../../../Assets/" + props.knowAbout.imgUrl)}
                    alt = "Image"
                    className = {styles.CardImage}
                />
                <Card.Body>
                    <div className = {styles.Title}>
                        <Card.Title 
                            className = {styles.CardTitle}> 
                            {props.knowAbout.name} 
                        </Card.Title>
                    </div>
                    <a href = {props.knowAbout.jobLink} className = {styles.Links}>
                        View Jobs
                    </a>
                    <a href = {props.knowAbout.candLink} className = {styles.Links}>
                        View Candidates
                    </a>
                </Card.Body>
            </Card>
        </div>
    );
}

export default KnowAbout;