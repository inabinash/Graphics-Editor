import React from "react";
import ReactDom from "react-dom";
//import { CSSTransition } from "react-transition-group";

import "./styles.css";
import NewPage from "./NewPage";
import App from "./App";
import { useState } from "react";
import Fetch from "./Fetch";
const Demo =() =>{

  const[loggedIn, setLoggedIn] = useState(false);

    return(
        <div>
          {loggedIn ? <App/> : <NewPage/>}
          {/* <Fetch/> */}
        </div>
    )
    
}

ReactDom.render(<Demo/>, document.getElementById("root"));
