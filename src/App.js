import React, { useState } from "react";
import "./index.css";

import Header from "./components/Header";
import Search from "./components/Search";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <Header changeMode={changeMode} mode={darkMode} />
      <Search mode={darkMode} />
    </div>
  );
}
