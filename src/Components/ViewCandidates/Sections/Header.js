import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../../CSS/Electrician.module.css";
import { useTranslation } from "react-i18next";

function Header(props) {
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.Background}>
        <div className={styles.Opportunity}>
          <h1> {props.title} </h1>
          <a href="/jobs/post">
            <Button className={styles.Button}>{t("Post an Opening")}</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
