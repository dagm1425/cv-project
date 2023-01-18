/* eslint-disable react/prop-types */
import React from "react";
import uniqid from "uniqid";

function Education(props) {
  const { id, educationValues, onEducationChange } = props;
  const education = educationValues.filter((el) => el.id === id)[0];
  const educationArr = Object.entries(education);

  return (
    <section>
      {education.submission ? (
        <div>
          {educationArr.slice(1).map((el) => (
            <p key={uniqid()}>{el[1]}</p>
          ))}
        </div>
      ) : (
        <form>
          <input
            name="nameOfDegree"
            type="text"
            placeholder="Name of degree"
            value={education.nameOfDegree}
            onChange={(e) => onEducationChange(e, id)}
          />
          <input
            name="nameOfEducationalInstitution"
            type="text"
            placeholder="Name of educational institution"
            value={education.nameOfEducationalInstitution}
            onChange={(e) => onEducationChange(e, id)}
          />
          <input
            name="from"
            type="text"
            placeholder="From"
            value={education.from}
            onChange={(e) => onEducationChange(e, id)}
            // eslint-disable-next-line no-return-assign
            onFocus={(e) => (e.target.type = "date")}
          />
          <input
            name="to"
            type="text"
            placeholder="To"
            value={education.to}
            onChange={(e) => onEducationChange(e, id)}
            // eslint-disable-next-line no-return-assign
            onFocus={(e) => (e.target.type = "date")}
          />
        </form>
      )}
    </section>
  );
}

export default Education;
