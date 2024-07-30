import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { auth, db } from "./Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import Inputmodal from "../Components/modal";

const ProfilePage = () => {
  const [userDetail, setUserDetail] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();

  //getting user Detail form firestore
  async function getUserDetail() {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user == null) {
        alert("You are not logged in");
        navigate("/");
      }
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetail(docSnap.data());
          console.log(docSnap.data());
        } else {
          alert("user is not logged in");
          navigate("/");
        }
      } catch (error) {
        console.log(error.message);
      }
    });
  }

  //log out functionality
  async function handleClick() {
    try {
      await auth.signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  //setting the value of state for showing the Inputmodal

  function editProfile() {
    setIsEdit(true);
  }

  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <div className="main">
      <Header />
      {userDetail ? (
        <div className="profile">
          <h2>Profile</h2>
          <p>Full Name : {userDetail.fullName}</p>
          <p>Email-Id : {userDetail.email}</p>
          <p>Age : {userDetail.age}</p>
          <div>
            <button onClick={handleClick}>log out</button>
            <button onClick={editProfile}>Edit</button>
          </div>
        </div>
      ) : (
        <h1>...Loading</h1>
      )}
      {isEdit && <Inputmodal userDetail={userDetail} />}
    </div>
  );
};

export default ProfilePage;
