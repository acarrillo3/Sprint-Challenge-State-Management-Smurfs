import React from "react";

const Card = props => {
  const { smurf } = props;

  return (
    <div className="card">
      <h2>{smurf.name}</h2>
      <p>Age: {smurf.age} years old</p>
      <p>Height: {smurf.height} tall</p>
    </div>
  );
};

export default Card;
