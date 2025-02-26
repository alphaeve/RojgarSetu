import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  return (
    <Container className="mt-5">
      {/* Logo */}
      <div className="text-center">
        <img
          src="https://via.placeholder.com/150" // Replace with your logo URL
          alt="RojgarSetu Logo"
          className="mb-3"
          style={{ width: "120px" }}
        />
        <h2 className="text-primary">RojgarSetu Job Application</h2>
      </div>

      {/* Form */}
      <Form className="p-4 border rounded shadow bg-light">
        <Row>
          {/* Full Name */}
          <Col md={6}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>
          </Col>

          {/* Date of Birth */}
          <Col md={6}>
            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
        </Row>

        {/* Gender */}
        <Form.Group className="mt-3">
          <Form.Label>Gender</Form.Label>
          <div>
            <Form.Check inline label="Male" name="gender" type="radio" />
            <Form.Check inline label="Female" name="gender" type="radio" />
            <Form.Check inline label="Other" name="gender" type="radio" />
          </div>
        </Form.Group>

        {/* Contact Details */}
        <Row className="mt-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Form.Group>
          </Col>
        </Row>

        {/* Address */}
        <Form.Group className="mt-3">
          <Form.Label>Current Address</Form.Label>
          <Form.Control as="textarea" rows={2} placeholder="Enter your address" />
        </Form.Group>

        {/* Qualification */}
        <Form.Group className="mt-3">
          <Form.Label>Highest Qualification</Form.Label>
          <Form.Select>
            <option>Select qualification</option>
            <option>High School</option>
            <option>Diploma</option>
            <option>Bachelor's Degree</option>
            <option>Master's Degree</option>
            <option>PhD</option>
          </Form.Select>
        </Form.Group>

        {/* Languages Known */}
        <Form.Group className="mt-3">
          <Form.Label>Languages Known</Form.Label>
          <Form.Control type="text" placeholder="Enter languages (e.g. English, Hindi)" />
        </Form.Group>

        {/* Eligibility to Work */}
        <Form.Group className="mt-3">
          <Form.Label>Are you legally eligible to work?</Form.Label>
          <div>
            <Form.Check inline label="Yes" name="eligibility" type="radio" />
            <Form.Check inline label="No" name="eligibility" type="radio" />
          </div>
        </Form.Group>

        {/* Submit Button */}
        <div className="text-center mt-4">
          <Button variant="success" type="submit">
            Submit Application
          </Button>
        </div>
      </Form>
    </Container>
  );
}
