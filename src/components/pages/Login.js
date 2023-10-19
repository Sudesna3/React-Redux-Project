import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
//import {google_signin_URL} from "../../components/envConfig";
import { social } from "../socialLinks";
import "../../Assets/css/login.css";


const Login = () => {

    return(
        <>
        <div className="login-container">
    <Card className="login-card">
      <Card.Body>
        <h4 className="login-heading">Login</h4>
      <Form.Floating className="mb-3" >
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
          required
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
          required
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      <a href="#forgotpassword" className="forgotpass-link">Forgot Password?</a>
      <Button className="Login-btn">Login</Button>
      <p className="signup-options-heading">or Sign Up Using</p>
      <div className="social-signup-links">
      <a href="#facebook"><i class="bi bi-facebook" style={{color: "blue"}}></i></a>
      <a href="#twitter"><i class="bi bi-twitter"  style={{color: "blue"}}></i></a>
      <a href={social.googlesingin} target='_blank'><i class="bi bi-google" style={{color: "blue"}}></i></a>
      </div>
      {/* <p>or Sign Up Using</p> */}
      <div className="signup-link-div">
      <a href="#signup">SIGN UP</a>
      </div>
      </Card.Body>
    </Card>
    </div>
        </>
    )
}

export default Login;