import React from "react";
import { style } from "../services/styleService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div>
      <h1
        style={{ ...style.blueText, ...{ fontSize: 100, textAlign: "center" } }}
      >
        About page
      </h1>
      <h2 style={style.blueText}>This page is about us</h2>
      <FontAwesomeIcon
        icon={faPoo}
        bounce
        size="2xl"
        style={{ color: "#73d38b" }}
      />
    </div>
  );
}

export default About;
