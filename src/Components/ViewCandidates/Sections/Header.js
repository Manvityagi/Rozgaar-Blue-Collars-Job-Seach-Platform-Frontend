import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from "../../../CSS/Electrician.module.css";
import { useTranslation } from "react-i18next";

function Header(props) {
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.Background}>
        <div className={styles.Opportunity}>
          <h1>
            {(() => {
              if (props.title === "ELECTRICIAN") {
                return <h1>{t("Electrician")}</h1>;
              } else if (props.title === "PLUMBER") {
                return <h1>{t("Plumber")}</h1>;
              } else if (props.title === "MECHANIC") {
                return <h1>{t("Mechanic")}</h1>;
              } else if (props.title === "COOK") {
                return <h1>{t("Cook")}</h1>;
              } else if (props.title === "PEON") {
                return <h1>{t("Peon")}</h1>;
              } else if (props.title === "MAID") {
                return <h1>{t("House Keeping")}</h1>;
              } else if (props.title === "DRIVER") {
                return <h1>{t("Driver")}</h1>;
              } else if (props.title === "LABOUR") {
                return <h1>{t("Construction Site Worker")}</h1>;
              } else if (props.title === "SECURITY GUARD") {
                return <h1>{t("Security Guard")}</h1>;
              } else {
                return <div>You are a User.</div>;
              }
            })()}
          </h1>
          <Link to="/jobs/post">
            <Button className={styles.Button}>{t("Post New Job")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
