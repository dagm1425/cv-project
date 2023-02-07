/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from "react";

export default function EducationInput(props) {
  const { id, educationValues, onEducationChange, onDeleteEducation } = props;
  const education = educationValues.filter((el) => el.id === id)[0];

  return (
    <div className="form__input-group">
      <div className="form__group">
        <input
          name="nameOfDegree"
          type="text"
          placeholder=" "
          className="form__input"
          value={education.nameOfDegree}
          onChange={(e) => onEducationChange(e, id)}
          required
        />
        <label htmlFor="fullName" className="form__label">
          <span className="form__label-span">Name of degree</span>
        </label>
      </div>
      <div className="form__group">
        <input
          name="nameOfEducationalInstitution"
          type="text"
          placeholder=" "
          className="form__input"
          value={education.nameOfEducationalInstitution}
          onChange={(e) => onEducationChange(e, id)}
          required
        />
        <label htmlFor="fullName" className="form__label">
          <span className="form__label-span">
            Name of educational institution
          </span>
        </label>
      </div>

      <div className="form__date-wrapper">
        <div className="form__group form__group--half-width">
          <input
            name="from"
            type="text"
            placeholder=" "
            className="form__input"
            value={education.from}
            onChange={(e) => onEducationChange(e, id)}
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
            value={education.to}
            onChange={(e) => onEducationChange(e, id)}
            // eslint-disable-next-line no-return-assign
            onFocus={(e) => (e.target.type = "date")}
            required
          />
          <label htmlFor="to" className="form__label">
            <span className="form__label-span">To</span>
          </label>
        </div>
      </div>
      {educationValues.length > 1 && (
        <button
          type="button"
          className="form__btn form__btn--m form__btn--delete"
          onClick={() => {
            onDeleteEducation(id);
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
