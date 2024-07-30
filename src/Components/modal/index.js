import React, { useState } from 'react';
import './style.css';
import{auth,db} from '../../Pages/Firebase'
import {doc , setDoc} from'firebase/firestore'
import { useNavigate } from 'react-router';

const Inputmodal = ({userDetail}) => {
 const [updatedUser,setUpdatedUser] = useState(userDetail);
 const [isClose,setIsClose] = useState(false);
 const navigate = useNavigate();

 // set the updatedUser Details
 function handleChange(e){
  setUpdatedUser({...updatedUser,[e.target.name]:e.target.value})
 }

 // update profile 
 async function UpdateUserProfile(){
  try{
    console.log(updatedUser)
    const Currentuser = auth.currentUser;
    await setDoc(doc(db,'users',Currentuser.uid),{
      email:updatedUser.email,
      fullName :updatedUser.fullName,
      age:updatedUser.age
    })
    alert('profile updated successfully');
    navigate('/')
    setIsClose(true);
  }catch(err){
    console.log(err.message)
  }
}

  return (
    <div className={isClose ? 'closeModal':'modal'}>
        <div className='card'>
            <h2>Update Profile</h2>
            <input type='text' placeholder='full name'  name='fullName' value={updatedUser.fullName} onChange={handleChange}/>
            <input type='text' placeholder='email' name='email' value={updatedUser.email} onChange={handleChange}/>
            <input type='number' placeholder='age' name='age' value={updatedUser.age} onChange={handleChange}/>
            <button onClick={UpdateUserProfile}>Update</button>
        </div>
      
    </div>
  )
}

export default Inputmodal
