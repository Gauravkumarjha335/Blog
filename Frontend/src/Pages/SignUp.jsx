import React from 'react'
import { Container, Row, Col, Alert, Spinner } from 'reactstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
// import IndexNavbar from '../Components/IndexNavbar'
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const submitdata = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };


  return (
    <>
      {/* <IndexNavbar /> */}
      <Container className='homepage' >
        <Row>
          <Col md='6' style={{ boxSizing: 'border-box', display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', height: '70vh' }} >
            <h1>Welcome</h1>
            <h2>in gaurav's blog</h2>
          </Col>
          <Col md='6' style={{ boxSizing: 'border-box', display: 'flex', flexFlow: 'column', justifyContent: 'center', height: '85vh', width: '25vw', marginLeft: '80px' }}   >

            <Form onSubmit={submitdata} >

              <Form.Label>Enter your name</Form.Label>
              <Form.Control type="text" id='username' name='username' placeholder="Enter Name" onChange={handleChange} />

              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" id='email' name='email' placeholder="Enter email" onChange={handleChange} />

              <Form.Label>Password</Form.Label>
              <Form.Control type="password" id='password' name='password' placeholder="Password" onChange={handleChange} />

              <Button variant="primary" type="submit" style={{ marginTop: '20px', width: '100%' }} disabled={loading} >
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
              <Button style={{ width: '100%', marginTop: '15px' }} >Countinue with Google</Button>

              <p style={{ marginTop: '15px' }} >Have an account? <Link to='sign-up' >Sign Up</Link></p>
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

export default SignUp
