import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { lang } from "moment";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState("en");

  const changeLanguage = (event) => {
    // console.log(event);
    setLanguage(event);
    i18n.changeLanguage(event);
  };

  return (
    <DropdownButton
      onSelect={changeLanguage}
      id="dropdown-basic-button"
      title="Pick Language"
    >
      <Dropdown.Item eventKey="en">English</Dropdown.Item>
      <Dropdown.Item eventKey="hn">Hindi</Dropdown.Item>
      <Dropdown.Item eventKey="bengali">Bengali</Dropdown.Item>
      <Dropdown.Item eventKey="marathi">Marathi</Dropdown.Item>
      <Dropdown.Item eventKey="telugu">Telugu</Dropdown.Item>
    </DropdownButton>
  );
};

export default LanguageSelector;
