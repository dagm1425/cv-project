/* eslint-disable react/prop-types */
import React from "react";
import uniqid from "uniqid";

export default function PersonalInfoPreview(props) {
  const { personalInfoValues } = props;
  const personalInfo = personalInfoValues[0];
  const personalInfoArr = Object.entries(personalInfo);

  return (
    <div className="preview__group">
      {personalInfoArr.slice(1).map((el) => (
        <p key={uniqid()}>{el[1]}</p>
      ))}
    </div>
  );
}
