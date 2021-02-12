import React from "react";
import { Card } from "react-bootstrap";
import styles from "../../../CSS/ProcedureCard.module.css"

function KnowAbout(props) {
    return (
        <div id = "procedure" className = {styles.Box}>
            <Card style={{ width: '12rem', borderRadius: "50%", border: "#bd6997 solid 4px", marginRight: "0px" }}>
                {/* <Card.Header style = {{background: "#bd6997"}}></Card.Header> */}
                <Card.Img 
                    variant = "top"
                    src = {require("../../../Assets/" + props.data.imgUrl)}
                    alt = "Image"
                    className = {styles.CardImage}
                />
                <Card.Body>
                    <div className = {styles.Title}>
                        <Card.Title 
                            className = {styles.CardTitle}> 
                            {props.data.process} 
                        </Card.Title>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default KnowAbout;