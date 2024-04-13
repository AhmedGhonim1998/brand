import React from 'react'
import { Container, Nav, Navbar, Button, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap';
import logoImg from "/logoImg/logo.png";
import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { NavLink,Link } from 'react-router-dom';
import googlePlay from '../assets/footerImg/googlePlay.png';
import appStore from '../assets/footerImg/appStore.png';
import CountryFlag from 'react-country-flag';
export default function SecondFooter() {
    return (
        <>
            <Container>
                <section className='mainFooter mt-5'>
                    <div className="mainFooterContent">
                        <Row>
                            <Col lg={4} md={12} sm={12}>
                                <Navbar.Brand href="#home" className='d-flex justify-content-start'>
                                    <img src={logoImg} alt="Site logo" width={50} className='logoImg footerImg' />
                                    <h1 className='text-capitalize my-auto brandText ms-2'>brand</h1>
                                </Navbar.Brand>

                                <p className='mt-3'>Best information about the company gies here but now lorem ipsum is</p>
                                <div className="socialIcons d-flex justify-content-start">
                                    <div className="faceBook sIcons me-2 d-flex flex-column justify-content-center align-items-center">
                                        <TfiFacebook className='social'/>
                                    </div>
                                    <div className="twitter sIcons me-2 d-flex flex-column justify-content-center align-items-center">
                                        <FaTwitter className='social'/>
                                    </div>

                                    <div className="linkedIn sIcons me-2 d-flex flex-column justify-content-center align-items-center">
                                        <FaLinkedinIn className='social'/>
                                    </div>

                                    <div className="instagram sIcons me-2 d-flex flex-column justify-content-center align-items-center">
                                        <FaInstagram className='social'/>
                                    </div>

                                    <div className="youtube sIcons me-2 d-flex flex-column justify-content-center align-items-center">
                                        <FaYoutube className='social'/>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8} md={12} sm={12} className='footerContent'>
                                <Row className='row-cols-lg-5 row-cols-md-1 row-cols-sm-1 ms-4 mt-3 footerContent' xs={1}>
                                    <Col>
                                        
                                            <h4 className='text-capitalize'>about</h4>

                                        <NavLink className="nav-link">
                                            <p className='text-capitalize'>about us</p>
                                        </NavLink>
                                        <NavLink className="nav-link">
                                            <p className='text-capitalize'>Find store</p>
                                        </NavLink>
                                        <NavLink className="nav-link">
                                            <p className='text-capitalize'>Categories</p>
                                        </NavLink>
                                        <NavLink className="nav-link">
                                            <p className='text-capitalize'>Blogs</p>
                                        </NavLink>
                                    </Col>

                                    <Col>
                                        
                                            <h4 className='text-capitalize'>Partnership</h4>

                                        <NavLink className="nav-link">
                                            <p className='text-capitalize'>about us</p>
                                        </NavLink>
                                        <NavLink className="nav-link">
                                            <p className='text-capitalize'>Find store</p>
                                        </NavLink>
                                        <NavLink className="nav-link">
                                            <p className='text-capitalize'>Categories</p>
                                        </NavLink>
                                        <NavLink className="nav-link">
                                            <p className='text-capitalize'>Blogs</p>
                                        </NavLink>
                                    </Col>


                                    <Col>
                                        
                                            <h4 className='text-capitalize'>Information</h4>

                                        <NavLink className="nav-link">
                                            <p className='text-capitalize'>Help Center</p>
                                        </NavLink>
                                        <NavLink className="nav-link">
                                            <p className='text-capitalize'>Money Refund</p>
                                        </NavLink>
                                        <NavLink className="nav-link">
                                            <p className='text-capitalize'>Shipping</p>
                                        </NavLink>
                                        <NavLink className="nav-link">
                                            <p className='text-capitalize'>Contact us</p>
                                        </NavLink>
                                    </Col>



                                    <Col>
                                        
                                            <h4 className='text-capitalize'>For users</h4>

                                        <NavLink className="nav-link">
                                            <p className='text-capitalize'>Login</p>
                                        </NavLink>
                                        <NavLink className="nav-link">
                                            <p className='text-capitalize'>Register</p>
                                        </NavLink>
                                        <NavLink className="nav-link">
                                            <p className='text-capitalize'>Settings</p>
                                        </NavLink>
                                        <NavLink className="nav-link">
                                            <p className='text-capitalize'>My Orders</p>
                                        </NavLink>
                                    </Col>

                                    <Col>
                                        
                                            <h4 className='text-capitalize'>Get app</h4>
                                            <div className="appfooter">
                                            <img src={googlePlay} alt="img" className='mb-3 appfooterImg'/>
                                            <img src={appStore} alt="img"className='appfooterImg' />
                                            </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </section>

            </Container>
                <section className='commerce mt-5'>
                    <Container>

                    <div className="commerceContent d-flex justify-content-between pt-3 pb-3">
                        <p className='text-capitalize'>&copy; 2023  ecommerce</p>
                        <div className="dropDown d-flex justify-content-end">
                        <CountryFlag countryCode="US" svg className='my-auto' />

                        <DropdownButton
                                            align="end"
                                            title="english"
                                            id="dropdown-menu-align-end"
                                            className='SecDropMenu'
                                        >

                                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </DropdownButton>
                        </div>
                    </div>
                    </Container>
                </section>
        </>
    )
}
