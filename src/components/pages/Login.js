import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
//import {google_signin_URL} from "../../components/envConfig";
import { social } from "../socialLinks";
import "../../Assets/css/login.css";
import { useSelector, useDispatch } from "react-redux";


const Login = () => {
  const [fieldValue, setFieldValue] = useState({
    email: "",
    password: ""
  })
  const onChangeValue = (e) => {
    const {name, value } = (e.target);
    setFieldValue({...fieldValue, [name]: value})
  }

const dispatch = useDispatch();
const isAuthenticating = useSelector((state) => state);
console.log(isAuthenticating);

  const submitForm = (e) => {
    e.preventDefault();
    if(fieldValue.email === "" || fieldValue.password === ""){
      alert("fill these fields");
        }
        else{
          console.log(fieldValue,"dfghj")
          console.log(isAuthenticating);

        }
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
          value={fieldValue.email}
          onChange={onChangeValue}
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
          value={fieldValue.password}
          onChange={onChangeValue}
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

export default Login;