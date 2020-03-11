import React, { useEffect, useState } from "react";
import SearchBar from "../Search/SearchBar";

//Should render a list of contract list items pulled from the DB. - Dooonnnee??

function ContractList() {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`http://192.168.0.141:5000/contract`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setList(data);
      });
  }, []);

  function handleChange(value) {
    setSearchTerm(value);
  }

  return (
    <div>
      <SearchBar handleChange={handleChange} />
      <ul>
        {list
          .filter(function(contract) {
            return contract.summary
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          })
          .map(function(contract) {
            return <li>{contract.summary}</li>;
          })}
      </ul>
    </div>
  );
}

export default ContractList;
