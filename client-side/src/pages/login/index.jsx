import React, { useState } from "react";
import LoginPhoto from "./images/cover.png";
import "./login.css";
const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFirstName("");
    setPassword("");

    const data = {
      firstName: firstName,
      password: password,
    };

    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <div>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <img src={LoginPhoto} alt="" />
          <input
            type="text"
            id="firstName"
            name="firtsName"
            value={firstName}
            placeholder="Your Name"
            onChange={(event) => setFirstName(event.target.value)}
          />

          <input
            type="password"
            id="password"
            name="groupNumber"
            value={password}
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <button type="submit" className="glow-on-hover">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
