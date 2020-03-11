import React from "react";

// Should have input fields to register new provider/person/contract.
//Once one done can replicate for others.

function NewContract() {
  return (
    <div>
      <input type="text" className="NewInput" placeholder="Contract Id"></input>
    </div>
  );
}

export default NewContract;

// const entryOptions = [
//   {
//     key: "provider",
//     text: "New Provider",
//     value: "New Provider"
//   },
//   {
//     key: "person",
//     text: "New Person",
//     value: "new person"
//   },
//   {
//     key: "contract",
//     text: "New Contract",
//     value: "new contract"
//   }
// ];
