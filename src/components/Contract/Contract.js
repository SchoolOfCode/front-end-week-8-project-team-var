import React, { useEffect, useState } from "react";
import CheckBox from "../CheckBox/CheckBox";

// import css from "./contract.css";

//Should retrieve full contract info from the db - DONE
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

  //   function checkSig1(props) {
  //     const clicked = props.clicked;
  //     if (clicked) {
  //       return <p>HELLO</p>;
  //     }
  //   }

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

      <CheckBox label="Finance Signoff" />
      <br></br>
      <CheckBox label="Legal Signoff" />
      <br></br>
      <CheckBox label="Management Signoff" />
    </div>
  );
}

export default Contract;
