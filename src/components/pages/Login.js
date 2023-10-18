import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const Login = () => {

    return(
        <>
        <Row>
        <Col md={{ span: 4, offset: 4 }}>
<Card style={{ width: '18rem', backgroundColor: "pink" }}>
      <Card.Body>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      </Card.Body>
    </Card>
    </Col>

    </Row>
        </>
    )
}

export default Login;