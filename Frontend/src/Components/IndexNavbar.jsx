import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Dropdown, Avatar, DropdownItem, DropdownDivider } from 'flowbite-react'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { Profiler } from 'react';
import nightmode from '../assets/nightmode.png'
import { toggleTheme } from '../Redux/Thems/Themslice';
// import Avator from 'react-icons'
function IndexNavbar() {
    
    const path = useLocation().pathname;
    const navigate = useNavigate();
    const disptch = useDispatch();
    const { currentUser } = useSelector(state => state.user)
    // console.log(currentUser.email)
    // console.log(currentUser.profilePicture)
    // console.log(currentUser)
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Link to='/'><Navbar.Brand to="#" style={{ marginLeft: '70px' }} >Gaurav'blog</Navbar.Brand>
                </Link>
                <Nav
                    className="me-auto"
                    style={{ maxHeight: '100px', display: 'flex', gap: '35px', alignItems: 'center' }}
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
                {/* <Form style={{ display: "flex", gap: '20px' }} > */}
                <Button onClick={() => { disptch(toggleTheme()) }} style={{ width: '50px', marginRight: '15px', backgroundColor: 'currentColor' }} ><img src={nightmode} alt="" /></Button>

                {currentUser ? (

                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar
                                alt='user'
                                img={currentUser.profilePicture}
                                rounded

                            />
                        }

                    >
                        <Dropdown.Header>
                            <span className='block'>{currentUser.username}</span>
                            <span className='block'>{currentUser.email}</span>
                        </Dropdown.Header>
                        <Link to='/dashbord?tab=profile' >
                            <DropdownItem>
                                Profile
                            </DropdownItem>
                            <DropdownDivider></DropdownDivider>
                            <DropdownItem>
                                Sign Out
                            </DropdownItem>
                        </Link>
                    </Dropdown>
                ) : (

                    <Link to='/sign-in'>
                        <Button className='ml-4' variant="outline-success">Sign-in</Button>
                    </Link>

                )
                }


                {/* </Form> */}
            </Container >
        </Navbar >
    );
}
export default IndexNavbar;