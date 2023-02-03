/* eslint-disable react/prop-types */
import React from "react";

export default function EducationInput(props) {
  const { id, educationValues, onEducationChange } = props;
  const education = educationValues.filter((el) => el.id === id)[0];

  return (
    <div>
      <input
        name="nameOfDegree"
        type="text"
        placeholder="Name of degree"
        value={education.nameOfDegree}
        onChange={(e) => onEducationChange(e, id)}
        required
      />
      <input
        name="nameOfEducationalInstitution"
        type="text"
        placeholder="Name of educational institution"
        value={education.nameOfEducationalInstitution}
        onChange={(e) => onEducationChange(e, id)}
        required
      />
      <input
        name="from"
        type="text"
        placeholder="From"
        value={education.from}
        onChange={(e) => onEducationChange(e, id)}
        // eslint-disable-next-line no-return-assign
        onFocus={(e) => (e.target.type = "date")}
        required
      />
      <input
        name="to"
        type="text"
        placeholder="To"
        value={education.to}
        onChange={(e) => onEducationChange(e, id)}
        // eslint-disable-next-line no-return-assign
        onFocus={(e) => (e.target.type = "date")}
        required
      />
    </div>
  );
}
