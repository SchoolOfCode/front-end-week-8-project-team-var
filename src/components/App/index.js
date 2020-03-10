import React from "react";
import css from "./App.module.css";
import ContractList from "../ContractList/ContractList";
import NewEntry from "../NewEntry/NewEntry";

//Dashboard Page
//Should render list of contracts, each showing completion status (e.g. 1/3, 0/3)
//  -Colour coding to indicate status?
//  -Should also have button to open each contract and view data

//Should include button to create new db entries

//Would also like to have functionality to search/filter by contract ID number
// and also paginate contracts rather than endless list!

function App() {
  return (
    <div className={css.container}>
      <h1>Dashboard</h1>
      <ContractList />
      <NewEntry />
    </div>
  );
}

export default App;
