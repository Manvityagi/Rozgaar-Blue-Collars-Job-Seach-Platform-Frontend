import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../../CSS/KnowAboutCard.module.css";
import { useTranslation } from "react-i18next";

const KnowAbout = (props) => {
  const { t } = useTranslation();
  return (
    <div id="knowAbout" className={styles.Box}>
      <Card style={{ width: "13rem", borderRadius: "20px" }}>
        <Card.Img
          variant="top"
          src={require("../../../Assets/electrician.png")}
          alt="Image"
          className={styles.CardImage}
        />
        <Card.Body>
          <div className={styles.Title}>
            <Card.Title className={styles.CardTitle}>
              {props.knowAbout.name}
            </Card.Title>
          </div>
          <Link to={props.knowAbout.jobLink} className={styles.Links}>
            {t("View Jobs")}
          </Link>
          <Link to={props.knowAbout.candLink} className={styles.Links}>
            {t("View Candidates")}
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default KnowAbout;
