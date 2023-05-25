import React from "react";
import Counter from "../components/Counter";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 style={headerStyle}>Home page</h1>
      <Counter />
      <Link to="/about">
        <div>
          <p>Link</p>
          <em>This is a link to the about page</em>
        </div>
      </Link>
    </div>
  );
}

const headerStyle = {
  fontSize: 50,
  color: "red",
  textAlign: "center",
};

export default Home;
