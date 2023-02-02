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
  } = props;

  return (
    <div>
      <h2>Personal Information</h2>
      <PersonalInfoInput
        personalInfoValues={personalInfoValues}
        isSubmitted={isSubmitted}
        onPersonalInfoChange={onPersonalInfoChange}
      />
      <h2>Education</h2>
      {educationValues.map((el) => {
        return (
          <EducationInput
            key={el.id}
            id={el.id}
            educationValues={educationValues}
            isSubmitted={isSubmitted}
            onEducationChange={onEducationChange}
          />
        );
      })}
      <button type="button" onClick={onAddEducation}>
        Add
      </button>
      <h2>Work Experience</h2>
      {experienceValues.map((el) => {
        return (
          <ExperienceInput
            key={el.id}
            id={el.id}
            experienceValues={experienceValues}
            isSubmitted={isSubmitted}
            onExperienceChange={onExperienceChange}
          />
        );
      })}
      <button type="button" onClick={onAddExperience}>
        Add
      </button>
      <button type="submit">Submit</button>
    </div>
  );
}
