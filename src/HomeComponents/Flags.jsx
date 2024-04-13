import React from 'react'
import { Container, Nav, Navbar, Button, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap';
import CountryFlag from 'react-country-flag';
export default function Flags() {
    return (
        <>
            <Container>
                <h3>Suppliers by region</h3>
                <div className="flagContainer">
                    <Row className='row-cols-lg-5 row-cols-md-2 row-cols-sm-1' xs={1}>
                        <Col className='mb-3'>
                            <div className="d-flex justify-content-start">
                                <CountryFlag countryCode="AE" svg className='my-auto flag me-2' />
                                <div className="flagPar my-auto">
                                    <p className='mb-0 '>Arabic Emirates</p>
                                    <p className='mt-0 mb-0 contentFlag'>shopname.ae</p>
                                </div>
                            </div>
                        </Col>

                        <Col className='mb-3'>
                            <div className="d-flex justify-content-start">
                                <CountryFlag countryCode="AU" svg className='my-auto flag me-2' />
                                <div className="flagPar my-auto">
                                    <p className='mb-0 '>Australia</p>
                                    <p className='mt-0 mb-0 contentFlag'>shopname.ae</p>
                                </div>
                            </div>
                        </Col>


                        <Col className='mb-3'>
                            <div className="d-flex justify-content-start">
                                <CountryFlag countryCode="US" svg className='my-auto flag me-2' />
                                <div className="flagPar my-auto">
                                    <p className='mb-0 text-capitalize'>united states</p>
                                    <p className='mt-0 mb-0 contentFlag'>shopname.ae</p>
                                </div>
                            </div>
                        </Col>


                        <Col className='mb-3'>
                            <div className="d-flex justify-content-start">
                                <CountryFlag countryCode="RU" svg className='my-auto flag me-2' />
                                <div className="flagPar my-auto">
                                    <p className='mb-0 text-capitalize'>russia</p>
                                    <p className='mt-0 mb-0 contentFlag'>shopname.ae</p>
                                </div>
                            </div>
                        </Col>


                        <Col className='mb-3'>
                            <div className="d-flex justify-content-start">
                                <CountryFlag countryCode="IT" svg className='my-auto flag me-2' />
                                <div className="flagPar my-auto">
                                    <p className='mb-0 text-capitalize'>italy</p>
                                    <p className='mt-0 mb-0 contentFlag'>shopname.ae</p>
                                </div>
                            </div>
                        </Col>


                        <Col className='mb-3'>
                            <div className="d-flex justify-content-start">
                                <CountryFlag countryCode="DK" svg className='my-auto flag me-2' />
                                <div className="flagPar my-auto">
                                    <p className='mb-0 text-capitalize'>denmark</p>
                                    <p className='mt-0 mb-0 contentFlag'>shopname.ae</p>
                                </div>
                            </div>
                        </Col>

                        <Col className='mb-3'>
                            <div className="d-flex justify-content-start">
                                <CountryFlag countryCode="FR" svg className='my-auto flag me-2' />
                                <div className="flagPar my-auto">
                                    <p className='mb-0 text-capitalize'>france</p>
                                    <p className='mt-0 mb-0 contentFlag'>shopname.ae</p>
                                </div>
                            </div>
                        </Col>


                        <Col className='mb-3'>
                            <div className="d-flex justify-content-start">
                                <CountryFlag countryCode="AE" svg className='my-auto flag me-2' />
                                <div className="flagPar my-auto">
                                    <p className='mb-0 text-capitalize'>arabic emirates</p>
                                    <p className='mt-0 mb-0 contentFlag'>shopname.ae</p>
                                </div>
                            </div>
                        </Col>

                        <Col className='mb-3's>
                            <div className="d-flex justify-content-start">
                                <CountryFlag countryCode="CN" svg className='my-auto flag me-2' />
                                <div className="flagPar my-auto">
                                    <p className='mb-0 text-capitalize'>chaina</p>
                                    <p className='mt-0 mb-0 contentFlag'>shopname.ae</p>
                                </div>
                            </div>
                        </Col>

                        <Col className='mb-3'>
                            <div className="d-flex justify-content-start">
                                <CountryFlag countryCode="GB" svg className='my-auto flag me-2' />
                                <div className="flagPar my-auto">
                                    <p className='mb-0 text-capitalize'>great britain</p>
                                    <p className='mt-0 mb-0 contentFlag'>shopname.ae</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}
