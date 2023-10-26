import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { social } from "../socialLinks";
import "../../Assets/css/login.css";

const Signup = () => {
const [userName, setUserName] = useState("");
const [userEmail, setuserEmail] = useState("");
const [userPassword, setUserPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const submitSignupForm = (e) => {
e.preventdefault();
console.log(userName, userEmail, userPassword, confirmPassword);
}

    return(
        <>
        <div className="login-container">
    <Card className="login-card">
      <Card.Body>
        <h4 className="login-heading">Login</h4>
    <form>
      <Form.Floating className="mb-3" >
        <Form.Control
          name="email"
          value={userEmail}
          onChange={(e) => setuserEmail(e.target.value)}
          required
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <Form.Control
          name="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          id="floatingInputCustom"
          type="text"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          name="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <Form.Control
          name="confirmpassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      <a href="#forgotpassword" className="forgotpass-link">Forgot Password?</a>
      <Button className="Login-btn" onClick={submitSignupForm}>Signup</Button>
      </form>
      <p className="signup-options-heading">or Sign Up Using</p>
      <div className="social-signup-links">
      <a href="#facebook"><i className="bi bi-facebook" style={{color: "blue"}}></i></a>
      <a href="#twitter"><i className="bi bi-twitter"  style={{color: "blue"}}></i></a>
      <a href={social.googlesingin} target='_blank'><i className="bi bi-google" style={{color: "blue"}}></i></a>
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

export default Signup;