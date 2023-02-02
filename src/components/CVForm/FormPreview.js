/* eslint-disable react/prop-types */
import React from "react";
import PersonalInfoPreview from "./FormSections/PersonalInfo/PersonalInfoPreview";
import EducationPreview from "./FormSections/Education/EducationPreview";
import ExperiencePreview from "./FormSections/Experience/ExperiencePreview";

export default function FormPreview(props) {
  const {
    personalInfoValues,
    educationValues,
    experienceValues,
    isSubmitted,
    onDeleteEducation,
    onDeleteExperience,
    onEdit,
  } = props;

  return (
    <div>
      <h2>Personal Information</h2>
      <PersonalInfoPreview
        personalInfoValues={personalInfoValues}
        isSubmitted={isSubmitted}
      />
      <h2>Education</h2>
      {educationValues.map((el) => {
        return (
          <EducationPreview
            key={el.id}
            id={el.id}
            educationValues={educationValues}
            isSubmitted={isSubmitted}
            onDeleteEducation={onDeleteEducation}
          />
        );
      })}
      <h2>Work Experience</h2>
      {experienceValues.map((el) => {
        return (
          <ExperiencePreview
            key={el.id}
            id={el.id}
            experienceValues={experienceValues}
            isSubmitted={isSubmitted}
            onDeleteExperience={onDeleteExperience}
          />
        );
      })}
      <button type="button" onClick={onEdit}>
        Edit
      </button>
    </div>
  );
}
