import React, { useState } from "react";
import ReactDOM from "react-dom";
import ColoredRect from "./App.js";
import "./LoginStyle.css";

//Import Firebase Element
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";




function Login() {
  // React States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [users, setUsers] = useState([]);
  // User Login info
  const fetchShows = async () => {
    await getDocs(collection(db, "users")).then((querySnapshot) => {
      const newShows = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        
      }));
      console.log(newShows);
      setUsers(newShows);
      console.log(users.length);
    });
  };
  const handleName=(event)=>{
    setUsername(event.target.value);
  }
    const handlePassword=(event)=>{
        setPassword(event.target.value);
    }
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  // Handle form submit
    const handleSubmit = async (event) => {
       event.preventDefault();
       fetchShows();
       for(var i=0; i<users.length; i++){
           if(users[i].username === username && users[i].password === password){
               setIsSubmitted(true);
               break;
           }
       }
    
    }

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (

    <div className="form">
        <form>
        <div className="input-container">
            <label>Username </label>
            <input type="text"
            value={username}
            onChange={handleName}
            className="border-2 border-sky-500"
            />
        </div>
        <div className="input-container">
            <label>Password </label>
            <input type="password"
            value={password}
            onChange={handlePassword}
            className="border-2 border-sky-500"
            />

        </div>
        <div className="button-container" onClick={handleSubmit}>
            <input type="submit"/>

        </div>
        </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        
        {isSubmitted ? <div>
            <ColoredRect/>
        </div> : renderForm}
      </div>
    </div>
  );
}

export  default Login;
