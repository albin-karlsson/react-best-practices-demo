import React, { useState } from "react";

function LocalStorage() {
  const [name, setName] = useState("");

  function updateName(e) {
    setName(e.target.value);
  }

  function addToLocalStorage() {
    // Hämta innehållet i local storage med keyn "people"
    let people = localStorage.getItem("people");

    // Om vi inte har någonting i people...
    if (!people) {
      // Sätt people till en tom JS-array
      people = [];
    }
    // Om vi har någonting i people...
    else {
      // Konvertera innehållet i people (som är en JSON-sträng) till JS-array
      people = JSON.parse(people);
    }

    // Lägg till det nya objektet till people-array:en
    people.push({ name: name });

    // Spara hela nya people-array:en till local storage
    localStorage.setItem("people", JSON.stringify(people));
  }

  return (
    <div>
      <h1>Local Storage</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={updateName}
      />
      <div>
        <button onClick={addToLocalStorage}>Add to Local Storage</button>
      </div>
    </div>
  );
}

export default LocalStorage;
