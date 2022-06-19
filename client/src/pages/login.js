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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { googlesignin, login } from "../redux/features/authSlice";
// import { GoogleLogin } from "react-google-login";
// import { useGoogleLogin } from "@react-oauth/google";
// import { gapi } from "gapi-script";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clientId =
    "473809259912-jmn1biob719gr7ng1ijno4rc3vka0uk7.apps.googleusercontent.com";

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  // const handleCallBackRes = (res) => {
  //   console.log(res);
  // };

  // useEffect(() => {
  // Global google
  // google?.accounts.id.initialize({
  //   client_id: clientId,
  //   callback: { handleCallBackRes },
  // });
  // const start = () => {
  //   gapi.client.init({
  //     clientId: clientId,
  //   });
  // };
  //   gapi.load("client:auth2", start);
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formValue, navigate, toast }));
    }
    // console.log(formValue);
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    // console.log(formValue);
  };
  // const onSuccess = (res) => {
  //   console.log(res);
  //   const email = res?.profileObj?.email;
  //   const name = res?.profileObj?.name;
  //   const token = res?.tokenId;
  //   const googleId = res?.googleId;
  //   const result = { email, name, token, googleId };
  //   dispatch(googlesignin({ result, navigate, toast }));
  // };
  // const onFailure = (error) => {
  //   toast.error(error);
  // };

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
                invalid="true"
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
                invalid={"true"}
                validation="Please provide your password"
              />
            </div>
            <div className="col-12">
              <MDBBtn style={{ width: "100%" }} className="mt-2">
                {loading && (
                  <MDBSpinner
                    size="sm"
                    role="status"
                    tag="span"
                    className="me-2"
                  />
                )}
                Login
              </MDBBtn>
            </div>
          </MDBValidation>
          <br />
          {/* <div id="googleSigninButton">
            <GoogleLogin
              clientId={clientId}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </div> */}
          <MDBBtn
            style={{ width: "100%" }}
            color="danger"
            onClick={() => login()}
          >
            <MDBIcon className="me-2 " fab icon="google" /> Google Sign-in
          </MDBBtn>
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
