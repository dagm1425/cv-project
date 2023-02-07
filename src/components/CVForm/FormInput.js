/* eslint-disable react/prop-types */
import React from "react";
import PersonalInfoInput from "./FormSections/PersonalInfo/PersonalInfoInput";
import EducationInput from "./FormSections/Education/EducationInput";
import ExperienceInput from "./FormSections/Experience/ExperienceInput";

export default function FormInput(props) {
  const {
    personalInfoValues,
    educationValues,
    experienceValues,
    isSubmitted,
    onPersonalInfoChange,
    onEducationChange,
    onExperienceChange,
    onAddEducation,
    onAddExperience,
    onDeleteEducation,
    onDeleteExperience,
    onSubmit,
  } = props;

  return (
    <form onSubmit={onSubmit}>
      <div className="form__section">
        <h2 className="form__header">Personal Information</h2>
        <PersonalInfoInput
          personalInfoValues={personalInfoValues}
          isSubmitted={isSubmitted}
          onPersonalInfoChange={onPersonalInfoChange}
        />
      </div>
      <div className="form__section">
        <h2 className="form__header">Education</h2>
        {educationValues.map((el) => {
          return (
            <EducationInput
              key={el.id}
              id={el.id}
              educationValues={educationValues}
              isSubmitted={isSubmitted}
              onEducationChange={onEducationChange}
              onDeleteEducation={onDeleteEducation}
            />
          );
        })}
        <button
          type="button"
          className="form__btn form__btn--m form__btn--add"
          onClick={onAddEducation}
        >
          Add
        </button>
      </div>
      <div className="form__section">
        <h2 className="form__header">Work Experience</h2>
        {experienceValues.map((el) => {
          return (
            <ExperienceInput
              key={el.id}
              id={el.id}
              experienceValues={experienceValues}
              isSubmitted={isSubmitted}
              onExperienceChange={onExperienceChange}
              onDeleteExperience={onDeleteExperience}
            />
          );
        })}
        <button
          type="button"
          className="form__btn form__btn--m form__btn--add"
          onClick={onAddExperience}
        >
          Add
        </button>
      </div>
      <button
        type="submit"
        className="form__btn form__btn--l form__btn--submit"
      >
        Preview
      </button>
    </form>
  );
}
