import React from 'react'
import { Container, Row, Col, Alert, Spinner } from 'reactstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux'
import { signInStart, signInFailure, signInSuccess } from '../Redux/User/Userslice';
function SignIn() {

  const {loading , error : errorMessage} = useSelector(state => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formdata, setformdata] = useState({})
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value.trim() });
  };

  const submitdata = async (e) => {
    e.preventDefault();
    if (!formdata.email || !formdata.password) {
      return dispatch(signInFailure("Plleeme fill"))
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata)
      });

      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data))
        navigate('/');
      }
    }

    catch (error) {
      dispatch(signInFailure(error.message))

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


              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" id='email' name='email' placeholder="Enter email" onChange={handlechange} />

              <Form.Label>Password</Form.Label>
              <Form.Control type="password" id='password' name='password' placeholder="Password" onChange={handlechange} />

              <Button variant="primary" type="submit" style={{ marginTop: '20px', width: '100%' }} disabled={loading} >
                {

                  loading ? (
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

              <p style={{ marginTop: '15px' }} >Don't Have an account? <Link to='sign-up' >Sign in</Link></p>
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
