import React from "react";

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>1{props.heading}</h2>
      </div>
      <div className="card-body">2{props.children}</div>
    </div>
  );
}

export default Card;
