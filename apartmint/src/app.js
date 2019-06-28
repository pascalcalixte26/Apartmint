import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from "./components/homePage/home";
import landlord from "./components/landlordPage/landlord";
import welcome from "./components/welcomePage/welcome";
import registration from "./components/registrationPage/registration";
import login from "./components/loginPage/login";
import application from "./components/apartmentApplicationPage/apartmentApplication";
import listings from "./components/listings";
import Wrapper from "./components/wrapper";
import apartments from "./components/apartments.json";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/welcome" component={welcome} />
        <Route exact path="/home" component={home} />
        <Route exact path="/landLord" component={landlord} />
        <Route exact path="/registration" component={registration} />
        <Route exact path="/login" component={login} />
        <Route exact path="/application" component={application} />
        <Route exact path="/listing" component={listing} />

      </div>
      
    </Router>

    <div>

    <Wrapper>
      {this.state.listing.map(listing => (
        <listings
          id={listing.id}
          key={listing.id}
          location={listing.location}
          image={listing.image}
          landlord={listing.landlord}
          unit={listing.unit}
        />
      ))}
    </Wrapper>
    </div>
  );
}

export default App;