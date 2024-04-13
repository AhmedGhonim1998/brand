import React from 'react'
import { Container, Button, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import hubs from '/ExtraServicesImgs/hubs.png';
import inspection from '/ExtraServicesImgs/inspection.png';
import plain from '/ExtraServicesImgs/plain.png';
import products from '/ExtraServicesImgs/products.png';
import { FaSearch } from "react-icons/fa";
import { LuTrash } from "react-icons/lu";
import { IoArrowRedo } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";

export default function EtraServices() {
    return (
        <>
            <Container>
                <h3 className='mb-3'>our extra services</h3>
                <Row>
                    <Col lg={3} md={6} sm={12} className='mb-3'>
                        <Card className='extraCard mb-3'>
                            <Card.Img variant="top" src={hubs} />
                            <Card.Body>
                                <div className="icon ms-auto">
                                    <FaSearch className='ms-2'/>
                                </div>
                                <Card.Text className='w-50'>
                                    Source from Industry Hubs
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3} md={6} sm={12} className='mb-3'>
                        <Card className='extraCard mb-3'>
                            <Card.Img variant="top" src={products} />
                            <Card.Body>
                                <div className="icon ms-auto">
                                <LuTrash className='ms-2'/>
                                </div>
                                <Card.Text className='w-50'>
                                    customize your products
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3} md={6} sm={12} className='mb-3'>
                        <Card className='extraCard mb-3'>
                            <Card.Img variant="top" src={plain} />
                            <Card.Body>
                                <div className="icon ms-auto">
                                <IoArrowRedo className='ms-2'/>
                                </div>
                                <Card.Text className='w-75'>
                                Fast, reliable shipping by ocean or air
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3} md={6} sm={12} className='mb-3'>
                        <Card className='extraCard mb-3'>
                            <Card.Img variant="top" src={inspection} />
                            <Card.Body>
                                <div className="icon ms-auto">
                                <MdOutlineSecurity className='ms-2'/>
                                </div>
                                <Card.Text className='w-75'>
                                Product monitoring and inspection
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
