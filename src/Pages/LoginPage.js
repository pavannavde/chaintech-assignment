import React, { useState } from "react";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

const LoginPage = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  //function handel user login
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  //sign in user with email and passowrd
  async function handleClick() {
    console.log(user);
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      alert("User Logged in successfully");
      navigate("/profile");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="main">
      <Header />
      <div className="card">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Enter your E-mail"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Login</button>
        <p>
          Don't have an account ?,<Link to={"/registration"}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
