/* eslint-disable react/prop-types */
import React from "react";

function PersonalInfo(props) {
  const { personalInfoValues, onPersonalInfoChange } = props;
  const personalInfo = personalInfoValues[0];

  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={personalInfo.name}
        onChange={onPersonalInfoChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={personalInfo.email}
        onChange={onPersonalInfoChange}
        required
      />
      <input
        name="phoneNumber"
        type="number"
        placeholder="Phone number"
        value={personalInfo.phoneNumber}
        onChange={onPersonalInfoChange}
        required
      />
    </div>
  );
}

export default PersonalInfo;
