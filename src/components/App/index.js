import React, { useState } from "react";
import css from "./App.module.css";
import SearchBar from "../Search/SearchBar";
import AutoComplete from "../AutoComplete/AutoComplete";
import NewContract from "../NewContract/NewContract";
import ContractListItem from "../ContractListItem/ContractListItem";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../../components/West-Midlands-CA.png";
import ContractList from "../ContractList/ContractList";
import Contract from "../Contract/Contract";

//Dashboard Page
//Should render list of contracts, each showing completion status (e.g. 1/3, 0/3)
//  -Colour coding to indicate status?
//  -Should also have button to open each contract and view data

//Should include button to create new db entries

//Would also like to have functionality to search/filter by contract ID number
// and also paginate contracts rather than endless list!

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [option, setOption] = useState([]);

  return (
    <div className={css.container}>
      <img src={logo} alt={"logo"} className={css.logo} />
      <h1>Dashboard</h1>
      <br></br>

      <Router>
        <Switch>
          <Route path="/ContractList">
            <ContractList />
          </Route>
          <Route path="/Contract">
            <Contract />
          </Route>
          <Route path="/NewContract">
            <NewContract />
          </Route>
          {/* <Route path="/NewPerson">
            <NewPerson />
          </Route>*/}
        </Switch>
      </Router>
      <AutoComplete
        searchTerm={searchTerm}
        option={option}
        setOption={setOption}
      />
      <ContractListItem option={option} setOption={setOption} />
    </div>
  );
}

export default App;
