import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';


function IndexNavbar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Link to='/'><Navbar.Brand to="#" style={{ marginLeft: '70px' }} >Gaurav'blog</Navbar.Brand>
                </Link>
                <Nav
                    className="me-auto my-12 my-lg-1 pl-5"
                    style={{ maxHeight: '100px', display: 'flex', gap: '25px' }}
                    navbarScroll
                >
                    <Link to='/' ><Nav className='ml-5' style={{ marginLeft: '30px' }} >Home</Nav></Link>

                    <Link to="/about"><Nav className='ml-5' >About</Nav></Link>
                    <Link to='contact'><Nav className='ml-5'>Contact</Nav>
                    </Link>


                    <Form className="d-flex ml-10">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-4"
                            aria-label="Search"
                            style={{ borderRadius: '5px' }}
                        />
                        <Button className='' variant="outline-success">Search</Button>

                    </Form>
                </Nav>
                <Form style={{ display: "flex", gap: '20px' }} >
                    <Link to='/sign-in'><Button className='ml-4' variant="outline-success">Sign-in</Button></Link>
                    <Link to='/sign-up'><Button className='ml-14' variant="outline-success">Sign-up</Button></Link>

                </Form>
            </Container>
        </Navbar>
    );
}

export default IndexNavbar;