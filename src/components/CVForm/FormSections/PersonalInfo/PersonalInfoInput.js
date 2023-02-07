/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from "react";

export default function PersonalInfoInput(props) {
  const { personalInfoValues, onPersonalInfoChange } = props;
  const personalInfo = personalInfoValues[0];

  return (
    <div>
      <div className="form__group">
        <input
          name="fullName"
          type="text"
          placeholder=" "
          className="form__input"
          value={personalInfo.name}
          onChange={onPersonalInfoChange}
          required
        />
        <label htmlFor="fullName" className="form__label">
          <span className="form__label-span">Full Name</span>
        </label>
      </div>
      <div className="form__group">
        <input
          name="email"
          type="email"
          placeholder=" "
          className="form__input"
          value={personalInfo.email}
          onChange={onPersonalInfoChange}
          required
        />
        <label htmlFor="email" className="form__label">
          <span className="form__label-span">Email</span>
        </label>
      </div>
      <div className="form__group">
        <input
          name="phoneNumber"
          type="tel"
          placeholder=" "
          className="form__input"
          value={personalInfo.phoneNumber}
          onChange={onPersonalInfoChange}
          required
        />
        <label htmlFor="phoneNumber" className="form__label">
          <span className="form__label-span">Phone number</span>
        </label>
      </div>
    </div>
  );
}
