/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from "react";

export default function ExperienceInput(props) {
  const { id, experienceValues, onExperienceChange, onDeleteExperience } =
    props;
  const experience = experienceValues.filter((el) => el.id === id)[0];

  return (
    <div className="form__input-group">
      <div className="form__group">
        <input
          name="jobTitle"
          type="text"
          placeholder=" "
          className="form__input"
          value={experience.jobTitle}
          onChange={(e) => onExperienceChange(e, id)}
          required
        />
        <label htmlFor="jobTitle" className="form__label">
          <span className="form__label-span">Job title</span>
        </label>
      </div>

      <div className="form__group">
        <input
          name="employer"
          type="text"
          placeholder=" "
          className="form__input"
          value={experience.employer}
          onChange={(e) => onExperienceChange(e, id)}
          required
        />
        <label htmlFor="employer" className="form__label">
          <span className="form__label-span">Employer</span>
        </label>
      </div>

      <div className="form__date-wrapper">
        <div className="form__group form__group--half-width">
          <input
            name="from"
            type="text"
            placeholder=" "
            className="form__input"
            value={experience.from}
            onChange={(e) => onExperienceChange(e, id)}
            // eslint-disable-next-line no-return-assign
            onFocus={(e) => (e.target.type = "date")}
            required
          />
          <label htmlFor="from" className="form__label">
            <span className="form__label-span">From</span>
          </label>
        </div>
        <div className="form__group form__group--half-width">
          <input
            name="to"
            type="text"
            placeholder=" "
            className="form__input form__input--half-width"
            value={experience.to}
            onChange={(e) => onExperienceChange(e, id)}
            // eslint-disable-next-line no-return-assign
            onFocus={(e) => (e.target.type = "date")}
            required
          />
          <label htmlFor="to" className="form__label">
            <span className="form__label-span">To</span>
          </label>
        </div>
      </div>

      <div className="form__group form__group--exp-height">
        <textarea
          name="mainResponsibilities"
          type="text"
          placeholder=" "
          className="form__input"
          value={experience.mainResponsibilities}
          onChange={(e) => onExperienceChange(e, id)}
          rows="4"
          required
        />
        <label htmlFor="mainResponsibilities" className="form__label">
          <span className="form__label-span form__label-span-textarea">
            Main responsibilities
          </span>
        </label>
      </div>

      {experienceValues.length > 1 && (
        <button
          type="button"
          className="form__btn form__btn--m form__btn--delete"
          onClick={() => {
            onDeleteExperience(id);
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
