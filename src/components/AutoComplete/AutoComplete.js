import React, { useEffect } from "react";
import ContractList from "../ContractList/ContractList";

function AutoComplete({ searchTerm, handleSelect, option, setOption }) {
  useEffect(() => {
    fetch(`http://192.168.0.141/5000/contract`)
      .then(response => response.json())
      .then(data => {
        console.log({ data });
        setOption(data);
      });
  }, [searchTerm]);
  return (
    <div>{<ContractList option={option} handleSelect={handleSelect} />}</div>
  );
}

export default AutoComplete;
