import React, { useState } from "react";
import PersonCard from "./PersonCard";

function People() {
  const [people, setPeople] = useState([
    { id: 1, name: "Mario", age: 25 },
    { id: 2, name: "Luigi", age: 23 },
  ]);

  return (
    <div>
      {people.map((p) => (
        <PersonCard
          id={p.id}
          name={p.name}
          age={p.age}
          key={p.id}
        />
      ))}
    </div>
  );
}

export default People;
