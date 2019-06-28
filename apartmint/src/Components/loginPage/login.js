import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function login() {
    return (      

      <div> 
            <h1>Login Page</h1>           
          <ul>  
          <li><Link to={"/home"}>Home</Link></li>
          </ul>
      </div>
      
    );
  }
  
  export default login;
  