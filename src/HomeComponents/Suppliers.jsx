import React from 'react'
import { Container, Button, Row, Col, Card, Spinner, Form, InputGroup ,Dropdown,DropdownButton  } from 'react-bootstrap';
import { useState, useEffect } from 'react';
export default function Suppliers() {
    return (
        <>
            <Container>
                <section className='suppliers mt-5'>
                    <div className="suppliersContainer">
                        <Row className='supplierRow'>
                            <Col className='supplierCol p-5' lg={6} md={12} sm={12}>
                                <h2 className='text-start text-white w-75'>An easy way to send requests to all suppliers</h2>
                                <p className='text-white w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            </Col>

                            <Col className='supplierCol p-5' lg={6} md={12} sm={12}>
                                <div className="sendQuoteSuppliers">
                                    <div className="sendQuoteContent p-4">
                                        <h4 className='text-start'>Send quote to suppliers</h4>
                                        <div className="question">
                                            <p className='m-2'>what item you need ?</p>
                                        </div>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            
                                            <Form.Control as="textarea" rows={3} placeholder='type your details' className='mt-2'/>
                                        </Form.Group>

                                        <div className="optionGroups d-flex justify-content-start">
                                            <InputGroup className="mb-3 quantity me-2">
                                                <Form.Control
                                                    placeholder="Quantity"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>

                                            <DropdownButton id="dropdown-basic-button" title="Pcs" className='dropdown'>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </DropdownButton>
                                        </div>

                                        <Button variant='primary' className='btnProfile mx-auto mt-2'>send inquiry</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </Container >
        </>
    )
}
