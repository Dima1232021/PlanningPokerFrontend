import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  function login() {
    fetch(`http://localhost:3000/authenticate/login`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    })
      .then((valu) => valu.json())
      .then((val) => console.log(val));
  }

  function create() {
    fetch(`http://localhost:3000/authenticate/create`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
          password_confirmation,
        },
      }),
    })
      .then((valu) => valu.json())
      .then((val) => console.log(val));
  }

  function logged_in() {
    fetch(`http://localhost:3000/authenticate/logged_in`, {
      credentials: "include",
      method: "GET",
    })
      .then((valu) => valu.json())
      .then((val) => console.log(val));
  }

  function logout() {
    fetch(`http://localhost:3000/authenticate/logout`, {
      credentials: "include",
      method: "DELETE",
    })
      .then((valu) => valu.json())
      .then((val) => console.log(val));
  }

  return (
    <div className="App">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        type="text"
        value={password_confirmation}
        onChange={(e) => setPassword_confirmation(e.target.value)}
        placeholder="Password Confirmation"
      />
      <button onClick={login}>Login</button>
      <button onClick={create}>Create</button>
      <button onClick={logged_in}>Logged_in</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
