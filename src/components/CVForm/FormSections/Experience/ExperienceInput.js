/* eslint-disable react/prop-types */
import React from "react";

export default function ExperienceInput(props) {
  const { id, experienceValues, onExperienceChange } = props;
  const experience = experienceValues.filter((el) => el.id === id)[0];

  return (
    <div>
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
        required
      />
      <input
        name="to"
        type="text"
        placeholder="To"
        value={experience.to}
        onChange={(e) => onExperienceChange(e, id)}
        // eslint-disable-next-line no-return-assign
        onFocus={(e) => (e.target.type = "date")}
        required
      />
      <textarea
        name="mainResponsibilities"
        type="text"
        placeholder="Main responsibilities"
        value={experience.mainResponsibilities}
        onChange={(e) => onExperienceChange(e, id)}
        rows="4"
        cols="60"
        required
      />
    </div>
  );
}
