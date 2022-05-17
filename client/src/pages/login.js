import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBInput,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
    >
      <MDBCard alignment="center">
        <MDBIcon fas icon="user-circle" className="fa-2x" />
        <h5>Sign In</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
            <div className="col-md-12">
              <MDBInput
                label="Email"
                type="email"
                value={email}
                name="email"
                onChange={onInputChange}
                required
                // invalid="true"
                mdbValidate="true"
                validation="Please provide your email"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Password"
                type="password"
                value={password}
                name="password"
                onChange={onInputChange}
                required
                invalid="true"
                validation="Please provide your password"
              />
            </div>
            <div className="col-12">
              <MDBBtn style={{ width: "100%" }} className="mt-2">
                Login
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/register">
            <p>Don't have an account ? Sign up</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
}

export default Login;
