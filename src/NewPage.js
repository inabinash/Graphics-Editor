import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";

function NewPage(){
    return(
        <div>
            <Router>
                <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/signup" element={<SignUp/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default NewPage;