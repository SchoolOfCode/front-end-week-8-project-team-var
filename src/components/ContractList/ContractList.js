import React from "react";
import Contract from "../Contract/Contract";
// import css from "./contractlist.css";

//Should render a list of contracts pulled from the DB.
//Should also indicate level of completion
//(e.g. 0/3, 2/3 depending on how many depts have signed off)
//Colour code as well?
//Should also include button to open contract details.

function ContractList() {
  return (
    <div>
      <div>
        <Contract />
      </div>
    </div>
  );
}

export default ContractList;
