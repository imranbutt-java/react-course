import React from "react";

// Using destructing we got the below interface
// { name, label, value, onChange }
const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        //It would tightly couple the value with the state field and on typing in field
        //nothing would change
        value={value}
        // So need to bind onChange event
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
