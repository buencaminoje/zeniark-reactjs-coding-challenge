import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <img
        alt="Zeniark Logo"
        src={require("../images/zeniark-logo.png")}
        style={{
          height: "5em",
          display: "block",
          margin: "50px auto 0 auto",
        }}
      />
      <div className="page-title">
        <h1>Welcome to the Trivia Challenge!</h1>
      </div>
      <div className="page-body">
        <p>You will be presented with 10 True or False questions.</p>
        <div
          style={{
            color: "#fff",
            fontSize: "1.5rem",
            width: "25rem",
            height: "3rem",
            backgroundColor: "#085696",
            borderRadius: "10px",
            margin: "0 auto",
          }}
        >
          <p style={{ alignSelf: "center" }}>Can you score 10/10?</p>
        </div>
      </div>
      <div className="page-control">
        <button>
          <Link to="/questions">LET’S START!</Link>
        </button>
      </div>
    </>
  );
}
