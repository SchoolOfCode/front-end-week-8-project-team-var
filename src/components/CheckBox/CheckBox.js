import React from "react";

//needs to conditionally render something (i.e a box to enter a signature using
// canvas thing that vini has made)
//Ideally user can sign using this box, click submit and this should then save?

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-check">
    {" "}
    <label>
      {" "}
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />{" "}
      {label}{" "}
    </label>{" "}
  </div>
);
export default Checkbox;
