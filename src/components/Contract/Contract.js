import React, { useEffect, useState } from "react";

//Should retrieve contract info from the db
//Show three sign off boxes (tick box?) to indicate depts which have signed off.
//  - Finance
//  - Legal
//  - Final management sign-off
//Each department should be able to select their sign-off box, input a
//digital signature and then submit. Box should then show as complete

//Would like to be able to then fire off email to management to inform of each sign-off?

function Contract() {
  const [doc, setDoc] = useState({});

  useEffect(() => {
    fetch(`http://192.168.0.141:5000/provider`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setDoc(data[0]);
        console.log(data[0].provider_name);
      });
  }, []);

  function checkSig1() {}

  return (
    <div>
      <p>Provider Name: {doc.provider_name}</p>
      {/* <p>Contract Id {getContract.contract_id}</p>
      <p>Start Date {getContract.start_date}</p>
      <p>End Date {getContract.end_date}</p>
      <p>No. of Learners {getContract.number_of_learners}</p>
      <p>Skill Level {getContract.skill_level}</p>
      <p>Summary {getContract.summary}</p>
      <p>Complete {getContract.complete}</p>
      <p>Budget {getContract.budget}</p> */}

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
