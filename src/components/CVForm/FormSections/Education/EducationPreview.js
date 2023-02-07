/* eslint-disable react/prop-types */
import React from "react";
import uniqid from "uniqid";

export default function EducationPreview(props) {
  const { id, educationValues, onDeleteEducation } = props;
  const education = educationValues.filter((el) => el.id === id)[0];
  const educationArr = Object.entries(education);

  return (
    <div className="preview__group">
      {educationArr.slice(1).map((el) => (
        <p key={uniqid()}>{el[1]}</p>
      ))}

      {educationValues.length > 1 && (
        <button
          type="button"
          className="form__btn form__btn--s form__btn--delete"
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
