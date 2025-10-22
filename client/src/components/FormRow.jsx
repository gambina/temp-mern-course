import React from "react";

const FormRow = ({ type, name, labelText, defaultValue }) => {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue || ""}
        required
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
