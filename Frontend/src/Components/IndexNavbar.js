import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand to="#" style={{ marginLeft: '70px' }} >Gaurav'blog</Navbar.Brand>
                <Nav
                    className="me-auto my-12 my-lg-1 pl-5"
                    style={{ maxHeight: '100px', display: 'flex', gap: '25px' }}
                    navbarScroll
                >
                    <Nav.Link className='ml-5' style={{ marginLeft: '30px' }} to="/1">Home</Nav.Link>
                    <Nav.Link className='ml-5' to="/2">About</Nav.Link>
                    <Nav.Link className='ml-5' to="/1">Contact</Nav.Link>


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

                    <Button className='ml-14' variant="outline-success">Login</Button>
                    <Button className='ml-4' variant="outline-success">Signup</Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;