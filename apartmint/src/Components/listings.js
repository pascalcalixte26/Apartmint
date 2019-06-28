import React from "react";
import "./listings.css";

function Listing(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Location and Unit:</strong> {props.address + " " + props.unit}
          </li>
          <li>
            <strong>Beds:</strong> {props.beds}
          </li>
          <li>
            <strong>Baths:</strong> {props.baths}
          </li>
          <li>
            <strong>Price:</strong> {props.price}
          </li>
          <li>
            <strong>Agent/Property Manager:</strong> {props.landlord}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default Listing;
