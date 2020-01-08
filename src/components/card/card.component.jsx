import React from "react";
import "./card.style.css";

export const Card = props => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&?size=150x150`}
        alt="monster"
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.website}</p>
      <p>{props.monster.email}</p>
    </div>
  );
};
