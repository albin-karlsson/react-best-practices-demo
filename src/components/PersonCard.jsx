import React from "react";
import { personManager } from "../services/personService";

function PersonCard({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <em>{age} years old</em>
      {personManager.determineDrivingPermission(age) ? <p>I can drive</p> : ""}
    </div>
  );
}

export default PersonCard;
