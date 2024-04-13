import React from 'react'
import { Container, Nav, Navbar, Button, Dropdown, DropdownButton, Row, Col, Card ,Spinner} from 'react-bootstrap';
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
import { useState, useEffect } from 'react';
export default function Offers() {
    const [offers, setoffers] = useState([]);

    let getoffers = () => {
        fetch("./jsonFiles/offers.json")
            .then(res => res.json())
            .then(data => setoffers(data))
    }
    useEffect(() => {
        getoffers()
    }, [])

    return (
        <>
            <section className='offers'>
                <div className="offersContainer">
                    <Container className='offersDealsContiner'>
                        <div className="cardContainer">
                            <div className="rowContainer d-flex justify-content-start">
                                <Row className='dealsRow me-2'>
                                    <Col sm={12} className='dealsCol'>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className='text-capitalize'>deals & offers</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Hygiene equipments</Card.Subtitle>
                                                <div className="d-flex cardTiming justify-content-start">
                                                    <div className="time my-auto p-2">
                                                        <p className='font-weight-bold mb-0 text-center'>04</p>
                                                        <p className='text-capitalize text-center text-white mb-0'>days</p>
                                                    </div>

                                                    <div className="time ms-2 my-auto p-2">
                                                        <p className='font-weight-bold mb-0 text-center'>13</p>
                                                        <p className='text-capitalize text-center text-white mb-0'>hour</p>
                                                    </div>

                                                    <div className="time ms-2 my-auto p-2">
                                                        <p className='font-weight-bold mb-0 text-center'>34</p>
                                                        <p className='text-capitalize text-center text-white mb-0'>min</p>
                                                    </div>

                                                    <div className="time ms-2 my-auto p-2">
                                                        <p className='font-weight-bold mb-0 text-center'>56</p>
                                                        <p className='text-capitalize text-center text-white mb-0'>sec</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>



                                <Row className='row-cols-lg-5 offersRow row-cols-md-5 row-cols-sm-1' xs={1}>
                                    {offers.length > 0 ?
                                        offers.map(offers =>
                                            <Col key={offers.id}className='offerCol'>
                                                <Card className='p-0 offerCard'>
                                                    <div className="imageContainer mx-auto text-center">
                                                    <Card.Img variant="top" src={offers.image}  className='offerImage mx-auto mt-3'/>
                                                    </div>
                                                    <Card.Body>
                                                        <Card.Title className='text-center'>{offers.title}</Card.Title>
                                                        
                                                        <div className="offerPercentage mx-auto text-center">
                                                            <p className='text-center mx-auto'>{offers.offer}</p>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )
                                        :
                                        <Spinner animation="grow" className="m-auto" />
                                    }

                                </Row>
                            </div>

                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}
