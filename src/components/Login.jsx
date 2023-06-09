import React, { useState } from "react";

function Login() {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  function updateUsername(e) {
    // Uppdatera state för username
    const username = e.target.value;
    setUser({ ...user, username: username });
  }

  function updatePassword(e) {
    // Uppdatera state för password
    const password = e.target.value;
    setUser({ ...user, password: password });
  }

  return (
    <div>
      <input
        type="text"
        onChange={updateUsername}
      />
      <input
        type="password"
        onChange={updatePassword}
      />
      <button
        onClick={() => {
          console.log(user);
        }}
      >
        Log user to console
      </button>
    </div>
  );
}

export default Login;
