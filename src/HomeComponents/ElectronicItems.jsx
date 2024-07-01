import React from 'react'
import { Container, Nav, Navbar, Button, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap';
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
import { FiMenu } from "react-icons/fi";
import CountryFlag from 'react-country-flag';


const items = [
    "Automobiles",
    "Clothes and Wear",
    "Home Interiors",
    "Computer and Tech",
    "Tools requirements",
    "Sports and outdoor",
    "Animal and Pets",
    "Machinery Tools",
    "More Category"
]



export default function ElectronicItems() {
    const content = items.map((item , index) => <li key={index} ><NavLink className="nav-link mb-3">{item}</NavLink></li>)



    return (
        <>
            <section className='electronicItems mb-4'>
                <Container>
                    <div className="itemsConatiner">
                        <div className="itemsContent">
                            <Row className='contentRow p-2'>
                                <Col lg={3} md={12} sm={12} className='my-auto'>
                                        <ul className='ElectronicItems'>
                                            {content}
                                        </ul>
                                </Col>

                                <Col lg={6} md={12} sm={12} className='itemsCol'>
                                    <div className="contentCol pt-5 ps-3">
                                        <h3 className='text-capitalize text-start'>latest trending</h3>
                                        <h2 className='text-capitalize text-start'>electronic items</h2>
                                        <Button variant='secondary' className='secBtn text-capitalize'>learn more</Button>
                                    </div>
                                </Col>

                                <Col lg={3} md={12} sm={12}>

                                    <div className='electronicProfile mt-2'>
                                        <div className="electronicContent py-3 px-2">
                                            <div className="electronicImage d-flex justify-content-start">
                                                <img src="./images/profile.png" alt="img" className='imageProfile' />
                                                <p className='text-capitalize my-auto ms-2 w-50'>hi user lets get started</p>
                                            </div>
                                            <div className="profileButtons d-flex flex-column justify-content-center mx-auto">
                                                <Button variant='primary' className='btnProfile mx-auto mt-2'>join now</Button>
                                                <Button variant='secondary' className='secBtn btnProfile mx-auto mt-2'>login</Button>
                                            </div>
                                        </div>
                                    </div>



                                    <div className='electronicProfile supplier py-3 my-3'>
                                        <p className='text-capitalize text-white w-50 ps-3'>getus $10 off with a new supplier</p>
                                    </div>

                                    <div className='electronicProfile supplier py-3 quotes'>
                                        <p className='text-capitalize text-white w-50 ps-3'>send quotes with supplier preferencesr</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
