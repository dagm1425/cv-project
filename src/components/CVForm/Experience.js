/* eslint-disable react/prop-types */
import React from "react";
import uniqid from "uniqid";

function Experience(props) {
  const { id, experienceValues, onExperienceChange } = props;
  const experience = experienceValues.filter((el) => el.id === id)[0];
  const experienceArr = Object.entries(experience);

  return (
    <section>
      {experience.submission ? (
        <div>
          {experienceArr.slice(1).map((el) => (
            <p key={uniqid()}>{el[1]}</p>
          ))}
        </div>
      ) : (
        <form>
          <input
            name="jobTitle"
            type="text"
            placeholder="Job title"
            value={experience.jobTitle}
            onChange={(e) => onExperienceChange(e, id)}
            required
          />
          <input
            name="employer"
            type="text"
            placeholder="Employer"
            value={experience.employer}
            onChange={(e) => onExperienceChange(e, id)}
            required
          />
          <input
            name="from"
            type="text"
            placeholder="From"
            value={experience.from}
            onChange={(e) => onExperienceChange(e, id)}
            // eslint-disable-next-line no-return-assign
            onFocus={(e) => (e.target.type = "date")}
          />
          <input
            name="to"
            type="text"
            placeholder="To"
            value={experience.to}
            onChange={(e) => onExperienceChange(e, id)}
            // eslint-disable-next-line no-return-assign
            onFocus={(e) => (e.target.type = "date")}
          />
          <textarea
            name="mainResponsibilities"
            type="text"
            placeholder="Main responsibilities"
            value={experience.mainResponsibilities}
            onChange={(e) => onExperienceChange(e, id)}
            rows="4"
            cols="60"
          />
        </form>
      )}
    </section>
  );
}

export default Experience;
