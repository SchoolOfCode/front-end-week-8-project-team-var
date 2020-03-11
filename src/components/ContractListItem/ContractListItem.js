import React from "react";
import "./item.css";

//should render contract name indicating completion status and also include
// a button which displays the full contract data

function ContractListItem({ option }) {
  return (
    <>
      {option === undefined
        ? "fix me please"
        : option.map(function(item, i) {
            return <li className="contractlistitem">{item.contract_id}</li>;
          })}
    </>
  );
}

export default ContractListItem;
