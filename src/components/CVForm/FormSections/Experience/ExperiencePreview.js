/* eslint-disable react/prop-types */
import React from "react";
import uniqid from "uniqid";

export default function ExperiencePreview(props) {
  const { id, experienceValues, onDeleteExperience } = props;
  const experience = experienceValues.filter((el) => el.id === id)[0];
  const experienceArr = Object.entries(experience);

  return (
    <div className="preview__group">
      {experienceArr.slice(1).map((el) => (
        <p key={uniqid()}>{el[1]}</p>
      ))}
      {experienceValues.length > 1 && (
        <button
          type="button"
          className="form__btn form__btn--s form__btn--delete"
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
