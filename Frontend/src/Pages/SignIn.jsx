import React from 'react'
import { Container, Row, Col, Alert, Spinner } from 'reactstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import IndexNavbar from '../Components/IndexNavbar'
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({})
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value.trim() });
  };

  const submitdata = async (e) => {
    e.preventDefault();
    if (!formdata.username || !formdata.email || !formdata.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata)
      });

      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate('/sign-in');
      }
      // console.log(res)
      // alert("Data Sumited")
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
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

              <Button variant="primary" type="submit" style={{ marginTop: '20px' }} disabled={loading} >
                {
                  loading ? (
                    <>
                      <Spinner size='sm' />
                      <span>Loading</span>
                    </>

                  ) : (
                    'Signup'
                  )
                }
              </Button>
            </Form>
            {
              errorMessage && (
                <Alert variant="danger" style={{ marginTop: '15px' }} >{errorMessage}</Alert>
              )
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SignIn
