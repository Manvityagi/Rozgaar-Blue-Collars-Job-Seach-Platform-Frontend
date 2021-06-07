<div id="knowAbout" className={styles.Box}>
<Card style={{ width: "13rem", borderRadius: "20px" }}>
  <Card.Img
    variant="top"
    src={require("../../../Assets/securityguard.png")}
    alt="Image"
    className={styles.CardImage}
  />
  <Card.Body>
    <div className={styles.Title}>
      <Card.Title className={styles.CardTitle}>
        {t("Security Guard")}
      </Card.Title>
    </div>
    <a href="/jobs/securityguard" className={styles.Links}>
      {t("View Jobs")}
    </a>
    <a href="candidates/securityguard" className={styles.Links}>
      {t("View Candidates")}
    </a>
  </Card.Body>
</Card>
</div>