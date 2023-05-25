import React, { useState } from "react";

function Login() {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  const [user, setUser] = useState[{}];

  function updateUsername(e) {
    // Uppdatera state för username

    const username = e.target.value;
    const password = user.password;

    setUser({ username: username, password: password });
  }

  function updatePassword(e) {
    // Uppdatera state för password

    const username = user.username;
    const password = e.target.value;

    setUser({ username: username, password: password });
  }

  return (
    <div>
      <input
        type="text"
        onChange={updateUsername}
      />
      <input
        type="text"
        onChange={updatePassword}
      />
    </div>
  );
}

export default Login;
