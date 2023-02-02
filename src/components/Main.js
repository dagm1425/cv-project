import React, { Component } from "react";
import uniqid from "uniqid";
import FormPreview from "./CVForm/FormPreview";
import FormInput from "./CVForm/FormInput";

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
        },
      ],
      educationValues: [
        {
          id: uniqid(),
          nameOfDegree: "",
          nameOfEducationalInstitution: "",
          from: "",
          to: "",
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
        },
      ],
      isSubmitted: false,
    };
  }

  onAddEducation = () => {
    const { educationValues } = this.state;

    this.setState({
      educationValues: educationValues.concat({
        id: uniqid(),
        nameOfDegree: "",
        nameOfEducationalInstitution: "",
        from: "",
        to: "",
      }),
    });
  };

  onDeleteEducation = (id) => {
    const { educationValues } = this.state;

    this.setState({
      educationValues: educationValues.filter((el) => el.id !== id),
    });
  };

  onAddExperience = () => {
    const { experienceValues } = this.state;

    this.setState({
      experienceValues: experienceValues.concat({
        id: uniqid(),
        jobTitle: "",
        employer: "",
        from: "",
        to: "",
        mainResponsibilities: "",
      }),
    });
  };

  onDeleteExperience = (id) => {
    const { experienceValues } = this.state;

    this.setState({
      experienceValues: experienceValues.filter((el) => el.id !== id),
    });
  };

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

  onEdit = () => {
    this.setState({
      isSubmitted: false,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isSubmitted: true,
    });
  };

  render() {
    const {
      personalInfoValues,
      educationValues,
      experienceValues,
      isSubmitted,
    } = this.state;

    return isSubmitted ? (
      <div>
        <FormPreview
          personalInfoValues={personalInfoValues}
          educationValues={educationValues}
          experienceValues={experienceValues}
          isSubmitted={isSubmitted}
          onDeleteEducation={this.onDeleteEducation}
          onDeleteExperience={this.onDeleteExperience}
          onEdit={this.onEdit}
        />
      </div>
    ) : (
      <form onSubmit={this.onSubmit}>
        <FormInput
          personalInfoValues={personalInfoValues}
          educationValues={educationValues}
          experienceValues={experienceValues}
          isSubmitted={isSubmitted}
          onPersonalInfoChange={this.onPersonalInfoChange}
          onEducationChange={this.onEducationChange}
          onExperienceChange={this.onExperienceChange}
          onAddEducation={this.onAddEducation}
          onAddExperience={this.onAddExperience}
        />
      </form>
    );
  }
}
export default Main;
