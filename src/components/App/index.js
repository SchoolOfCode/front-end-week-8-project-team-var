import React from "react";
import css from "./App.module.css";
import ContractList from "../ContractList/ContractList";

//Dashboard Page
//Should render list of contracts, each showing completion status (e.g. 1/3, 0/3)
//  -colour coding to indicate status?
//  -Should also have button to open each contract and view data

//Should include button to create new contract

//Would also like to have functionality to search/filter by contract ID number
// and also paginate contracts rather than endless list!

function App() {
  return (
    <div className={css.container}>
      <h1>Dashboard</h1>
      <ContractList />
    </div>
  );
}

export default App;
