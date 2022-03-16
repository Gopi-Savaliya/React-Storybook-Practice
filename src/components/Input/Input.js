import React from "react";
import "./Input.css";

export const Input = (props) => {
  const { size = "medium", ...rest } = props;
  return (
    <input className={`input ${size}`} {...rest} >
    </input>
  );
};
