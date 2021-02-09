import React, { useContext, useEffect } from "react";

import { Select, Option } from "./style";

import { languageOptions } from "../../languages/index";
import { LanguageContext } from "../Languages/index";

const LanguageSelector = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method.
  const handleLanguageChange = (e) => userLanguageChange(e.target.value);

  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem("rcml-lang");
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
    userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);

  return (
    <Select onChange={handleLanguageChange} value={userLanguage}>
      {Object.entries(languageOptions).map(([id, name]) => (
        <Option key={id} value={id}>
          {name}
        </Option>
      ))}
    </Select>
  );
};

export default LanguageSelector;
