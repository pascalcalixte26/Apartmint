import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function application() {
    return (      

      <div> 
            <h1>application Page</h1>           
          <ul>  
          <li><Link to={"/home"}>Home</Link></li>
          </ul>
      </div>
      
    );
  }
  
  export default application;