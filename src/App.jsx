import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { database } from "./firebaseconfig"; 
import { ref, push } from "firebase/database";

const App = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phoneNumber: "",
    address: "",
    qualification: "",
    languagesKnown: "",
    eligibility: "",
  });

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      alert("Please fill out required fields!");
      return;
    }

    const formsRef = ref(database, "forms"); // Database reference
    push(formsRef, formData)
      .then(() => {
        alert("Form submitted successfully!");
        setFormData({
          fullName: "",
          dateOfBirth: "",
          gender: "",
          email: "",
          phoneNumber: "",
          address: "",
          qualification: "",
          languagesKnown: "",
          eligibility: "",
        }); // Reset form after submission
      })
      .catch((error) => alert("Error submitting form: " + error.message));
  };

  return (
    <Container className="mt-5">
      <Form className="p-4 border rounded shadow bg-light" onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mt-3">
          <Form.Label>Gender</Form.Label>
          <div>
            <Form.Check
              inline
              label="Male"
              name="gender"
              type="radio"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="Female"
              name="gender"
              type="radio"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="Other"
              name="gender"
              type="radio"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <Row className="mt-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mt-3">
          <Form.Label>Current Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Highest Qualification</Form.Label>
          <Form.Select name="qualification" value={formData.qualification} onChange={handleChange}>
            <option value="">Select qualification</option>
            <option value="High School">High School</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="PhD">PhD</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Languages Known</Form.Label>
          <Form.Control
            type="text"
            name="languagesKnown"
            placeholder="Enter languages (e.g. English, Hindi)"
            value={formData.languagesKnown}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Are you legally eligible to work?</Form.Label>
          <div>
            <Form.Check
              inline
              label="Yes"
              name="eligibility"
              type="radio"
              value="Yes"
              checked={formData.eligibility === "Yes"}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="No"
              name="eligibility"
              type="radio"
              value="No"
              checked={formData.eligibility === "No"}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <div className="text-center mt-4">
          <Button variant="success" type="submit">
            Submit Application
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default App;
