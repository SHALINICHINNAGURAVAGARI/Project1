import React, { Component } from 'react';

class FormDetails extends Component {
  constructor(props) {
    super(props);
    const data = JSON.parse(localStorage.getItem('userFormData'));
    this.state = {
      data,
      editMode: false
    };
  }

  handleEdit = () => {
    this.setState({ editMode: true });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prev => ({
      data: {
        ...prev.data,
        [name]: value
      }
    }));
  };

  handleSave = () => {
    localStorage.setItem('userFormData', JSON.stringify(this.state.data));
    alert('Updated successfully!');
    this.setState({ editMode: false });
  };

  handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this?');
    if (confirmDelete) {
      localStorage.removeItem('userFormData');
      this.setState({ data: null });
    }
  };

  render() {
    const { data, editMode } = this.state;

    if (!data) return <h3>No Data Found!</h3>;

    return (
      <div>
        <h2>User Submitted Data Successfully</h2>

        {editMode ? (
          <div>
            <input name="firstName" value={data.firstName} onChange={this.handleChange} /><br />
            <input name="lastName" value={data.lastName} onChange={this.handleChange} /><br />
            <select name="qualification" value={data.qualification} onChange={this.handleChange}>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
              <option value="PhD">Secondary Education</option>
            </select><br />
            <input name="gender" value={data.gender} onChange={this.handleChange} /><br />
            <button onClick={this.handleSave}>Save</button>
          </div>
        ) : (
          <div>
            <p><strong>First Name:</strong> {data.firstName}</p>
            <p><strong>Last Name:</strong> {data.lastName}</p>
            <p><strong>Qualification:</strong> {data.qualification}</p>
            <p><strong>Gender:</strong> {data.gender}</p>
            <button onClick={this.handleEdit}>Edit</button>&nbsp;
            <button onClick={this.handleDelete}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}

export default FormDetails;
