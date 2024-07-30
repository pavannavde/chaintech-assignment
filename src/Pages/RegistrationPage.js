import React, { useState } from "react";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./Firebase";
import { doc, setDoc } from "firebase/firestore";

const RegistrationPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });
  const navigate = useNavigate();

  //set the user detail
  function handleChange(e) {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  //create new user using email and password
  async function handleClick(e) {
    e.preventDefault();
    console.log(user);
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      const Currentuser = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "users", Currentuser.uid), {
          email: user.email,
          fullName: user.name,
          age: user.age,
        });
      }
      alert("User Created Succesfully !!!");
      navigate("/");
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  }
  return (
    <div className="main">
      <Header />
      <div className="card">
        <h3>Create new account</h3>
        <input
          type="text"
          placeholder="Enter your full name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter your age"
          name="age"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your E-mail"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Register</button>
        <p>
          {" "}
          Already have an account ?,<Link to={"/"}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
