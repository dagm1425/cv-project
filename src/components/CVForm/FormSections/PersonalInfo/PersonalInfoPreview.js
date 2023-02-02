/* eslint-disable react/prop-types */
import React from "react";
import uniqid from "uniqid";

function PersonalInfo(props) {
  const { personalInfoValues } = props;
  const personalInfo = personalInfoValues[0];
  const personalInfoArr = Object.entries(personalInfo);

  return (
    <div>
      {personalInfoArr.slice(1).map((el) => (
        <p key={uniqid()}>{el[1]}</p>
      ))}
    </div>
  );
}

export default PersonalInfo;
