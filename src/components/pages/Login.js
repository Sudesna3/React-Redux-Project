import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
//import {google_signin_URL} from "../../components/envConfig";
import { social } from "../socialLinks";
import "../../Assets/css/login.css";
import { useSelector, useDispatch } from "react-redux";
import {requestLoginApi, successLoginApi, failedtLoginApi} from "../../redux/actions/loginActions";
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userdata = {email, password};
const dispatch = useDispatch();


const isAuthenticating = useSelector((state) => state.auth);
//console.log(isAuthenticating);

  const submitForm = (e) => {
    e.preventDefault();
    //dispatch(requestLoginApi());
    if(email === "" || password === ""){
        alert("fill these fields");
        }
        else{
          //console.log(isAuthenticating);
          //dispatch(successLoginApi(userdata));
          dispatch(successLoginApi(email,password));
          console.log(dispatch(successLoginApi(userdata)));
        }
  }

 
    return(
        <>
    <div className="login-container">
      <Card className="login-card">
      <Card.Body>
        <h4 className="login-heading">Login</h4>
    <form>
      <Form.Floating className="mb-3">
        <Form.Control
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      <a href="#forgotpassword" className="forgotpass-link">Forgot Password?</a>
      <Button className="Login-btn" onClick={submitForm}>Login</Button>
      </form>
      <p className="signup-options-heading">or Sign Up Using</p>
      {/* <div className="social-signup-links">
      <a href="#facebook"><i className="bi bi-facebook" style={{color: "blue"}}></i></a>
      <a href="#twitter"><i className="bi bi-twitter"  style={{color: "blue"}}></i></a>
      <a href={social.googlesingin} target='_blank'><i className="bi bi-google" style={{color: "blue"}}></i></a>
      </div> */}
      {/* <p>or Sign Up Using</p> */}
      <div className="signup-link-div">
      <Link to="/signup">SIGN UP</Link>
      </div>
      </Card.Body>
    </Card>
    </div>
        </>
    )
}

export default Login;