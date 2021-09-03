import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Button = ({ name, btnclass, handleClick }) => {
  return (
    <button className={btnclass} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
