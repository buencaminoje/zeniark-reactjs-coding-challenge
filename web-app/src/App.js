import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import Questionaire from "./pages/questionaire";

import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="page">
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<Questionaire />} path="/questions" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default React.memo(App);
