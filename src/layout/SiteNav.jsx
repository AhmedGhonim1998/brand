import { Container, Nav, Navbar, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaLanguage } from "react-icons/fa";
import { useTranslation } from "react-i18next"
import { NavLink } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
import { FaMessage, FaHeart } from "react-icons/fa6";
import logo from "../assets/logo.jpeg";
import logoImg from "/logoImg/logo.png";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from "react-icons/fa";
export default function SiteNav() {
    var { t, i18n } = useTranslation()

    console.log(i18n)

    let handleLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('ar') : i18n.changeLanguage('en')
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary navBar">
            <Container>
                <Navbar.Brand href="#home" className='d-flex justify-content-around'>
                    <img src={logoImg} alt="Site logo" width={50} className='logoImg' />
                    <h1 className='text-capitalize my-auto'>brand</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mx-auto navBarCollabse">

                        <InputGroup className="mb-3 inputSearch my-auto">
                            <Form.Control
                                placeholder="search"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Form.Select className='w-25'>
                                <option>All Category</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <Button variant='primary' className='searchBtn text-capitalize'>search</Button>
                        </InputGroup>

                    </Nav>
                    <div className='icons d-flex jusify-content-around'>
                        <FaLanguage onClick={handleLanguage} className='mt-2 language' />
                        <div className="person me-3 ms-2">
                            <IoPerson />
                            <p>profile</p>
                        </div>
                        <div className="person me-3">

                            <FaMessage className='message' />

                            <p className='mb-0 mt-2'>message</p>
                        </div>

                        <div className="person me-3">
                            <FaHeart />
                            <p>orders</p>
                        </div>

                        <div className="person me-3">
                            <NavLink to="/chart">
                                <FaShoppingCart />
                            </NavLink>
                            <p>chart</p>
                        </div>
                    </div>

                    <div className='iconsPar'>

                    </div>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
}
