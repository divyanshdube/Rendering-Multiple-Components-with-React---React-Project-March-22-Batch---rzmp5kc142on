import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <div id="main">
      <h1 attribute="data-ns-test" value="project-name">
        Net Banking Portal
      </h1>
      <p attribute="data-ns-test" value="project-description">
        This is Single Page Application made by react.
      </p>
    </div>
  );
};

export default App;
