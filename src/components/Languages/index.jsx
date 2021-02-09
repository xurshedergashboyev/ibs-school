import React, { useState, createContext, useContext } from "react";

import { dictionaryList, languageOptions } from "../../languages/index";

// create the language context with default Selected language.
export const LanguageContext = createContext({
  userLanguage: "ru",
  dictionary: dictionaryList.ru,
});

// it provides the language context to app
export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState("ru");

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange(selected) {
      const newLanguage = languageOptions[selected] ? selected : "ru";
      setUserLanguage(newLanguage);
      window.localStorage.setItem("rcml-lang", newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

// get text according to id & current language.
export function Text({ tid }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
}
