import React from "react";
import database from "./data";
import ColoredRect from "./App.js";
import { useState } from "react";
import "./LoginStyle.css";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
function SignUp(){
    const[isSignedUp, setIsSignedUp] = useState(false);
    const [errorMessages, setErrorMessages] = useState({"Invalid username": "uname", "Invalid password": "pass"});
    const [username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[users, setUsers] = useState([]);

    const handleName = (event) => {
        setUsername(event.target.value);
      };
    
      const handlePassword = (event) => {
        setPassword(event.target.value);
      };

    const handleSubmit = async (event)=>{
        event.preventDefault();
        var newUser = {
            username: username,
            password: password
        }
        setUsername("");
        setPassword("");
       
        try {
          const docRef = await addDoc(collection(db, "users"), {
            ...newUser,
          });
          console.log(newUser);
          setUsers([...users, newUser]);
    
          // console.log(docRef);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        database.push(newUser);
        console.log(database);
        setIsSignedUp(true);
    }
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    const renderForm = (
    <div className="form">
    <form >
      <div className="input-container">
        <label>Username </label>
        <input
            type="text"
            value={username}
            onChange={handleName}
            className="border-2 border-sky-500"
          />
      </div>
      <div className="input-container">
        <label>Password </label>
        <input
            type="text"
            value={password}
            onChange={handlePassword}
            className="border-2 border-sky-500"
          />
      </div>
      <div className="button-container" onClick={handleSubmit}>
        <input type="submit" />
      </div>
    </form>
  </div>
);
return(
    <div className="app">
        <div className="sign-form">
        {isSignedUp? <ColoredRect/>: renderForm} 

        </div>
    </div>
);
}
export default SignUp;