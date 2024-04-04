// import React from 'react'
import { Container, Row, Col, Alert, Spinner } from 'reactstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInFailure, signInSuccess } from '../Redux/User/Userslice';

export default function SignIn() {
  // const [loading, setLoading] = useState(false);
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };


  return (
    <>
      {/* <IndexNavbar /> */}
      <Container className='homepage' >
        <Row>
          <Col md='6' style={{ boxSizing: 'border-box', display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', height: '70vh' }} >
            <h1>Welcome</h1>
            <h2>in gaurav&lsquo;s blog</h2>
          </Col>
          <Col md='6' style={{ boxSizing: 'border-box', display: 'flex', flexFlow: 'column', justifyContent: 'center', height: '85vh', width: '25vw', marginLeft: '80px' }}   >

            <Form onSubmit={handleSubmit} >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" id='email' name='email' placeholder="Enter email" onChange={handleChange} />

              <Form.Label>Password</Form.Label>
              <Form.Control type="password" id='password' name='password' placeholder="Password" onChange={handleChange} />

              <Button variant="primary" type="submit" style={{ marginTop: '20px', width: '100%' }} disabled={loading} >
                {loading ? (
                  <>
                    <Spinner size='sm' />
                    <span>Loading</span>
                  </>

                ) : (
                  'Sign in'
                )
                }
              </Button>
              <Button style={{ width: '100%', marginTop: '15px' }} >Countinue with Google</Button>

              <p style={{ marginTop: '15px' }} > Have an account? <Link to='/sign-up' >Sign Up</Link></p>
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


