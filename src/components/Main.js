import React, { useState, useRef } from "react";
import "../styles.css";
import uniqid from "uniqid";
import { useReactToPrint } from "react-to-print";
import FormPreview from "./CVForm/FormPreview";
import FormInput from "./CVForm/FormInput";

export default function Main() {
  const [personalInfoValues, setPersonalInfoValues] = useState([
    {
      id: uniqid(),
      fullName: "",
      email: "",
      phoneNumber: "",
    },
  ]);

  const [educationValues, setEducationValues] = useState([
    {
      id: uniqid(),
      nameOfDegree: "",
      nameOfEducationalInstitution: "",
      from: "",
      to: "",
    },
  ]);

  const [experienceValues, setExperienceValues] = useState([
    {
      id: uniqid(),
      jobTitle: "",
      employer: "",
      from: "",
      to: "",
      mainResponsibilities: "",
    },
  ]);

  const [isSubmitted, setIsubmitted] = useState(false);

  const onAddEducation = () => {
    setEducationValues((prevState) => {
      return [
        ...prevState,
        {
          id: uniqid(),
          nameOfDegree: "",
          nameOfEducationalInstitution: "",
          from: "",
          to: "",
        },
      ];
    });
  };

  const onDeleteEducation = (id) => {
    setEducationValues((prevState) => {
      return prevState.filter((el) => el.id !== id);
    });
  };

  const onAddExperience = () => {
    setExperienceValues((prevState) => {
      return [
        ...prevState,
        {
          id: uniqid(),
          jobTitle: "",
          employer: "",
          from: "",
          to: "",
          mainResponsibilities: "",
        },
      ];
    });
  };

  const onDeleteExperience = (id) => {
    setExperienceValues((prevState) => {
      return prevState.filter((el) => el.id !== id);
    });
  };

  const onPersonalInfoChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    setPersonalInfoValues((prevState) => {
      return prevState.map((el) => {
        return {
          ...el,
          [name]: value,
        };
      });
    });
  };

  const onEducationChange = (e, id) => {
    const { name } = e.target;
    const { value } = e.target;

    setEducationValues((prevState) => {
      return prevState.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            [name]: value,
          };
        }
        return el;
      });
    });
  };

  const onExperienceChange = (e, id) => {
    const { name } = e.target;
    const { value } = e.target;

    setExperienceValues((prevState) => {
      return prevState.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            [name]: value,
          };
        }
        return el;
      });
    });
  };

  const onEdit = () => {
    setIsubmitted(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsubmitted(true);
  };

  const componentRef = useRef();

  // throws warning because react-to-print uses findDOMNode
  const onPrint = useReactToPrint({ content: () => componentRef.current });

  return isSubmitted ? (
    <div className="content">
      <FormPreview
        ref={componentRef}
        personalInfoValues={personalInfoValues}
        educationValues={educationValues}
        experienceValues={experienceValues}
        isSubmitted={isSubmitted}
        onDeleteEducation={onDeleteEducation}
        onDeleteExperience={onDeleteExperience}
        onEdit={onEdit}
        onPrint={onPrint}
      />
    </div>
  ) : (
    <div className="content">
      <FormInput
        personalInfoValues={personalInfoValues}
        educationValues={educationValues}
        experienceValues={experienceValues}
        isSubmitted={isSubmitted}
        onPersonalInfoChange={onPersonalInfoChange}
        onEducationChange={onEducationChange}
        onExperienceChange={onExperienceChange}
        onAddEducation={onAddEducation}
        onAddExperience={onAddExperience}
        onDeleteEducation={onDeleteEducation}
        onDeleteExperience={onDeleteExperience}
        onSubmit={onSubmit}
      />
    </div>
  );
}
