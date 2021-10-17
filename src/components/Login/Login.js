import axios from "axios";
import React, { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(email, password);
  });

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const login = (email, password) => {
    axios.post("http://localhost:3001/users", { email, password });
  };

  return (
    <form>
      <label>
        Login:
        <input type="email" onChange={onEmailChange} value={email}></input>
      </label>
      <label>
        Password:
        <input
          type="password"
          onChange={onPasswordChange}
          value={password}
        ></input>
      </label>
    </form>
  );
};

export default Login;
