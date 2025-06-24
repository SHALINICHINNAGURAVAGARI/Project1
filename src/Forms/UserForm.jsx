import React, { Component } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { withRouter } from '../withRouter';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      qualification: '',
      gender: '',
      showError: false
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, showError: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, qualification, gender } = this.state;
    if (!firstName || !lastName || !qualification || !gender) {
      this.setState({ showError: true });
      return;
    }
    const data = { firstName, lastName, qualification, gender };
    if (this.props.setUsers) {
      this.props.setUsers(prevUsers => [...prevUsers, data]);
    }
    this.props.navigate('/formdetails');
  };

  render() {
    const { firstName, lastName, qualification, gender, showError } = this.state;
    return (
      <Container className="mt-5 form-container">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2>Student Registration Form</h2>
            {showError && (
              <Alert variant="danger" className="mt-2 mb-2">
                The form has to be filled
              </Alert>
            )}
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                  placeholder="Enter first name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleChange}
                  placeholder="Enter last name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formQualification">
                <Form.Label>Qualification</Form.Label>
                <Form.Select
                  name="qualification"
                  value={qualification}
                  onChange={this.handleChange}
                >
                  <option value="">Select qualification</option>
                  <option value="High School">High School</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Associate Degree">Associate Degree</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Postgraduate Diploma">Postgraduate Diploma</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                  <option value="Certificate">Certificate</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <div>
                  <Form.Check
                    inline
                    label="Male"
                    name="gender"
                    type="radio"
                    id="gender-male"
                    value="Male"
                    checked={gender === 'Male'}
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="gender"
                    type="radio"
                    id="gender-female"
                    value="Female"
                    checked={gender === 'Female'}
                    onChange={this.handleChange}
                  />
                </div>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(UserForm);
