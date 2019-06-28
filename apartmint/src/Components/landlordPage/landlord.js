import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function landlord() {
    return (

      <div> 
      <h1>Landlord Page</h1>           
    <ul>  
    <li><Link to={"/home"}>Home</Link></li>
    </ul>
</div>

);
}
  
  export default landlord;
