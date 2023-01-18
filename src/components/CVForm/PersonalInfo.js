/* eslint-disable react/prop-types */
import React from "react";
import uniqid from "uniqid";

function PersonalInfo(props) {
  const { personalInfoValues, onPersonalInfoChange } = props;
  const personalInfo = personalInfoValues[0];
  const personalInfoArr = Object.entries(personalInfo);

  return (
    <section>
      {personalInfo.submission ? (
        <div>
          {personalInfoArr.slice(1).map((el) => (
            <p key={uniqid()}>{el[1]}</p>
          ))}
        </div>
      ) : (
        <form>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={personalInfo.name}
            onChange={onPersonalInfoChange}
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={personalInfo.email}
            onChange={onPersonalInfoChange}
          />
          <input
            name="phoneNumber"
            type="text"
            placeholder="Phone number"
            value={personalInfo.phoneNumber}
            onChange={onPersonalInfoChange}
          />
        </form>
      )}
    </section>
  );
}

export default PersonalInfo;
