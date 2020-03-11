import React from "react";

function ContractListItem({ option }) {
  return (
    <>
      <ul>
        {option === undefined
          ? "fix me please"
          : option.map(function(item, i) {
              return <li>{item.contract_id}</li>;
            })}
      </ul>
    </>
  );
}

export default ContractListItem;
