import { useState } from 'react';
import { Container } from 'reactstrap';
import { useDispatch } from 'react-redux'
import { signInStart, signInFailure, signInSuccess } from '../Redux/User/Userslice';
const Blogfrom = () => {
  const [formdata, setFormData] = useState({})
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();

      if (res.ok) {
        dispatch(signInSuccess(data));
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>
      <Container>
        <form onSubmit={handleSubmit} style={{ width: '50vw', margin: 'auto' }}>
          <input
            placeholder="Your title"
            name='title'
            type="text"
            tabIndex="1"
            value={formdata.title}
            onChange={handleChange}
            autoFocus
            style={{
              width: '100%',
              color: 'black',
              border: '1px solid #ccc',
              margin: '0 0 5px',
              padding: '10px'
            }}
          />
          <input
            placeholder="Your Email Address"
            type="email"
            tabIndex="2"
            name='email'
            value={formdata.email}
            onChange={handleChange}
            style={{
              width: '100%',
              color: 'black',
              border: '1px solid #ccc',
              background: '#FFF',
              margin: '0 0 5px',
              padding: '10px'
            }}
          />
          <textarea
            placeholder="description"
            name='description'
            tabIndex="5"
            value={formdata.description}
            onChange={handleChange}
            style={{
              width: '100%',
              border: '1px solid #ccc',
              background: '#FFF',
              color: 'black',
              margin: '0 0 5px',
              padding: '10px',
              height: '100px',
              maxWidth: '100%',
              resize: 'none'
            }}
          ></textarea>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
            style={{
              cursor: 'pointer',
              width: '100%',
              border: 'none',
              background: 'rgb(139 149 139)',
              color: '#FFF',
              margin: '0 0 5px',
              padding: '10px',
              fontSize: '15px'
            }}
          >
            Submit
          </button>
        </form>
      </Container>
    </>
  );
};

export default Blogfrom;
