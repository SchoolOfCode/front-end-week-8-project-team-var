import React, { useEffect, useState } from "react";
// import css from "./contract.css";

//Should retrieve contract info from the db - DONE
//Show three sign off boxes (tick box?) to indicate depts which have signed off.
//  - Finance
//  - Legal
//  - Final management sign-off - DONE
//Each department should be able to select their sign-off box, input a
//digital signature and then submit. Box should then show as complete

//Would like to be able to then fire off email to management to inform of each sign-off?

function Contract() {
  const [doc, setDoc] = useState({});

  useEffect(() => {
    fetch(`http://192.168.0.141:5000/contract`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setDoc(data[0]);
      });
  }, []);

  function checkSig1() {}

  return (
    <div className="contract">
      <p>Contract Id: {doc.contract_id}</p>
      <p>Start Date: {doc.start_date}</p>
      <p>End Date: {doc.end_date}</p>
      <p>No. of Learners: {doc.number_of_learners}</p>
      <p>Skill Level: {doc.skill_level}</p>
      <p>Summary: {doc.summary}</p>
      <p>Complete: {doc.complete}</p>
      <p>Budget: {doc.budget}</p>

      <input type="checkbox" id="fsignoff" onClick={checkSig1}></input>
      <label htmlFor="fsignoff">Finance Signoff</label>
      <br></br>
      <input type="checkbox" id="lsignoff"></input>
      <label htmlFor="lsignoff">Legal Signoff</label>
      <br></br>
      <input type="checkbox" id="msignoff"></input>
      <label htmlFor="msignoff">Management Signoff</label>
    </div>
  );
}

export default Contract;
