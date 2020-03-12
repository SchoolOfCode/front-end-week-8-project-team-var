import React from "react";
import Signature from "../Signature/Signature";

function Checkbox({ label, isSelected, onCheckboxChange }) {
  return (
    <div className="form-check">
      {" "}
      <label>
        {" "}
        {!isSelected ? (
          <input
            type="checkbox"
            name={label}
            checked={isSelected}
            onChange={onCheckboxChange}
            className="form-check-input"
          />
        ) : (
          <>
            <div>
              <input
                type="checkbox"
                name={label}
                checked={isSelected}
                onChange={onCheckboxChange}
                className="form-check-input"
              />
              <Signature />
            </div>
          </>
        )}
        {console.log(isSelected)}
        {label}{" "}
      </label>
    </div>
  );
}

export default Checkbox;
