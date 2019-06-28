import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from "./components/homePage/home";
import landlord from "./components/landlordPage/landlord";
import welcome from "./components/welcomePage/welcome";
import registration from "./components/registrationPage/registration";
import login from "./components/loginPage/login";
import application from "./components/apartmentApplicationPage/apartmentApplication";



function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={welcome} />
        <Route exact path="/home" component={home} />
        <Route exact path="/landLord" component={landlord} />
        <Route exact path="/registration" component={registration} />
        <Route exact path="/login" component={login} />
        <Route exact path="/application" component={application} />
      

      </div>
      
    </Router>


  );
}

export default App;