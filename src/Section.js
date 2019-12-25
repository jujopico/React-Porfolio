import React from "react"

const Section = ({ title, id }) =>  {
  return (
      <div className="section" id={id}>
        <h1>{title}</h1>
      </div>
  );
}

export default Section