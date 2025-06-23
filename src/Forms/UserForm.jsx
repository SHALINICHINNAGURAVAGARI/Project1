import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      qualification: '',
      gender: '',
      submitted: false
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, qualification, gender } = this.state;
    const data = { firstName, lastName, qualification, gender };
    localStorage.setItem('userFormData', JSON.stringify(data));
    this.setState({ submitted: true });
  };

  render() {
    if (this.state.submitted) {
      return <Navigate to="/formdetails" />;
    }

    return (
      <div className="form-container">
        <h1>Student Registration Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-field">
            <label htmlFor="firstName"><strong>First Name: </strong></label>
            <input
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={this.state.firstName}
              onChange={this.handleChange}
              required
            />
          </div>
          <br/>
          <div className="form-field">
            <label htmlFor="lastName"><strong>Last Name: </strong></label>
            <input
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={this.state.lastName}
              onChange={this.handleChange}
              required
            />
          </div>
          <br/>

          <div className="form-field">
            <label htmlFor="qualification"><strong>Qualification: </strong></label>
            <select
              id="qualification"
              name="qualification"
              value={this.state.qualification}
              onChange={this.handleChange}
              required
            >
              <option value="">-- Select Qualification --</option>
              <option value="Bachelor">Bachelor's</option>
              <option value="Master">Master's</option>
              <option value="PhD">PhD</option>
              <option value="Secondary">Secondary Education</option>
            </select>
          </div>
          <br/>
          <div className="form-field">
            <label><strong>Gender: </strong></label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={this.state.gender === 'Male'}
                onChange={this.handleChange}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={this.state.gender === 'Female'}
                onChange={this.handleChange}
                required
              />
              Female
            </label>
          </div>
          <br/>
          <div className="form-field">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
