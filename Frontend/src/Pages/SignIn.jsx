import React from 'react'
import { Container, Row, Col, } from 'reactstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import IndexNavbar from '../Components/IndexNavbar'



function SignIn() {


  const [formdata, setformdata] = useState({})

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value });
  };


  const submitdata = async (e) => {
    e.preventDefault();
    try {


      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      
      console.log(data);

    } catch (error) {
      console.log("false")
    }
  };



  return (
    <>
      <IndexNavbar />
      <Container className='homepage' >
        <Row>
          <Col md='6' style={{ boxSizing: 'border-box', display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', height: '70vh' }} >
            <h1>Welcome</h1>
            <h2>in gaurav's blog</h2>
          </Col>
          <Col md='6' style={{ boxSizing: 'border-box', display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', height: '70vh' }}   >

            <Form onSubmit={submitdata} >

              <Form.Label>Enter your name</Form.Label>
              <Form.Control type="text" id='username' name='username' placeholder="Enter Name" onChange={handlechange} />

              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" id='email' name='email' placeholder="Enter email" onChange={handlechange} />

              <Form.Label>Password</Form.Label>
              <Form.Control type="password" id='password' name='password' placeholder="Password" onChange={handlechange} />

              <Button variant="primary" type="submit"  >
                Submit
              </Button>
            </Form>
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default SignIn
