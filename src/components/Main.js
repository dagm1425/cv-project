import React, { Component } from "react";
import uniqid from "uniqid";
import PersonalInfo from "./CVForm/PersonalInfo";
import Education from "./CVForm/Education";
import Experience from "./CVForm/Experience";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfoValues: [
        {
          id: uniqid(),
          name: "",
          email: "",
          phoneNumber: "",
          submission: false,
        },
      ],
      educationValues: [
        {
          id: uniqid(),
          nameOfDegree: "",
          nameOfEducationalInstitution: "",
          from: "",
          to: "",
          submission: false,
        },
      ],
      experienceValues: [
        {
          id: uniqid(),
          jobTitle: "",
          employer: "",
          from: "",
          to: "",
          mainResponsibilities: "",
          submission: false,
        },
      ],
    };
  }

  onPersonalInfoChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const { personalInfoValues } = this.state;

    this.setState({
      personalInfoValues: personalInfoValues.map((el) => {
        return {
          ...el,
          [name]: value,
        };
      }),
    });
  };

  onEducationChange = (e, id) => {
    const { name } = e.target;
    const { value } = e.target;
    const { educationValues } = this.state;

    this.setState({
      educationValues: educationValues.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            [name]: value,
          };
        }
        return el;
      }),
    });
  };

  onExperienceChange = (e, id) => {
    const { name } = e.target;
    const { value } = e.target;
    const { experienceValues } = this.state;

    this.setState({
      experienceValues: experienceValues.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            [name]: value,
          };
        }
        return el;
      }),
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { educationValues, personalInfoValues, experienceValues } =
      this.state;

    this.setState({
      educationValues: educationValues.map((el) => {
        if (!el.submission) {
          return {
            ...el,
            submission: true,
          };
        }
        return el;
      }),

      personalInfoValues: personalInfoValues.map((el) => {
        if (!el.submission) {
          return {
            ...el,
            submission: true,
          };
        }
        return el;
      }),
      experienceValues: experienceValues.map((el) => {
        if (!el.submission) {
          return {
            ...el,
            submission: true,
          };
        }
        return el;
      }),
    });
  };

  render() {
    const { personalInfoValues, educationValues, experienceValues } =
      this.state;

    return (
      <div>
        <h2>Personal Information</h2>
        <PersonalInfo
          personalInfoValues={personalInfoValues}
          onPersonalInfoChange={this.onPersonalInfoChange}
        />
        <h2>Education</h2>
        {educationValues.map((el) => {
          return (
            <Education
              key={el.id}
              id={el.id}
              educationValues={educationValues}
              onEducationChange={this.onEducationChange}
            />
          );
        })}
        <h2>Work Experience</h2>
        {experienceValues.map((el) => {
          return (
            <Experience
              key={el.id}
              id={el.id}
              experienceValues={experienceValues}
              onExperienceChange={this.onExperienceChange}
            />
          );
        })}
        <button type="submit" onClick={this.onSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default Main;