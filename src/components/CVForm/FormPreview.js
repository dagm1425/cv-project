/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import PersonalInfoPreview from "./FormSections/PersonalInfo/PersonalInfoPreview";
import EducationPreview from "./FormSections/Education/EducationPreview";
import ExperiencePreview from "./FormSections/Experience/ExperiencePreview";

export default class FormPreview extends Component {
  render() {
    const {
      personalInfoValues,
      educationValues,
      experienceValues,
      isSubmitted,
      onDeleteEducation,
      onDeleteExperience,
      onEdit,
      onPrint,
    } = this.props;

    return (
      <div>
        <div className="form__section">
          <h2 className="form__header">Personal Information</h2>
          <PersonalInfoPreview
            personalInfoValues={personalInfoValues}
            isSubmitted={isSubmitted}
          />
        </div>
        <div className="form__section">
          <h2 className="form__header">Education</h2>
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
        </div>
        <div className="form__section">
          <h2 className="form__header">Work Experience</h2>
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
        </div>
        <button
          className="form__btn form__btn--l"
          type="button"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="form__btn form__btn--l form__btn--print"
          type="button"
          onClick={onPrint}
        >
          Print
        </button>
      </div>
    );
  }
}
